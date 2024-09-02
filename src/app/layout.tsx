import type { Metadata } from "next";
import { Inter, Poppins, Noto_Serif_Old_Uyghur } from "next/font/google";
import "./globals.css";
import { BottomDock } from "@/components/web/BottomDock/Index";

const fonts_poppins = Poppins({ subsets: ["latin"], weight: ["100", "200", "300", "400", "500", "600","700","800","900"] });
export const fonts_old_uyghur = Noto_Serif_Old_Uyghur({ weight: ["400"], subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Rudhra Joshi",
  description: "A Pharmacy Graduate & MS in Bioinformatics Student",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${fonts_poppins.className} `}>{children}
        <div className="sticky bottom-20 z-50 flex justify-center  ">
          <div className="">
            <BottomDock />
          </div></div>
      </body>
    </html>
  );
}
