import { JetBrains_Mono, Poppins, Roboto_Mono } from "next/font/google";

export const poppins = Poppins({
    weight: "600",
    subsets: ["latin"],
});

export const robotoMono = Roboto_Mono({
    weight: "500",
    subsets: ["latin"],
});

export const jetbrainsMono = JetBrains_Mono({
    weight: ["400", "500", "600"],
    subsets: ["latin"],
});
