"use client";

import { useState } from "react";
import { MoveUpRight } from "lucide-react";
import WaitlistForm from "./WaitlistForm";

export default function HeroButtons() {
  const [showForm, setShowForm] = useState(false);

  const handleButtonClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setShowForm(true);
  };

  return (
    <>
      {/* Desktop Button - hidden on mobile */}
      <div className="relative z-10 flex items-end hidden lg:flex">
        <button
          onClick={handleButtonClick}
          type="button"
          className="relative overflow-hidden font-montserrat h-fit font-semibold text-sm xl:text-lg px-4 xl:px-6 py-2.5 xl:py-3.5 bg-[#FF6600] text-white rounded-full hover:bg-primary transition-all flex flex-row justify-between pl-4 xl:pl-5 gap-x-2 xl:gap-x-3 pr-3 xl:pr-4 items-center group shadow-lg hover:shadow-xl hover:scale-105 duration-500 ease-out whitespace-nowrap"
        >
          <span className="relative z-10 px-1 xl:px-2">JOIN OUR WAITLIST</span>
          <MoveUpRight className="relative z-10 w-7 xl:w-9 text-white h-7 xl:h-9 bg-black rounded-full p-1 flex-shrink-0" />
          <div className="absolute inset-0 bg-white/20 transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out skew-x-12"></div>
        </button>
      </div>

      {/* Mobile Button - hidden on desktop */}
      <div className="relative z-10 pt-3 flex items-start justify-start lg:hidden">
        <button
          onClick={handleButtonClick}
          type="button"
          className="relative overflow-hidden font-montserrat h-fit font-semibold text-base md:text-lg px-4 md:px-6 py-2 md:py-3 bg-[#FF6600] text-white rounded-full hover:bg-primary transition-all flex flex-row justify-between pl-3 md:pl-4 gap-x-2 md:gap-x-3 pr-2 md:pr-3 items-center group shadow-lg hover:shadow-xl hover:scale-105 duration-500 ease-out whitespace-nowrap"
        >
          <span className="relative z-10 px-1 md:px-3">JOIN OUR WAITLIST</span>
          <MoveUpRight className="relative z-10 w-6 md:w-8 text-white h-6 md:h-8 bg-black rounded-full p-1 flex-shrink-0" />
          <div className="absolute inset-0 bg-white/20 transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out skew-x-12"></div>
        </button>
      </div>

      {/* Waitlist Form Modal */}
      <WaitlistForm isOpen={showForm} onClose={() => setShowForm(false)} />
    </>
  );
}
