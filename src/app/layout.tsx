import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Chat App",
  description: "Hackathon MVP AI App",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
