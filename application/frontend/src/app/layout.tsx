import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import CardContext from "@/context/CardContext";

const poppins = Poppins({
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Learn with kru",
  description: "The kru platform provide you the real connection",
  icons: "/Logos/KruLogo.png",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <CardContext>{children}</CardContext>
        {/* <div className="w-full flex justify-center items-end bg-gray-900 mt-6"><Footer/></div> */}
      </body>
    </html>
  );
}
