"use client";

import React from "react";

export const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="relative section-padding overflow-hidden">
      {/* 배경 그라데이션 */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900" />
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.05%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30" />

      <div className="relative z-10 mx-auto flex w-full max-w-[1920px] flex-col px-4 text-center sm:px-8 lg:px-12 xl:px-16">
        <div className="mx-auto flex w-full max-w-[1920px] flex-col px-4 text-center sm:px-8 lg:px-12 xl:px-16">
          <div className="mx-auto max-w-[1920px]">
            <div className="inline-block mb-4 sm:mb-6">
              <span className="px-3 py-1.5 sm:px-4 sm:py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-xs sm:text-sm font-semibold rounded-full">
                CONTACT
              </span>
            </div>
            <h2 className="responsive-title font-black text-white mb-4 sm:mb-6">
              함께 일하고 싶습니다
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-12 sm:mb-16 max-w-full mx-auto leading-relaxed">
              새로운 도전과 성장의 기회를 찾고 있습니다.
              <span className="font-semibold text-white">
                함께 멋진 프로젝트를 만들어보시겠습니까?
              </span>
            </p>

            <div className="responsive-grid mb-12 grid grid-cols-1 md:grid-cols-2 sm:mb-16">
              <div className="group relative glass-card rounded-3xl p-6 sm:p-8 transition-all duration-500 hover:scale-105 hover:glass-card-hover">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />

                <div className="relative z-10 flex flex-col items-center justify-center">
                  <div className="w-full h-16 sm:w-20 sm:h-20 glass rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:scale-110 transition-all duration-500">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
                      <svg
                        className="w-6 h-6 text-white"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                      </svg>
                    </div>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3 sm:mb-4 group-hover:text-blue-300 transition-colors duration-300">
                    GitHub
                  </h3>
                  <p className="text-gray-300 mb-6 sm:mb-8 leading-relaxed group-hover:text-white transition-colors duration-300">
                    저의 깃허브 프로필을 방문해주세요.
                  </p>
                  <button
                    onClick={() =>
                      window.open("https://github.com/croppedeyebrow", "_blank")
                    }
                    className="group/btn w-full px-6 py-3 sm:px-8 sm:py-4 glass-card text-white font-semibold rounded-2xl hover:glass-card-hover transition-all duration-500 hover:scale-105 flex items-center justify-center gap-3"
                  >
                    <span>GitHub 방문</span>
                    <svg
                      className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform duration-300"
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
                  </button>
                </div>
              </div>

              <div className="group relative glass-card rounded-3xl p-8 transition-all duration-500 hover:scale-105 hover:glass-card-hover">
                <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 to-emerald-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />

                <div className="relative z-10 flex flex-col items-center justify-center">
                  <div className="w-20 h-20 glass rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-all duration-500">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-xl flex items-center justify-center">
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
                          d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-4 group-hover:text-green-300 transition-colors duration-300">
                    이메일
                  </h3>
                  <p className="text-gray-300 mb-8 leading-relaxed group-hover:text-white transition-colors duration-300">
                    프로젝트 문의나 협업 제안을 보내주세요
                  </p>
                  <button
                    onClick={() =>
                      window.open("mailto:contact@dataforge.dev", "_blank")
                    }
                    className="group/btn w-full px-6 py-3 sm:px-8 sm:py-4 glass-card text-white font-semibold rounded-2xl hover:glass-card-hover transition-all duration-500 hover:scale-105 flex items-center justify-center gap-3"
                  >
                    <span>이메일 보내기</span>
                    <svg
                      className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-blue-600 to-indigo-600 p-12">
              {/* 배경 패턴 */}
              <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.1%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30" />

              <div className="relative z-10 text-center">
                <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-3xl md:text-4xl font-black text-white mb-6">
                  포트폴리오를 끝까지 봐주셔서 감사합니다!
                </h3>
                <p className="text-xl text-white/90 mb-8 max-w-4xl mx-auto leading-relaxed">
                  이 포트폴리오는{" "}
                  <span className="font-semibold">
                    Next.js, TypeScript, Tailwind CSS
                  </span>
                  를 활용하여
                  <span className="font-semibold">
                    {" "}
                    FSD(Feature-Sliced Design) 패턴
                  </span>
                  으로 구성되었습니다.
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
                  {[
                    { name: "Next.js 14", icon: "⚡" },
                    { name: "TypeScript", icon: "🔷" },
                    { name: "Tailwind CSS", icon: "🎨" },
                    { name: "FSD Architecture", icon: "🏗️" },
                  ].map((tech, index) => (
                    <div
                      key={index}
                      className="group/tech glass-card rounded-2xl p-6 hover:glass-card-hover transition-all duration-500 hover:scale-105"
                    >
                      <div className="text-3xl mb-3 group-hover/tech:scale-110 transition-transform duration-300">
                        {tech.icon}
                      </div>
                      <div className="text-sm text-white font-semibold group-hover/tech:text-blue-200 transition-colors duration-300">
                        {tech.name}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
