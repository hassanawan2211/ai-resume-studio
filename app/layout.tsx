import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "AI Resume Studio",
  description: "AI-powered resume builder built with Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-100">
        <Navbar />
        <main className="pt-20">{children}</main>
      </body>
    </html>
  );
}
