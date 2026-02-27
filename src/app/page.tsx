"use client";
import Features from "@/components/Features/Features";
import HeroCollar from "@/components/HeroCollar";
import Companies from "@/components/Companies/Companies";
import Unleash from "@/components/Unleash";
import Image from "next/image";
import Marquee from "react-fast-marquee";
import { Star } from "lucide-react";
import FeatureShowcase from "@/components/FeatureShowcase.tsx";
import StickyButtons from "@/components/StickyButtons";
import HeroButtons from "@/components/HeroButtons";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import WaitlistForm from "@/components/WaitlistForm";

export default function Home() {
  const searchParams = useSearchParams();
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    if (searchParams.get("waitlist") == "true") {
      setShowForm(true);
    }
  }, [searchParams]);

  return (
    <>
      <StickyButtons />

      {/* hero section desktop */}
      <div className="relative w-full h-auto flex-col items-center overflow-hidden hidden lg:flex">
        <div className="bg-foreground w-full max-w-[85vw] min-h-[90vh] flex flex-col pb-24">
          <div className="flex flex-col justify-start items-start">
            <h1 className="relative font-borela text-4xl md:text-8xl lg:text-[9vw] mt-4 md:mt-8 text-background leading-none">
              SMART COLLARS
              <span className="md:absolute font-mombay text-6xl sm:text-7xl -bottom-5 right-0 md:left-[42%] z-10 text-background">
                for
              </span>
            </h1>
            <h1 className="font-montserrat text-2xl md:text-4xl lg:text-[5vw] rounded-lg bg-primary leading-none p-5">
              HAPPIER PETS
            </h1>
          </div>

          <Image
            alt="hero dog image"
            src="/hero/dog-hero2.png"
            width={1000}
            height={1000}
            priority
            className="absolute bottom-[7%] right-[2%] lg:right-[4%] z-[1] max-h-[90vh] h-auto w-auto scale-[1.1]"
          />

          <div className="lg:flex items-center max-w-[500px] w-full h-[200px] bg-background p-7 rounded-3xl mt-[6rem] hidden">
            <h3 className="text-2xl text-white text-opacity-70 font-montserrat">
              REDEFINING THE FUTURE OF PET CARE WITH OUR{" "}
              <span className="text-opacity-100 text-white flex items-center gap-2">
                NEXT-GEN{" "}
                <Image
                  src="/hero/zig.png"
                  alt="zigzag"
                  width={1000}
                  height={1000}
                  loading="lazy"
                  className="w-auto h-full"
                />
              </span>{" "}
              SMART COLLARS
            </h3>
            <Image
              alt="hero dog image"
              src="/hero/video.png"
              width={1000}
              height={1000}
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>

          <div className="mt-[2rem]">
            <HeroButtons />
          </div>

          <div className="absolute bottom-0 left-0 overflow-hidden w-full z-20">
            <Marquee
              autoFill
              className="text-xl bg-background opacity-80 py-1 text-white"
            >
              <Star className="mx-5 fill-white" /> MYPERRO{" "}
              <Star className="mx-5 fill-white" /> SMART COLLARS{" "}
              <Star className="mx-5 fill-white" /> TRACK.MONITOR.PROTECT
            </Marquee>
          </div>
        </div>
      </div>

      {/* hero section mobile */}
      <div className="relative w-full h-auto flex flex-col items-center overflow-hidden lg:hidden">
        <div className="bg-foreground w-full max-w-[85vw] min-h-[90vh] flex flex-col pb-24">
          <div className="flex flex-col justify-start items-start">
            <h1 className="relative font-borela text-5xl md:text-6xl lg:text-[9vw] mt-8 md:mt-16 text-background leading-none">
              SMART COLLARS
              <span className="font-mombay text-6xl sm:text-7xl text-background ml-4">
                for
              </span>
            </h1>
            <h1 className="font-montserrat text-2xl md:text-4xl lg:text-[5vw] rounded-lg bg-primary leading-none p-5">
              HAPPIER PETS
            </h1>
            <div>
              <HeroButtons />
            </div>
          </div>

          <Image
            alt="hero dog image"
            src="/hero/dog-hero.png"
            width={1000}
            height={1000}
            priority
            className="max-h-full h-auto w-auto self-center z-[1]"
          />

          <div className="absolute bottom-0 left-0 overflow-hidden w-full z-20">
            <Marquee
              autoFill
              className="text-xl bg-background opacity-80 py-3 text-white"
            >
              <Star className="mx-5 fill-white" /> MYPERRO{" "}
              <Star className="mx-5 fill-white" /> SMART COLLARS{" "}
              <Star className="mx-5 fill-white" /> TRACK.MONITOR.PROTECT
            </Marquee>
          </div>
        </div>
      </div>

      <HeroCollar />

      {/* Future of Pet Care section */}
      <div className="flex flex-col items-center relative bg-foreground w-full min-h-screen text-center bg-white">
        <div className="max-w-[85vw] w-full h-auto items-stretch">
          <h1 className="font-borela text-black p-4 text-3xl lg:text-6xl mt-0 lg:mt-8 flex-shrink-0">
            THE <span className="text-gray-600">FUTURE</span> OF PET CARE
          </h1>
          <div className="lg:hidden text-lg p-4 lg:text-xl text-left flex flex-col items-center">
            <Image
              src="/petcare/collar-features-icon.png"
              height={1500}
              width={1500}
              alt="dog icon"
              loading="lazy"
              className="object-contain mb-4 w-40"
            ></Image>
            <p className="text-gray-600">
              Our smart collars offer you peace of mind with real-time tracking
              and health insights for your pets.
            </p>
          </div>
          <Image
            src="/hero/collar.svg"
            height={1000}
            width={1000}
            alt="center image"
            loading="lazy"
            className="lg:absolute lg:top-[58%] lg:mt-0 mt-4 lg:left-1/2 lg:transform lg:-translate-x-1/2 lg:-translate-y-1/2 z-[1] h-[70%] w-auto"
          />
          <Image
            src="/hero/base.svg"
            width={1000}
            height={1000}
            alt="bottom left image"
            loading="lazy"
            className="hidden lg:block lg:absolute left-0 -bottom-0 h-auto w-8/12 z-[0]"
          />
          <div className="relative flex flex-col lg:flex-row lg:justify-between items-center min-h-[30em] text-black -translate-y-5 z-[2] w-full">
            <div className="flex justify-start w-full lg:w-1/2 self-end">
              <div className="flex flex-row items-end w-full lg:w-[30rem] text-right p-4">
                <div className="text-xl text-left lg:block hidden w-full">
                  <Image
                    src="/petcare/collar-features-icon.png"
                    height={1500}
                    width={150}
                    alt="features"
                    loading="lazy"
                    className="object-contain mb-4 max-w-full"
                  ></Image>
                  <p className="text-gray-600 max-w-[90%]">
                    Our smart collars offer you peace of mind with real-time
                    tracking and health insights for your pets.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex justify-center w-full lg:w-1/2 p-4 items-center lg:justify-end self-start">
              <div className="flex flex-col items-center bg-white lg:bg-transparent rounded-xl m-2 lg:flex-row lg:items-start w-full lg:w-[30rem] lg:text-right p-4">
                <Image
                  src="/petcare/dog-icon.png"
                  height={1000}
                  width={1000}
                  alt="dog icon"
                  loading="lazy"
                  className="object-contain block w-28 lg:hidden"
                ></Image>
                <div className="text-xl w-full">
                  <p className="font-bold mb-2">Stay Linked. Stay Informed.</p>
                  <p className="text-gray-600 lg:text-xl text-lg">
                    Elevate confidence in pet care with MyPerro Smart Collars
                  </p>
                </div>
                <Image
                  src="/petcare/dog-icon.png"
                  height={100}
                  width={100}
                  alt="dog icon"
                  loading="lazy"
                  className="object-contain hidden lg:block ml-4 flex-shrink-0"
                ></Image>
              </div>
            </div>
          </div>
        </div>
      </div>

      <WaitlistForm isOpen={showForm} onClose={() => setShowForm(false)} />
      <FeatureShowcase />
      <Features />
      <Unleash />
      <Companies />
    </>
  );
}
