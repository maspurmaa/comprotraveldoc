import Banner from "../components/Banner";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <div>
      <div className="relative z-20">
        <Navbar />
      </div>
      <div className="absolute inset-0 z-10">
        <Banner />
      </div>
    </div>
  );
}
