"use client";

import React, { Fragment } from "react";
import { projectCategories } from "@/entities/project/data";
import { ProjectCard } from "./ProjectCard";
import {
  ProjectDetailModal,
  useProjectDetailModal,
} from "@/features/project-detail-modal";

const SectionHeader = () => (
  <div className="mx-auto mb-16 flex max-w-[1200px] flex-col items-center text-center">
    <div className="glass-card mb-6 flex items-center gap-3 rounded-full px-5 py-2 shadow-lg">
      <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-xs font-semibold text-white shadow-md sm:h-9 sm:w-9 sm:text-sm">
        PORTFOLIO
      </span>
      <span className="text-xs font-medium text-blue-600 sm:text-sm">
        Projects & Case Studies
      </span>
    </div>
    <h2 className="responsive-title mb-4 font-black tracking-tight text-slate-900 sm:mb-5">
      주요 프로젝트
    </h2>
    <p className="text-base text-slate-500 sm:text-lg md:text-xl">
      백엔드 개발자로서 참여한 핵심 프로젝트들을 소개합니다.
      <span className="font-semibold text-gray-800">
        각 프로젝트의 기획 의도부터 트러블슈팅까지
      </span>{" "}
      상세히 정리했습니다.
    </p>
    <div className="mt-6 h-px w-full max-w-[480px] bg-gradient-to-r from-transparent via-blue-400/40 to-transparent" />
  </div>
);

const CategoryHeader = ({ name, index }: { name: string; index: number }) => (
  <div className="mx-auto flex max-w-[1200px] flex-col items-center text-center">
    <div className="glass mb-4 flex items-center gap-3 rounded-full px-4 py-2">
      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-sm font-semibold text-white">
        {index + 1}
      </span>
      <span className="text-xs font-medium uppercase tracking-[0.2em] text-blue-500">
        Featured Category
      </span>
    </div>
    <h3 className="text-2xl font-bold text-slate-900 sm:text-3xl md:text-4xl">
      {name}
    </h3>
    <div className="mt-4 h-px w-full max-w-[360px] bg-gradient-to-r from-transparent via-blue-400/30 to-transparent" />
  </div>
);

export const ProjectSection: React.FC = () => {
  const { isOpen, selectedProject, openModal, closeModal } =
    useProjectDetailModal();

  return (
    <section id="projects" className="relative section-padding overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-white via-blue-50/70 to-indigo-100/80" />
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23000000%22%20fill-opacity%3D%220.02%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%221%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30" />

      <div className="relative z-10">
        <div className="mx-auto flex w-full max-w-[1920px] flex-col gap-20 px-6 sm:px-10 lg:px-16 xl:px-20">
          <SectionHeader />

          <div className="space-y-16 sm:space-y-20 md:space-y-24">
            {projectCategories.map((category, categoryIndex) => (
              <Fragment key={category.name}>
                <CategoryHeader name={category.name} index={categoryIndex} />
                <div className="responsive-grid mx-auto grid max-w-[1600px] grid-cols-1 items-stretch gap-8 sm:grid-cols-2">
                  {category.projects.map((project, projectIndex) => (
                    <div
                      key={project.id}
                      className="group opacity-0"
                      style={{
                        animation: "fadeInUp 0.6s ease-out forwards",
                        animationDelay: `${
                          (categoryIndex * category.projects.length +
                            projectIndex) *
                          200
                        }ms`,
                      }}
                    >
                      <ProjectCard
                        project={project}
                        onViewDetails={openModal}
                      />
                    </div>
                  ))}
                </div>
              </Fragment>
            ))}
          </div>
        </div>
      </div>

      <ProjectDetailModal
        isOpen={isOpen}
        project={selectedProject}
        onClose={closeModal}
      />
    </section>
  );
};
