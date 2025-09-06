import axios from "axios";
import { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const formData = await req.json();
    const response = formData.response;
    console.log("Response", response);
    const { data } = await axios.post(
      `https://www.google.com/recaptcha/api/siteverify?secret=${
        process.env.GOOGLE_CAPTCHA_SECRET_KEY ||
        "6LcjSL4rAAAAAKX38PqwabfE3BbzpTRe-GQAueNp"
      }&response=${response}`,

      { headers: { "Content-Type": "application/json" } }
    );
    return Response.json({ message: "success", success: data.success });
  } catch (error) {
    console.log("Error Occured", error);
    return Response.json({ message: "error" });
  }
}
