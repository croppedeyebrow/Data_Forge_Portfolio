"use client";

import React from "react";
import Image from "next/image";
import { ScrollToSectionButton } from "@/features/scroll-to-section";

export const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* 배경 그라데이션과 패턴 */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900" />
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.05%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20" />

      {/* 메인 콘텐츠 */}
      <div className="relative z-10 section-padding">
        <div className="mx-auto flex w-full max-w-[1920px] flex-col px-4 sm:px-8 lg:px-12 xl:px-16">
          <div className="mx-auto mb-8 max-w-[1600px] text-center sm:mb-12 md:mb-16 lg:mb-20">
            {/* 로고와 애니메이션 */}
            <div className="relative mb-6 sm:mb-8">
              <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 relative mx-auto mb-4 sm:mb-6 group">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-300" />
                <div className="relative w-full h-full bg-white/10 backdrop-blur-sm rounded-full border border-white/20 flex items-center justify-center">
                  <Image
                    src="/data_forge_logo.png"
                    alt="Data_Forge Logo"
                    fill
                    className="object-contain rounded-full p-2"
                    priority
                    sizes="(max-width: 640px) 64px, (max-width: 768px) 80px, 96px"
                  />
                </div>
              </div>

              {/* 타이핑 애니메이션 효과 */}
              <div className="inline-block">
                <h1 className="responsive-title font-black text-white mb-3 sm:mb-4 tracking-tight">
                  <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-pulse">
                    Data_Forge
                  </span>
                </h1>
                <div className="responsive-subtitle font-light text-gray-300 mb-6 sm:mb-8">
                  <span className="inline-block animate-bounce">
                    백엔드 개발자
                  </span>
                </div>
              </div>
            </div>

            {/* 설명 텍스트 */}
            <div className="mx-auto mb-8 max-w-4xl sm:mb-12 border-amber-300 border-2">
              <p className="text-lg sm:text-xl md:text-2xl text-gray-300 leading-relaxed mb-4 sm:mb-6">
                백엔드 핵심 프로젝트들의{" "}
                <span className="text-blue-400 font-semibold">기획 의도</span>,
                <span className="text-purple-400 font-semibold">
                  {" "}
                  활용 기술
                </span>
                ,
                <span className="text-pink-400 font-semibold">
                  {" "}
                  트러블슈팅
                </span>{" "}
                과정을
              </p>
              <p className="text-base sm:text-lg md:text-xl text-gray-400">
                상세히 정리한{" "}
                <span className="font-bold text-white bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  싱글 페이지 웹 포트폴리오
                </span>
                입니다.
              </p>
            </div>
          </div>

          {/* CTA 버튼들 */}
          <div className="mx-auto mb-12 flex max-w-[1600px] flex-col items-center justify-center gap-4 sm:mb-16 sm:flex-row sm:gap-6 md:mb-20">
            <ScrollToSectionButton
              targetId="projects"
              className="group relative px-6 py-3 sm:px-8 sm:py-4 glass-card text-white font-semibold rounded-2xl overflow-hidden transition-all duration-500 hover:scale-105 hover:glass-card-hover"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <span className="relative z-10 flex items-center justify-center gap-3">
                <div className="w-8 h-8 glass rounded-lg flex items-center justify-center">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                    />
                  </svg>
                </div>
                프로젝트 보기
                <svg
                  className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </span>
            </ScrollToSectionButton>

            <button
              onClick={() =>
                window.open("https://github.com/croppedeyebrow", "_blank")
              }
              className="group px-6 py-3 sm:px-8 sm:py-4 glass-card text-white font-semibold rounded-2xl transition-all duration-500 hover:scale-105 hover:glass-card-hover"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-gray-500/10 to-gray-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <span className="relative z-10 flex items-center justify-center gap-3">
                <div className="w-8 h-8 glass rounded-lg flex items-center justify-center">
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </div>
                GitHub 방문
                <svg
                  className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </span>
            </button>
          </div>

          {/* 기능 카드들 */}
          <div className="responsive-grid mx-auto grid max-w-[1600px] grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-emerald-500 rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition-all duration-500" />
              <div className="relative glass-card rounded-3xl p-6 sm:p-8 transition-all duration-500 hover:scale-105 hover:glass-card-hover group-hover:shadow-2xl group-hover:shadow-green-500/20">
                <div className="w-16 h-16 sm:w-20 sm:h-20 glass rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:scale-110 transition-all duration-500">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-emerald-500 rounded-xl flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 text-center group-hover:text-green-300 transition-colors duration-300">
                  기획 의도
                </h3>
                <p className="text-gray-300 text-center leading-relaxed group-hover:text-white transition-colors duration-300">
                  프로젝트의 목적과 해결하고자 하는 문제를 명확히 정의
                </p>
              </div>
            </div>

            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition-all duration-500" />
              <div className="relative glass-card rounded-3xl p-8 transition-all duration-500 hover:scale-105 hover:glass-card-hover group-hover:shadow-2xl group-hover:shadow-blue-500/20">
                <div className="w-20 h-20 glass rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-all duration-500">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-xl flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                      />
                    </svg>
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 text-center group-hover:text-blue-300 transition-colors duration-300">
                  활용 기술
                </h3>
                <p className="text-gray-300 text-center leading-relaxed group-hover:text-white transition-colors duration-300">
                  최신 기술 스택과 아키텍처를 활용한 효율적인 개발
                </p>
              </div>
            </div>

            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-500 rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition-all duration-500" />
              <div className="relative glass-card rounded-3xl p-8 transition-all duration-500 hover:scale-105 hover:glass-card-hover group-hover:shadow-2xl group-hover:shadow-purple-500/20">
                <div className="w-20 h-20 glass rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-all duration-500">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-pink-500 rounded-xl flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 text-center group-hover:text-purple-300 transition-colors duration-300">
                  트러블슈팅
                </h3>
                <p className="text-gray-300 text-center leading-relaxed group-hover:text-white transition-colors duration-300">
                  문제 해결 과정과 학습한 내용을 상세히 기록
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
