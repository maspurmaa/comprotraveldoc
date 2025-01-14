import aerial from "../assets/aerial.jpg";
import TitleBanner from "./block/TitleBanner";

export default function Banner() {
  return (
    <div className="absolute h-screen w-screen">
      <div className="relative">
        <img
          className="h-screen w-screen object-cover"
          src={aerial}
          alt="banner"
        />
        <div className="absolute vmax-h-screen top-0 left-0 w-full h-full  bg-black/30 z-1" />
      </div>

      {/* Title Banner */}
      <div className="absolute inset-0 flex justify-center items-center z-10">
        <TitleBanner />
      </div>
    </div>
  );
}
