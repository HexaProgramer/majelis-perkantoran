import type { Metadata } from "next";
import { Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Majelis Perkantoran - Membangun Karakter Islami Karyawan",
  description: "Program pembinaan islami untuk karyawan dan perusahaan. Membangun karakter islami dan meningkatkan kualitas spiritual karyawan tanpa mengganggu produktivitas kerja.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={`${playfair.variable} ${jakarta.variable} h-full antialiased`}
    >
      <body className={`min-h-full flex flex-col font-[var(--font-jakarta)]`}>{children}</body>
    </html>
  );
}