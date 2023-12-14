import type { Metadata } from "next";
import "./globals.css";
import { cn } from "@/lib/utlis";
import localFont from "next/font/local";
import OverlayProvider from "@/components/provider/overlay-provider";
const font = localFont({ src: "./neu.woff2" });
const sao = localFont({
  src: "./sao.woff2",
  variable: "--font-sao",
});
const sao_italic = localFont({
  src: "./sao-italic.woff2",
  variable: "--font-sao-italic",
});
export const metadata: Metadata = {
  title: "Ngô Ngọc Anh",
  description: "Made by Nevir with love",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={cn(font.className, sao.variable, sao_italic.variable)}>
        <OverlayProvider>{children}</OverlayProvider>
      </body>
    </html>
  );
}
