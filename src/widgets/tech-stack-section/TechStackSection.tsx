import React from "react";
import { techStackCategories } from "@/entities/tech-stack/data";

export const TechStackSection: React.FC = () => {
  return (
    <section
      id="tech-stack"
      className="relative section-padding overflow-hidden"
    >
      {/* 배경 그라데이션 */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-blue-50 to-indigo-100" />
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%220%200%2040%2040%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23000000%22%20fill-opacity%3D%220.03%22%3E%3Cpath%20d%3D%22M20%2020c0-11.046-8.954-20-20-20v20h20z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-60" />

      <div className="relative z-10">
        <div className="mx-auto flex w-full max-w-[1920px] flex-col px-4 sm:px-8 lg:px-12 xl:px-16">
          <div className="mx-auto mb-12 max-w-[1600px] text-center sm:mb-16 md:mb-20">
            <div className="inline-block mb-4 sm:mb-6">
              <span className="px-3 py-1.5 sm:px-4 sm:py-2 bg-gradient-to-r from-indigo-500 to-purple-600 text-white text-xs sm:text-sm font-semibold rounded-full">
                TECH STACK
              </span>
            </div>
            <h2 className="responsive-title font-black text-gray-900 mb-4 sm:mb-6">
              기술 스택
            </h2>
            <div className="w-16 sm:w-20 md:w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-600 mx-auto mb-6 sm:mb-8" />
            <p className="mx-auto text-lg text-gray-600 sm:text-xl md:text-2xl max-w-5xl leading-relaxed">
              프로젝트에서 활용한 다양한 기술들을 카테고리별로 정리했습니다.
              <span className="font-semibold text-gray-800">
                최신 기술 트렌드를 학습하고 적용하는 능력
              </span>
              을 보여드립니다.
            </p>
          </div>

          <div className="space-y-12 sm:space-y-16">
            {techStackCategories.map((category, categoryIndex) => (
              <div key={category.name} className="relative">
                <div className="text-center mb-8 sm:mb-12">
                  <div className="inline-flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-sm sm:text-lg">
                        {categoryIndex + 1}
                      </span>
                    </div>
                    <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-gray-900">
                      {category.name}
                    </h3>
                  </div>
                  <div className="w-16 sm:w-20 h-1 bg-gradient-to-r from-indigo-500 to-purple-600 mx-auto" />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 responsive-grid">
                  {category.stacks.map((stack, index) => (
                    <div
                      key={index}
                      className="group relative glass-card rounded-3xl p-6 sm:p-8 transition-all duration-500 hover:scale-105 hover:glass-card-hover"
                      style={{
                        animationDelay: `${
                          (categoryIndex * 3 + index) * 150
                        }ms`,
                        animation: "fadeInUp 0.6s ease-out forwards",
                        opacity: 0,
                      }}
                    >
                      {/* 그라데이션 오버레이 */}
                      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />

                      <div className="relative z-10">
                        <div className="flex items-center gap-4 mb-6">
                          <div className="w-3 h-10 bg-gradient-to-b from-indigo-500 to-purple-600 rounded-full" />
                          <h4 className="text-2xl font-bold text-gray-900 group-hover:text-indigo-600 transition-colors duration-300">
                            {stack.category}
                          </h4>
                        </div>

                        {stack.description && (
                          <p className="text-gray-600 mb-8 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                            {stack.description}
                          </p>
                        )}

                        <div className="flex flex-wrap gap-3">
                          {stack.technologies.map((tech, techIndex) => (
                            <span
                              key={tech}
                              className="px-4 py-2 glass rounded-full text-sm font-semibold text-gray-700 hover:glass-card-hover hover:text-indigo-700 transition-all duration-300 cursor-default group-hover:scale-105"
                              style={{ animationDelay: `${techIndex * 100}ms` }}
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-20 text-center">
            <div className="relative bg-gradient-to-r from-indigo-500 to-purple-600 rounded-3xl p-12 overflow-hidden">
              {/* 배경 패턴 */}
              <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.1%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30" />

              <div className="relative z-10">
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
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <h3 className="text-3xl md:text-4xl font-black text-white mb-6">
                  지속적인 학습과 성장
                </h3>
                <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
                  기술의 빠른 변화 속에서도 지속적으로 새로운 기술을 학습하고,
                  <span className="font-semibold">
                    실제 프로젝트에 적용하여 문제를 해결하는 능력
                  </span>
                  을 키워나가고 있습니다.
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
                  {[
                    { icon: "📚", text: "최신 프레임워크 학습" },
                    { icon: "☁️", text: "클라우드 기술 적용" },
                    { icon: "⚡", text: "성능 최적화 경험" },
                    { icon: "🏗️", text: "아키텍처 설계" },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="bg-white/10 backdrop-blur-sm rounded-xl p-4 hover:bg-white/20 transition-all duration-300 hover:scale-105"
                    >
                      <div className="text-2xl mb-2">{item.icon}</div>
                      <div className="text-sm text-white font-medium">
                        {item.text}
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
