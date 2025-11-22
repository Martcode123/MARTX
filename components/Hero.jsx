import { Button } from "@mui/material";
import SpinningShoe from "./SpinningShoe";
export default function hero() {
  return (
    <div
      className="bg-[#0A0A0A] flex items-center justify-between h-screen px-45 absolute inset-0 bg-[radial-gradient(ellipse_at_70%_50%,rgba(80,0,160,0.25)_0%,rgba(0,0,0,1)_85%)] pointer-events-none"
    >
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
        <div className="relative h-150 w-150">
          <div className="absolute inset-0 border-8 border-white blur h-150 w-150  rounded-full animate-[pulseGlow_6s_ease-in-out_infinite]"></div>
          <div className="absolute inset-0  border-6 w-150 h-150 rounded-full animate-[pulseGlow_6s_ease-in-out_infinite]"></div>
          <div className="absolute inset-0 flex items-center justify-center text-white text-[150px] font-semibold z-0 animate-[pulseGlow_6s_ease-in-out_infinite] blur-[2px]">
            MARTX
          </div>
          <div className="translate-y-45 relative z-10">
            <SpinningShoe />
          </div>
        </div>
      </div>
    </div>
  );
}
