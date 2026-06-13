import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AgriLink — Smart Agricultural Supply Chain",
  description: "Connecting Nigerian farmers, aggregators, agro-dealers, and corporate buyers through a smart digital supply chain platform.",
};

type RootLayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
