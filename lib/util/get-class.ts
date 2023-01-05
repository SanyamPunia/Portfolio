import { Manrope, Poppins } from "@next/font/google";

const fontManrope = Manrope({
  weight: ["700", "500"],
});

const fontPoppins = Poppins({
  weight: ["400", "800"],
});

export const poppins = fontPoppins.className;
export const manrope = fontManrope.className;
