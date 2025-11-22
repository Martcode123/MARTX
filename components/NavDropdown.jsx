"use client";

import { useState, useRef, useEffect } from "react";

export default function NavDropdown({ open, items, setHoveredModal }) {
  const [height, setHeight] = useState("0px");
  const contentRef = useRef(null);

  // Auto-resize height depending on content
  useEffect(() => {
    if (open && contentRef.current) {
      const newHeight = contentRef.current.scrollHeight + "px";
      setHeight(newHeight);
    } else {
      setHeight("0px");
    }
  }, [open, items]);

  return (
    <div
      onMouseEnter={() => setHoveredModal(true)}
      onMouseLeave={() => setHoveredModal(false)}
      className={`
        absolute left-0 top-full w-full z-40
        transition-all duration-300 ease-out

        ${
          open
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-4 pointer-events-none"
        }
      `}
      style={{
        overflow: "hidden",
        height,
        backgroundColor: "black",
      }}
    >
      {/* Animated top border (makes it look like navbar opens its mouth) */}
      <div
        className={`
          w-full h-[px] transition-opacity duration-300
          ${open ? "opacity-100 bg-white/10" : "opacity-0"}
        `}
      />

      {/* Dropdown content wrapper (measured for smooth height animations) */}
      <div ref={contentRef}>
        <div className="max-w-6xl mx-auto p-10 grid md:grid-cols-3 gap-10 text-white">
          {items.map((item, i) => (
            <div
              key={i}
              className={`
                transition-all duration-300 opacity-0 translate-y-2
                animate-[fadeIn_0.35s_ease-out_forwards]
              `}
              style={{ animationDelay: `${i * 80}ms` }} // stagger animation
            >
              <h3 className="text-2xl font-semibold">{item.title}</h3>
              <p className="text-sm text-gray-400 mt-1">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
