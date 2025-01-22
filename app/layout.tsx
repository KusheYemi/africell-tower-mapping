import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Africell Tower Mapping",
  description: "Explore Africell's extensive network coverage",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://js.arcgis.com/4.24/esri/themes/light/main.css"
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
