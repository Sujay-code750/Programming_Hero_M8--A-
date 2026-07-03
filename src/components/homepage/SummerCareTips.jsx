import Image from "next/image";
import SunImg from "../../../public/images/sun.png";
import SunGlassImg from "../../../public/images/sunglass.png";
import WatterImg from "../../../public/images/water.png";

const SummerCareTips = () => {
  return (
    <div className="bg-[#f3f6fb]">
      <div className="container mx-auto p-10">
        <div className="mb-5 space-y-1">
          <h1 className="text-3xl font-bold">Summer Care Tips</h1>
          <p className="text-gray-500">
            Simple tips to keep you healthy, safe and glowing all summer.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          <div className="flex gap-5 bg-white p-5 rounded-xl shadow">
            <div>
              <Image src={WatterImg} width={70} height={50} alt="Sun image" />
            </div>
            <div className="space-y-2">
              <h2 className="font-bold text-xl">Stay Hydrated</h2>
              <p>Drink of water throughout the way.</p>
            </div>
          </div>

          <div className="flex gap-5 bg-white p-5 rounded-xl shadow">
            <div>
              <Image src={SunImg} width={70} height={50} alt="Sun image" />
            </div>
            <div className="space-y-2">
              <h2 className="font-bold text-xl">Use Sunscreen</h2>
              <p>Apply sunscreen every 2 houes for best protection.</p>
            </div>
          </div>

          <div className="flex gap-5 bg-white p-5 rounded-xl shadow">
            <div>
              <Image src={SunGlassImg} width={70} height={50} alt="Sun image" />
            </div>
            <div className="space-y-2">
              <h2 className="font-bold text-xl">Wear Sunglasses</h2>
              <p>Protect your eyes from harmful UV rays.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SummerCareTips;
