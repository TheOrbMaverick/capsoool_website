import { NextRequest, NextResponse } from "next/server";

// Extracted from the HubSpot embed snippet:
// <script src="https://js-eu1.hsforms.net/forms/embed/146355533.js" defer></script>
// <div class="hs-form-frame" data-region="eu1" data-form-id="4c28e286-9315-4abe-9cf0-6d2916119da6" data-portal-id="146355533"></div>

// <script src="https://js-eu1.hsforms.net/forms/embed/149147640.js" defer></script>
// <div class="hs-form-frame" data-region="eu1" data-form-id="ef98ceda-36b2-4e54-bd07-c8953e76c59b" data-portal-id="149147640"></div>

const HUBSPOT_PORTAL_ID = "149147640";
const HUBSPOT_FORM_ID = "ef98ceda-36b2-4e54-bd07-c8953e76c59b";
const HUBSPOT_REGION = "eu1";

// HubSpot Forms API v3 — public submission endpoint, no API key required.
// Docs: https://legacydocs.hubspot.com/docs/methods/forms/submit_form
const HUBSPOT_SUBMIT_URL = `https://api.hsforms.com/submissions/v3/integration/submit/${HUBSPOT_PORTAL_ID}/${HUBSPOT_FORM_ID}`;

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email } = body as { name?: string; email?: string };

    if (!email) {
      return NextResponse.json(
        { success: false, error: "Email is required." },
        { status: 400 },
      );
    }

    // Build the HubSpot fields array.
    // Internal field names match the HubSpot form definition: firstname, email.
    const fields: { name: string; value: string }[] = [
      { name: "email", value: email },
    ];

    if (name && name.trim()) {
      fields.push({ name: "firstname", value: name.trim() });
    }

    const hubspotPayload = {
      fields,
      context: {
        // pageUri and pageName help HubSpot attribute the submission correctly.
        pageUri: req.headers.get("referer") ?? "https://capsoool.com",
        pageName: "Capsoool — Join the Waitlist",
        // hutk is the HubSpot tracking cookie — we omit it here since this
        // is a server-side submission; HubSpot handles anonymous contacts fine.
      },
      legalConsentOptions: {
        // Required by GDPR if your portal has consent configured.
        // Setting legitimateInterest satisfies the "we'll send updates" copy
        // already shown in the modal.
        legitimateInterest: {
          value: true,
          subscriptionTypeId: 999,
          legalBasis: "LEAD",
          text: "By joining, you agree to receive product updates from Capsoool.",
        },
      },
    };

    const response = await fetch(HUBSPOT_SUBMIT_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // eu1 region requires the region header for correct routing
        ...(HUBSPOT_REGION === "eu1" && { "X-HubSpot-Region": "eu1" }),
      },
      body: JSON.stringify(hubspotPayload),
    });

    if (!response.ok) {
      const errorBody = await response.text();
      console.error(
        `HubSpot submission failed [${response.status}]:`,
        errorBody,
      );
      return NextResponse.json(
        { success: false, error: "Failed to join waitlist. Please try again." },
        { status: 502 },
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Waitlist API error:", error);
    return NextResponse.json(
      { success: false, error: "Internal server error." },
      { status: 500 },
    );
  }
}
