import videoBG from "../assets/videoBG.mov";
import TitleBanner from "./block/TitleBanner";

export default function Banner() {
  return (
    <div className=" h-screen w-screen -z-10 ">
      <div>
        <video
          className="h-screen w-screen object-cover"
          src={videoBG}
          autoPlay
          loop
        ></video>

        <div className="absolute w-full h-full top-0 left-0 bg-black/30 z-1" />
      </div>

      {/* Title Banner */}
      <div className="absolute inset-0 flex justify-center items-center">
        <TitleBanner />
      </div>
    </div>
  );
}
