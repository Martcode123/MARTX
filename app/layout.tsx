import "./globals.css";
import { Geist, Geist_Mono } from 'next/font/google';
import Navbar from "../components/Navbar"

const geist = Geist({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geist.className} bg-[#0A0A0A] text-white `}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
