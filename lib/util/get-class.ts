import { Manrope, Poppins } from "@next/font/google";

const fontManrope = Manrope({
  weight: ["700", "500"],
  subsets: ["latin"],
});

const fontPoppins = Poppins({
  weight: ["400", "800"],
  subsets: ["latin"],
});

export const poppins = fontPoppins.className;
export const manrope = fontManrope.className;
