import {
  GiAmpleDress,
  GiSewingMachine,
  GiSewingNeedle,
  GiSewingString,
  GiShirtButton,
} from "react-icons/gi";
import { LuShirt } from "react-icons/lu";
import { PiCoatHangerBold, PiNeedleLight } from "react-icons/pi";
import dress from "../assets/dress.png";

const Mary = () => {
  return (
    <div className="bg-none px-8 text-white flex items-center justify-center min-h-screen">
      <div className="bg-gradient-to-b from-[#fd4c4c] via-[#f13f5d] to-[#fd4c4c] min-h-[600px] min-w-[600px] rounded-full border-8 border-white shadow-2xl flex items-center justify-center overflow-hidden relative p-6 text-white font-serif">
        <div className="absolute min-h-[600px] min-w-[600px] grid grid-cols-10 p-2 opacity-[0.20]">
          {Array.from({ length: 100 }, (_, i) => {
            const icons = [
              <PiNeedleLight key="1" />,
              <GiShirtButton key="2" />,
              <GiSewingString key="3" />,
              <GiSewingMachine key="4" />,
              <GiAmpleDress key="5" />,
              <PiCoatHangerBold key="6" />,
              <LuShirt key="7" />,
            ];
            const IconComponent = icons[i % icons.length];
            return (
              <div
                key={i}
                className="flex justify-center text-3xl"
              >
                {IconComponent}
              </div>
            );
          })}
        </div>

        <div className="flex flex-col items-center justify-center z-10 text-center space-y-4">
          <img
            src={dress}
            alt="Dress"
            className="w-[140px] h-[220px] drop-shadow-xl"
          />

          <h1 className="text-5xl font-extrabold tracking-wide drop-shadow-md">
            Mary&apos;s Fashion Store
          </h1>

          <div className="flex items-center justify-center gap-4">
            <hr className="w-[80px] border-t-2 border-white" />
            <GiSewingNeedle className="text-4xl text-white drop-shadow" />
            <hr className="w-[80px] border-t-2 border-white" />
          </div>

          <p className="text-xl italic tracking-wide font-medium">
            Elevate Your Style
          </p>

          <div className="bg-white text-rose-600 px-4 py-2 rounded-full font-bold text-lg shadow-md">
            Contact: 0557159368
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mary;
