// import Navbar from "../../components/Navbar";
import ArcGISMap from "../../components/Map";
import Footer from "../../components/Footer";

export default function MapPage() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* <Navbar /> */}
      <main className="flex-grow">
        <ArcGISMap />
      </main>
      <Footer />
    </div>
  );
}
