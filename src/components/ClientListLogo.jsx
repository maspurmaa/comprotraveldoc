import client1 from "../assets/client-1.png";
import client2 from "../assets/client-2.png";
import client3 from "../assets/client-3.png";
import client4 from "../assets/client-4.png";
import client5 from "../assets/client-5.png";
import client6 from "../assets/client-6.png";

export default function ClientListLogo() {
  const clients = [
    { name: "client1", path: client1 },
    { name: "client2", path: client2 },
    { name: "client3", path: client3 },
    { name: "client4", path: client4 },
    { name: "client5", path: client5 },
    { name: "client6", path: client6 },
  ];
  return (
    <div className="w-full flex flex-col justify-center items-center mt-10 -mb-10">
      <h2 className="text-3xl font-bold mb-10">Client List</h2>

      <div className="flex justify-evenly w-full h-32 gap-5">
        {clients.map((client) => (
          <div
            className="flex justify-center items-center h-28 w-28"
            key={client.name}
          >
            <img
              className="h-full object-contain filter grayscale hover:grayscale-0 transition-all duration-500"
              src={client.path}
              alt="banner"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
