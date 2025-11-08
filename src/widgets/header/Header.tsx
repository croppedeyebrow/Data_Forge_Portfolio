"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { NAVIGATION_ITEMS } from "@/shared/config/constants";

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = useCallback((href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  }, []);

  const toggleMobileMenu = () => setIsMobileMenuOpen((prev) => !prev);
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? "glass-card-hover shadow-2xl" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex w-full max-w-[1920px] items-center gap-6 px-4 py-4 md:px-8 lg:px-12">
        <div className="flex items-center gap-2 hover:text-emerald-600">
          <span className="text-xl font-bold text-gray-900 hover:text-emerald-600 cursor-pointer hover:scale-105 transition-all duration-300">
            Data_Forge
          </span>
        </div>

        <nav className="hidden flex-1 items-center justify-center gap-6 md:flex lg:gap-10 xl:gap-14">
          {NAVIGATION_ITEMS.map((item) => (
            <button
              key={item.name}
              onClick={() => scrollToSection(item.href)}
              className="cursor-pointer rounded-xl px-5 py-2 text-sm font-medium text-emerald-500 transition-all duration-300 hover:scale-105 hover:text-blue-600"
            >
              {item.name}
            </button>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          {/* 확장 액션 버튼 자리 */}
        </div>

        <div className="md:hidden">
          <button
            onClick={toggleMobileMenu}
            aria-label="Toggle navigation"
            className="rounded-full p-2 text-gray-700 transition-colors duration-300 hover:bg-gray-100 hover:text-blue-600"
          >
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
      {isMobileMenuOpen && (
        <div className="md:hidden">
          <div
            className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm transition-opacity duration-300"
            onClick={closeMobileMenu}
          />
          <div className="fixed top-20 right-4 left-4 z-50 rounded-3xl bg-white/95 p-6 shadow-2xl ring-1 ring-black/10">
            <div className="mb-4 flex items-center justify-between">
              <span className="text-lg font-semibold text-gray-800">메뉴</span>
              <button
                onClick={closeMobileMenu}
                aria-label="Close navigation"
                className="rounded-full p-2 text-gray-500 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-800"
              >
                <svg
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <nav className="flex flex-col gap-2">
              {NAVIGATION_ITEMS.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="rounded-2xl px-4 py-3 text-left text-base font-medium text-gray-700 transition-colors duration-300 hover:bg-emerald-50 hover:text-emerald-600"
                >
                  {item.name}
                </button>
              ))}
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};
