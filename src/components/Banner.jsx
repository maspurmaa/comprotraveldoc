export default function Banner() {
  return (
    <div className="relative">
      <img
        className="h-screen w-screen object-cover"
        src="https://picsum.photos/id/1015/1280/720"
        alt="banner"
      />
      <div className="absolute inset-0 bg-black/50 ">
        <div className="p-40 text-white">
          <h1 className="text-5xl font-bold">Lorem ipsum dolor sit amet.</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi optio
            eius exercitationem, sint molestias cumque.
          </p>
        </div>
      </div>
    </div>
  );
}
