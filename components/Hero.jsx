import { Button } from "@mui/material";
import SpinningShoe from "./SpinningShoe";
const heroTexts = [
  {
    title: "THE NEW ORDER",
    subtitle: "Unauthorized entry detected. Proceed only if you’re ready to ascend.",
    button: "ENTER"
  },
  {
    title: "WELCOME, INITIATE",
    subtitle: "Your induction begins with the //first collection. Study each artifact carefully.",
    button: "PROCEED"
  },
  {
    title: "THE VOID IS CALLING",
    subtitle: "Sink into the aesthetic. Lose your identity. Find the brand.",
    button: "DESCEND"
  },
  {
    title: "IF LOOKS COULD KILL",
    subtitle: "Cold silhouettes. Empty halls. Archive pieces designed to haunt.",
    button: "STEP INSIDE"
  },
  {
    title: "CURATED FOR THE FEW",
    subtitle: "Minimal forms. Sharp construction. A new standard of cold luxury.",
    button: "VIEW COLLECTION"
  }
];

const random = heroTexts[Math.floor(Math.random() * heroTexts.length)];


export default function hero() {
  return (
    <div className="bg-[#0A0A0A] flex items-center justify-between h-screen px-45">
      <div className="absolute inset-0 opacity-[90] contrast-150 bg-[url('/grain.png')] mix-blend-soft-light pointer-events-none"></div>
      <div className="absolute inset-0 bg-[url('/stars.png')] bg-cover opacity-5 mix-blend-screen pointer-events-none" />
      <div className="text-left w-[400px]">
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute left-0 top-1/2 -translate-y-1/2 w-[1600px] h-[1600px]
  bg-[radial-gradient(circle_at_left,rgba(255,255,255,0.15)_0%,rgba(0,0,0,0)_70%)]
  pointer-events-none"
          ></div>
        </div>
        <div className="flex flex-col items-start">
          <p className="text-xs tracking-[0.2em] text-white/70 mb-1">
            NEW COLLECTION
          </p>
          <span className="text-7xl font-bold my-4 tracking-wider block">
            {random.title}
          </span>
          <span className="tracking-wide block pb-5">
            {random.subtitle}
          </span>
          <div className="w-px h-10 bg-white/5"></div>
          <div
            className="absolute left-0 top-1/3 w-[600px] h-[600px] 
bg-[radial-gradient(circle,rgba(255,255,255,0.05)_0%,rgba(0,0,0,0)_70%)]
pointer-events-none"
          ></div>
          <div>
            <Button
              sx={{
                background: "linear-gradient(90deg, #fff 0%, #cfcfcf 100%)",
                color: "#000",
                borderRadius: "10px",
                paddingY: "10px",
                paddingX: "30px",
                fontWeight: 700,
                textTransform: "none",
                boxShadow: "0 0 20px rgba(255,255,255,0.1)",
                "&:hover": {
                  boxShadow: "0 4px 20px rgba(255,255,255,0.08)",
                  background:
                    "linear-gradient(90deg, #e8e8e8 0%, #bdbdbd 100%)",
                  transition: "all 0.4s ease",
                  transform: "translateY(-4px)",
                },
              }}
            >
              {random.button}
            </Button>
          </div>
        </div>
      </div>
      <div className="">
        <div className="relative h-150 w-150">
          <div className="absolute inset-0 border-15 border-white blur h-150 w-150  rounded-full animate-[pulseGlow_6s_ease-in-out_infinite] drop-shadow-[0_0_40px_rgba(255,255,255,0.25)]"></div>
          <div className="absolute inset-0  border-13 w-150 h-150 rounded-full animate-[pulseGlow_6s_ease-in-out_infinite] blur-[px] drop-shadow-[0_0_40px_rgba(255,255,255,0.45)]"></div>
          <div className="absolute inset-0 flex items-center justify-center text-white text-[150px] font-semibold z-0 animate-[pulseGlow_6s_ease-in-out_infinite] blur-[5px]">
            MARTX
          </div>
          <div
            className="absolute right-0 top-1/2 -translate-y-1/2 w-[45vw] h-[45vw]
                bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08)_0%,rgba(0,0,0,0)_75%)]
                blur-[120px] opacity-60 pointer-events-none "
          ></div>
          <div className="translate-y-45 relative">
            <SpinningShoe />
          </div>
        </div>
      </div>
    </div>
  );
}
