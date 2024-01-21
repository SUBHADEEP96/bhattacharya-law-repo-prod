import dynamic from "next/dynamic";
import { Suspense } from "react";
import "./globals.css";
const Header = dynamic(() => import("./components/Header"));
const Footer = dynamic(() => import("./components/Footer"));
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div style={{ marginBottom: "100px" }}>
          <Header />
          <Suspense fallback={<>Loading...</>}>{children}</Suspense>
          <Footer />
        </div>
      </body>
    </html>
  );
}
