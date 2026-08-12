"use client";

import { useEffect, useState } from "react";
import { ChevronUp } from "lucide-react";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggle = () => {
      setVisible(window.scrollY > 400);
    };

    toggle();

    window.addEventListener("scroll", toggle);

    return () => window.removeEventListener("scroll", toggle);
  }, []);

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      type="button"
      onClick={scrollTop}
      aria-label="Sayfanın başına dön"
      className={`
        fixed
        bottom-[72px] right-3
        z-50
        flex h-12 w-12
        items-center justify-center
        rounded-full
        bg-sky-700
        text-white
        shadow-xl
        transition-all duration-300
        hover:scale-110
        hover:bg-sky-800

        sm:bottom-[88px]
        sm:right-6
        sm:h-14
        sm:w-14

        ${
          visible
            ? "translate-y-0 opacity-100"
            : "pointer-events-none translate-y-3 opacity-0"
        }
      `}
    >
      <ChevronUp className="h-6 w-6 sm:h-7 sm:w-7" />
    </button>
  );
}
