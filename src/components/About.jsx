import aerial from "../assets/aerial.jpg";
import Button from "./block/Button";

export default function About() {
  return (
    <div className="flex items-center justify-center gap-10 mt-10 mb-10">
      <div className="w-1/2 h-1/2  p-5">
        <img className="rounded-sm" src={aerial} alt="banner" />
      </div>

      <div className=" flex flex-col justify-center  w-1/2 h-1/2 ">
        <h1 className="text-3xl font-bold">Tentang Kami</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi optio
          eius exercitationem, sint molestias cumque. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Optio quidem ea cumque consequatur autem
          quas non iste id magnam, quaerat in nemo commodi magni aliquid.
          Aliquam ratione ullam et non?
        </p>
        <div className="flex py-5 justify-around items-center ">
          <div>
            <li>Lorem ipsum1</li>
            <li>Lorem ipsum2</li>
            <li>Lorem ipsum3</li>
          </div>
          <div>
            <li>Lorem ipsum4</li>
            <li>Lorem ipsum5</li>
            <li>Lorem ipsum6</li>
          </div>
        </div>
        <div>
          <Button />
        </div>
      </div>
    </div>
  );
}
