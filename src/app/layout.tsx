import type { Metadata } from "next";
import localFont from "next/font/local";
import AppNav from "./components/nav/AppNav";
import "./globals.css";
import "@fortawesome/fontawesome-free/css/all.css";
import NavVertical from "./NavVertical";
import { ContainerL } from "../components";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Base components",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="flex flex-col h-full">
          <AppNav />
          <div className="flex h-full w-full">
            <NavVertical />
            <ContainerL className="w-4/5">{children}</ContainerL>
          </div>
        </div>
      </body>
    </html>
  );
}
