"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import WaitlistForm from "../WaitlistForm";
import { MoveUpRight } from "lucide-react";

const NavBar = () => {
  const navLinks = [
    { name: "PRODUCT", href: "/#product" },
    { name: "ABOUT US", href: "/about" },
    { name: "BLOGS", href: "/blogs" },
    { name: "CONTACT US", href: "/contact" },
  ];

  const [isOpen, setIsOpen] = useState(false);
  const [prevScrollpos, setPrevScrollpos] = useState(0);
  const [showForm, setShowForm] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    if (href === "/#product") return pathname === "/";
    if (href !== "/") return pathname.startsWith(href);
    return false;
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const navbar = document.getElementById("navbar");

      if (navbar) {
        if (currentScrollPos > 100) {
          if (prevScrollpos > currentScrollPos) {
            navbar.style.top = "0";
            setIsOpen(false);
          } else {
            navbar.style.top = "-100px";
            setIsOpen(false);
          }
        } else {
          navbar.style.top = "0";
        }
      }

      setPrevScrollpos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollpos]);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 flex justify-center w-full py-1.5 md:py-3 min-h-[64px] bg-foreground shadow-lg overflow-hidden"
      id="navbar"
      style={{ transition: "top 0.5s ease-in-out" }}
    >
      <div className="flex flex-wrap items-center w-[95%] md:w-[90%] lg:min-w-[85%] text-background">
        {/* Logo */}
        <div className="h-9 sm:h-10 md:h-14 mr-6 flex items-center">
          <Link href="/">
            <Image
              src="/logo-black.svg"
              alt="logo"
              width={1000}
              height={1000}
              className="h-full max-h-12 w-auto object-contain flex-shrink-0"
              priority
            />
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex flex-1 items-center">
          <ul className="flex w-full justify-evenly items-center whitespace-nowrap text-base xl:text-xl font-montserrat font-medium">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className={`whitespace-nowrap ${
                    isActive(link.href)
                      ? "text-primary font-semibold"
                      : "hover:text-primary"
                  } transition-all duration-150`}
                >
                  {link.name}
                </Link>
              </li>
            ))}

            <li>
              <button
                onClick={() => {
                  setShowForm(true);
                  setIsOpen(false);
                }}
                className="px-4 py-2 bg-[#FF6600] text-white rounded-full font-montserrat font-semibold text-sm hover:bg-primary transition-all flex items-center gap-2 whitespace-nowrap"
              >
                <span>JOIN OUR WAITLIST</span>
                <MoveUpRight className="w-4 h-4 text-white bg-black rounded-full p-0.5" />
              </button>
            </li>
          </ul>
        </div>

        {/* Mobile Menu */}
        <div className="lg:hidden ml-auto">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger className="p-1 md:p-2">
              <Image
                src="/ham.svg"
                alt="menu"
                width={1000}
                height={1000}
                className="h-6 w-6 sm:h-7 sm:w-7"
              />
            </SheetTrigger>

            <SheetContent side="right" className="w-[80vw] max-w-[300px]">
              <div className="flex flex-col gap-4 mt-8">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`text-lg font-montserrat ${
                      isActive(link.href)
                        ? "font-semibold text-primary"
                        : "font-medium hover:text-primary"
                    } transition-all`}
                  >
                    {link.name}
                  </Link>
                ))}

                <div className="mt-4 pt-4 border-t">
                  <button
                    onClick={() => {
                      setShowForm(true);
                      setIsOpen(false);
                    }}
                    className="w-full px-4 py-2 bg-[#FF6600] text-white rounded-full font-montserrat font-semibold text-sm hover:bg-primary transition-all"
                  >
                    JOIN OUR WAITLIST
                  </button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>

      <WaitlistForm isOpen={showForm} onClose={() => setShowForm(false)} />
    </nav>
  );
};

export default NavBar;
