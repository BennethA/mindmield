import { BiSquare } from "react-icons/bi";
import location from "../assets/location.png";
import motor from "../assets/motor.png";

const Delivery = () => {
  return (
    <div className="flex items-center justify-center h-screen relative overflow-hidden bg-none p-8">
      <div className="min-h-[700px] min-w-[600px] bg-[#fccf3b] overflow-hidden relative">
        <div
          className="absolute top-1/2 left-1/2 w-[500px] h-[500px] z-[5] pointer-events-none"
          style={{ transform: "translate(-50%, -50%)" }}
        >
          {Array.from({ length: 14 }).map((_, i) => (
            <div
              key={i}
              className="absolute left-[230px] top-0 h-full w-[50px] bg-[#bebe1331]"
              style={{
                transform: `rotate(${i * 26}deg) translateY(-250px)`,
                transformOrigin: "center",
              }}
            ></div>
          ))}
        </div>
        <div className="absolute rounded-full h-[400px] w-[400px] bg-[#ffef61] bottom-[25%] right-[25%] blur-3xl z-[10]"></div>
        <div className="h-[500px] w-[350px] absolute right-[-80px] top-[-120px] z-[11]">
          <img
            src={location}
            alt="location"
            className="w-full h-full drop-shadow-xl"
          />
        </div>
        <div className="absolute left-[20px] top-[110px] z-[11] flex flex-col gap-[40px]">
          <div className="flex items-center gap-1 font-[500] w-full text-[14px]">
            <BiSquare />
            <p>MR. OTC DELIVERY</p>
          </div>
          <div>
            <p className="text-[43px] font-[700] tracking-tight">
              Mr.Otc Delivery
            </p>
            <p className="text-[14px] font-[600] tracking-widest mt-[-3px]">
              DELIVERY SERVICE
            </p>
          </div>
          <div className="flex items-center gap-1">
            <p>Contact Us</p>
            <div>
              {" "}
              <p className="font-semibold">
                +233 <span className="font-normal">(0)</span> 59 418 0797
                <span className="font-semibold">
                  <span className="ml-[3px]"> -</span> George
                </span>
              </p>
              <p className="font-semibold relative inline-block">
                +233 <span className="font-normal">(0)</span> 55 757 4096{" "}
                <span className="font-semibold">- Terter</span>
                <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#fa3535] rounded-full top-9"></span>
              </p>
            </div>
          </div>
          <div className="flex text-[12px] font-semibold flex-col leading-4 mt-3">
            <p>In need of a fast pickup & delivery service?</p>
            We got you covered
          </div>
        </div>
        <div className="absolute bottom-[-30px] right-[-80px] w-[550px] h-[550px] z-[11]">
          <div className="absolute rounded-full h-[300px] w-[300px] bg-[#ffef61] bottom-[25%] right-[-42%] blur-3xl z-[10]"></div>
          <img src={motor} alt="Motor" className="w-full h-full z-[11]" />
        </div>
      </div>
    </div>
  );
};

export default Delivery;
