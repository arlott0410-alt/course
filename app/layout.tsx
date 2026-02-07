import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ArmSungMa — สร้างเว็บ",
  description: "Landing page สำหรับคอร์ส สร้างเว็บ โดย ArmSungMa",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="th">
      <body className="min-h-screen bg-white text-slate-900">{children}</body>
    </html>
  );
}
