import Banner from "../components/Banner";
import Navbar from "../components/Navbar";
import About from "../components/About";
import ClientListLogo from "../components/ClientListLogo";

export default function Home() {
  return (
    <div
      className="w-screen flex flex-col items-center justify-center 
    "
    >
      <Navbar />
      <Banner />
      <About />
      <ClientListLogo />
    </div>
  );
}
