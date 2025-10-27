import React from "react";
import { projectCategories } from "@/entities/project/data";
import { ProjectCard } from "./ProjectCard";

export const ProjectSection: React.FC = () => {
  return (
    <section id="projects" className="relative section-padding overflow-hidden">
      {/* 배경 그라데이션 */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100" />
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23000000%22%20fill-opacity%3D%220.02%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%221%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-40" />

      <div className="relative z-10 container mx-auto">
        <div className="text-center mb-12 sm:mb-16 md:mb-20">
          <div className="inline-block mb-4 sm:mb-6">
            <span className="px-3 py-1.5 sm:px-4 sm:py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-xs sm:text-sm font-semibold rounded-full">
              PORTFOLIO
            </span>
          </div>
          <h2 className="responsive-title font-black text-gray-900 mb-4 sm:mb-6">
            주요 프로젝트
          </h2>
          <div className="w-16 sm:w-20 md:w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-6 sm:mb-8" />
          <p className="text-lg sm:text-xl md:text-2xl text-gray-600 max-w-5xl mx-auto leading-relaxed">
            백엔드 개발자로서 참여한 핵심 프로젝트들을 소개합니다.
            <span className="font-semibold text-gray-800">
              각 프로젝트의 기획 의도부터 트러블슈팅까지
            </span>{" "}
            상세히 정리했습니다.
          </p>
        </div>

        <div className="space-y-12 sm:space-y-16 md:space-y-20">
          {projectCategories.map((category, categoryIndex) => (
            <div key={category.name} className="relative">
              <div className="text-center mb-8 sm:mb-12">
                <div className="inline-flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-xs sm:text-sm">
                      {categoryIndex + 1}
                    </span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-gray-900">
                    {category.name}
                  </h3>
                </div>
                <div className="w-12 sm:w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto" />
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 responsive-grid">
                {category.projects.map((project, projectIndex) => (
                  <div
                    key={project.id}
                    className="group"
                    style={{
                      animationDelay: `${
                        (categoryIndex * 2 + projectIndex) * 200
                      }ms`,
                      animation: "fadeInUp 0.6s ease-out forwards",
                      opacity: 0,
                    }}
                  >
                    <ProjectCard project={project} />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
