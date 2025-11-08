"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { NAVIGATION_ITEMS } from "@/shared/config/constants";

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? "glass-card-hover shadow-2xl" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex w-full max-w-[1920px] items-center justify-between px-4 py-4 md:px-8 lg:px-12">
        <div className="flex items-center space-x-2">
          <div className="relative h-8 w-8">
            <Image
              src="/data_forge_logo.png"
              alt="Data_Forge Logo"
              fill
              className="rounded-lg object-contain"
              priority
              sizes="120px"
            />
          </div>
          <span className="text-xl font-bold text-gray-900">Data_Forge</span>
        </div>

        <nav className="hidden items-center gap-8 md:flex lg:gap-12">
          {NAVIGATION_ITEMS.map((item) => (
            <button
              key={item.name}
              onClick={() => scrollToSection(item.href)}
              className="cursor-pointer px-6 py-2 font-medium text-emerald-500 transition-all duration-300 hover:scale-105 hover:text-blue-600"
            >
              {item.name}
            </button>
          ))}
        </nav>

        <div className="md:hidden">
          <button className="text-gray-700 hover:text-blue-600">
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};
