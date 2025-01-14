import { Link } from "react-router";
export default function PageNotFound() {
  return (
    <div className=" h-screen w-screen flex flex-col justify-center items-center">
      <p className="font-bold text-3xl">PAGE NOT FOUND BRO!</p>

      <Link to={"/"}> Go Home</Link>
    </div>
  );
}
