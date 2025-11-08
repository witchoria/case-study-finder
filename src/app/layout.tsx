import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Product Lurk - Keep your enemies close, and their case studies closer.",
  description: "Track and analyze competitor case studies",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://use.typekit.net/yht3blr.css" />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
