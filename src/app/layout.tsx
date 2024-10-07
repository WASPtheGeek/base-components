import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Nav, NavLink } from "../components/nav";

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
        <div>
          <Nav>
            <NavLink href={"/"}>Home</NavLink>
            <NavLink href={"/test"}>Test</NavLink>
          </Nav>
          {children}
        </div>
      </body>
    </html>
  );
}
