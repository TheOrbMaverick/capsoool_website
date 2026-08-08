import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email } = body;

    if (!email) {
      return NextResponse.json(
        { success: false, error: "Email is required." },
        { status: 400 }
      );
    }

    const sheetUrl = process.env.WAITLIST_SHEET_URL;

    if (!sheetUrl) {
      console.error("WAITLIST_SHEET_URL is not configured.");
      return NextResponse.json(
        { success: false, error: "Server misconfiguration." },
        { status: 500 }
      );
    }

    // Google Apps Script Web Apps redirect POST requests through a Google
    // auth/verification interstitial when called server-to-server, making
    // it impossible to reliably use doPost(). The fix is to use a GET
    // request with data encoded as URL query parameters — GET requests
    // don't go through the same redirect chain, so doGet() runs cleanly.
    const url = new URL(sheetUrl);
    url.searchParams.set("name", name || "");
    url.searchParams.set("email", email);

    const response = await fetch(url.toString(), {
      method: "GET",
      redirect: "follow",
    });

    const text = await response.text();

    let result: { success: boolean; error?: string };
    try {
      result = JSON.parse(text);
    } catch {
      console.error("Apps Script non-JSON response:", text.slice(0, 500));
      return NextResponse.json(
        { success: false, error: "Unexpected response from waitlist service." },
        { status: 502 }
      );
    }

    if (!result.success) {
      console.error("Apps Script reported failure:", result.error);
      return NextResponse.json(
        { success: false, error: result.error ?? "Failed to join waitlist." },
        { status: 502 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Waitlist API error:", error);
    return NextResponse.json(
      { success: false, error: "Internal server error." },
      { status: 500 }
    );
  }
}
