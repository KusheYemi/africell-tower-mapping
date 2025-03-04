import "./globals.css";
import CalciteInitializer from "../components/CalciteLoader";

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
          href="https://js.arcgis.com/4.31/esri/themes/light/main.css"
        />
        <link
          rel="stylesheet"
          href="https://unpkg.com/@esri/calcite-components@2.13.2/dist/calcite/calcite.css"
        />
      </head>
      <body className="antialiased">
        <CalciteInitializer />
        {children}
      </body>
    </html>
  );
}
