import type { Metadata } from "next";
import localFont from "next/font/local";
import AppNav from "./components/nav/AppNav";
import "./globals.css";
import "@fortawesome/fontawesome-free/css/all.css";

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
          <AppNav />
          {children}
        </div>
      </body>
    </html>
  );
}
