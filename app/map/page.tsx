import Navbar from "../../components/Navbar";

export default function MapPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow flex items-center justify-center bg-gray-100">
        <h1 className="text-4xl font-bold text-gray-800">Map Page</h1>
      </main>
    </div>
  );
}
