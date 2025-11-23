"use client";

import { useState } from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import NavDropdown from "./NavDropdown";

export default function Navbar() {
  const [openIndex, setOpenIndex] = useState(null);
  const [hoveredNav, setHoveredNav] = useState(false);
  const [hoveredModal, setHoveredModal] = useState(false);

  const menu = [
    {
      label: "SHOES",
      items: [
        { title: "Air Force 1", desc: "Classic all-white drip" },
        { title: "Jordan 1", desc: "High or low, your call" },
        { title: "Dunks", desc: "Everyday heat" },
      ],
    },
    {
      label: "HOODIES",
      items: [
        { title: "MARTX Originals", desc: "Premium fleece" },
        { title: "Oversized Fit", desc: "Street-ready" },
      ],
    },
    {
      label: "PANTS",
      items: [
        { title: "Cargo", desc: "Techwear vibes" },
        { title: "Denim", desc: "Stacked / flare" },
      ],
    },
    {
      label: "ACCESSORIES",
      items: [
        { title: "Cargo", desc: "Techwear vibes" },
        { title: "Denim", desc: "Stacked / flare" },
      ],
    },
    {
      label: "COLLECTIONS",
      items: [
        { title: "Cargo", desc: "Techwear vibes" },
        { title: "Denim", desc: "Stacked / flare" },
      ],
    },
  ];

  const currentItems = openIndex !== null ? menu[openIndex].items : [];

  // return (
  //   <nav
  //     className="relative h-20 px-10 flex items-center justify-between border-b border-white/10 bg-black z-50"
  //     onMouseLeave={() => setOpenIndex(null)}
  //   >
  //     {/* LEFT — LOGO */}
  //     <div className="group flex items-center gap-2 cursor-pointer select-none">
  //       <a href="/" className="flex items-center">
  //         <img
  //           src="/M mono white.png"
  //           alt="MartX logo"
  //           className="h-auto w-16"
  //         />
  //         <img
  //           src="/Martx white.svg"
  //           alt="MartX wordmark"
  //           className="w-20 h-auto opacity-0 -translate-x-3 transition-all duration-500 ease-out group-hover:opacity-100 group-hover:translate-x-0"
  //         />
  //       </a>
  //     </div>

  //     {/* MIDDLE — NAV LINKS */}
  //     <div
  //       className="flex items-center gap-10 text-gray-300 relative"
  //       onMouseEnter={() => setHoveredNav(true)}
  //       onMouseLeave={() => setHoveredNav(false)}
  //     >
  //       {menu.map((m, i) => (
  //         <button
  //           key={i}
  //           onMouseEnter={() => setOpenIndex(i)}
  //           className="cursor-pointer hover:text-white transition bg-transparent"
  //         >
  //           {m.label}
  //         </button>
  //       ))}
  //     </div>

  //     {/* RIGHT — ICONS */}
  //     <ul className="flex items-center gap-3">
  //       <li className="text-gray-300 hover:text-white px-3 py-1 rounded-md hover:bg-white/5 transition-all duration-300">
  //         <ShoppingCartIcon />
  //       </li>
  //       <li className="text-gray-300 hover:text-white px-3 py-1 rounded-md hover:bg-white/5 transition-all duration-300">
  //         <SearchIcon />
  //       </li>
  //       <li className="text-gray-300 hover:text-white px-3 py-1 rounded-md hover:bg-white/5 transition-all duration-300">
  //         <AccountCircleIcon />
  //       </li>
  //     </ul>

  //     {/* TESLA-STYLE DROPDOWN (ONE INSTANCE) */}
  //     <NavDropdown
  //       open={openIndex !== null}
  //       items={currentItems}
  //       setHoveredModal={setHoveredModal}
  //     />
  //   </nav>
  // );
  return (
    <nav
      className="relative h-15 px-8 flex items-center justify-between bg-black/40
 backdrop-blur-md border-white/10 z-50"
      onMouseLeave={() => setOpenIndex(null)}
    >
      {/* LEFT — LOGO */}
      <div className="group flex items-center gap-2 cursor-pointer select-none relative">
        <a href="/" className="flex items-center">
          <img
            src="/M mono white.png"
            alt="MartX logo"
            className="h-auto w-14 transition-all duration-300"
          />

          {/* wordmark fade-in */}
          <img
            src="/Martx white.svg"
            alt="MartX wordmark"
            className="w-20 h-auto opacity-0 -translate-x-3 transition-all duration-500 ease-out group-hover:opacity-100 group-hover:translate-x-0"
          />
        </a>

        {/* super subtle glow behind logo */}
        {/* <div className="absolute -z-10 inset-0 blur-2xl opacity-[0.04] bg-white rounded-full"></div> */}
      </div>

      {/* MIDDLE — NAV LINKS */}
      <ul
        className="flex items-center gap-10 text-gray-300 text-[12px] tracking-wide"
        onMouseEnter={() => setHoveredNav(true)}
        onMouseLeave={() => setHoveredNav(false)}
      >
        {menu.map((m, i) => (
          <li
            key={i}
            onMouseEnter={() => setOpenIndex(i)}
            className="relative cursor-pointer hover:text-white transition-all duration-300"
          >
            {/* underline animation */}
            <span
              className="
            after:absolute after:left-0 after:-bottom-1 after:h-[1px] after:w-0 
            after:bg-white/70 after:transition-all after:duration-300 
            hover:after:w-full
          "
            >
              {m.label}
            </span>
          </li>
        ))}
      </ul>

      {/* RIGHT — ICON SET */}
      <ul className="flex items-center">
        {[ShoppingCartIcon, SearchIcon, AccountCircleIcon].map((Icon, idx) => (
          <li
            key={idx}
            className="text-gray-300 hover:text-white px-2 py-2 rounded-md hover:bg-white/5 transition-all duration-300"
          >
            <Icon />
          </li>
        ))}
      </ul>

      {/* TESLA-STYLE EXPANDING DROPDOWN */}
      <NavDropdown
        open={openIndex !== null}
        items={currentItems}
        setHoveredModal={setHoveredModal}
      />
    </nav>
  );
}
