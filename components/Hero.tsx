import Link from "next/link";

export default function Hero() {
  return (
    <header className="bg-gradient-to-r from-[#a01775] to-[#662d86] text-white text-center py-32 px-8 mt-16">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-5xl font-bold mb-6 leading-tight">
          Explore Africell&apos;s Extensive Network
        </h1>
        <p className="text-xl mb-8 opacity-90">
          Discover our commitment to keeping you connected anytime, anywhere.
        </p>
        <Link
          href="/map"
          className="inline-block bg-[#f38130] text-white py-4 px-8 rounded font-semibold transition-all hover:bg-[#a01775] hover:-translate-y-0.5"
        >
          Explore the Map
        </Link>
      </div>
    </header>
  );
}
