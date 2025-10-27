import React from "react";
import Image from "next/image";
import { SITE_CONFIG } from "@/shared/config/constants";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 relative">
                <Image
                  src="/data_forge_logo.png"
                  alt="Data_Forge Logo"
                  fill
                  className="object-contain rounded-lg"
                />
              </div>
              <span className="text-xl font-bold">Data_Forge</span>
            </div>
            <p className="text-gray-400 text-sm">
              백엔드 개발자 기술 역량 포트폴리오
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">기술 스택</h3>
            <div className="space-y-2 text-sm text-gray-400">
              <p>Java • Spring Boot • Python</p>
              <p>Node.js • React • TypeScript</p>
              <p>MySQL • MongoDB • Redis</p>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">연락처</h3>
            <div className="space-y-2 text-sm text-gray-400">
              <p>GitHub: @croppedeyebrow</p>
              <p>Email: contact@dataforge.dev</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>&copy; 2024 {SITE_CONFIG.author}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
