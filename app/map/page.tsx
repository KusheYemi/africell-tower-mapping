import Navbar from "../../components/Navbar";
import ArcGISMap from "../../components/Map";
import Footer from "../../components/Footer";

export default function MapPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <div className="h-[calc(100vh-64px)] mt-16">
          <ArcGISMap />
        </div>
      </main>
      <Footer />
    </div>
  );
}
