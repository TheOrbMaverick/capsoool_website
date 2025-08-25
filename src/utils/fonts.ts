import { Poppins } from "next/font/google";
import localFont from "next/font/local";

export const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const mauline = localFont({ src: "../../public/fonts/Mauline.otf" });
