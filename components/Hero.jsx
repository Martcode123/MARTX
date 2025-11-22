import { Button } from "@mui/material";
export default function hero() {
  return (
    <div className="flex items-center justify-between h-screen px-20">
      <div className="text-left w-[400px]">
        <div className="flex flex-col items-start">
          <span className="text-7xl font-bold my-4 tracking-wider block">
            STEP INTO STYLE
          </span>
          <span className="tracking-wide block">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
            exercitationem maiores totam, ab saepe accusamus voluptates
            cupiditate expedita
          </span>
          <div className="">
            <Button>SHOP NOW</Button>
          </div>
        </div>
      </div>
      <div className="">
        <div className="relative h-120 w-120">
          <div className="absolute inset-0 border-8 border-[#59E3FF] blur h-120 w-120  rounded-full animate-[pulseGlow_6s_ease-in-out_infinite]"></div>
          <div className="absolute inset-0 border w-120 h-120 rounded-full opacity-40"></div>
        </div>
      </div>
    </div>
  );
}
