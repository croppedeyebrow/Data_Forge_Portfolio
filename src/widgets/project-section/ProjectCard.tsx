"use client";

import React from "react";
import { Project } from "@/entities/project/types";
import { Button } from "@/shared/ui/Button";

interface ProjectCardProps {
  project: Project;
  onViewDetails: (project: Project) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  onViewDetails,
}) => {
  return (
    <div className="group relative glass-card rounded-3xl transition-all duration-500 overflow-hidden hover:scale-[1.02] hover:glass-card-hover">
      {/* 그라데이션 오버레이 */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />

      <div className="relative z-10 p-8">
        {/* 헤더 섹션 */}
        <div className="flex items-start justify-between mb-6">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-3">
              <div
                className={`w-3 h-3 rounded-full ${
                  project.type === "team"
                    ? "bg-gradient-to-r from-blue-400 to-blue-600"
                    : "bg-gradient-to-r from-green-400 to-green-600"
                }`}
              />
              <span
                className={`px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wide ${
                  project.type === "team"
                    ? "bg-blue-100 text-blue-700"
                    : "bg-green-100 text-green-700"
                }`}
              >
                {project.type === "team" ? "팀 프로젝트" : "개인 프로젝트"}
              </span>
            </div>
            <h3 className="text-3xl font-black text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
              {project.title}
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              {project.description}
            </p>
          </div>
        </div>

        {/* 기술 스택 섹션 (간소화) */}
        <div className="mb-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-2 h-6 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full" />
            <h4 className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
              기술 스택
            </h4>
          </div>
          <div className="flex flex-wrap gap-2">
            {project.technologies.slice(0, 4).map((tech, index) => (
              <span
                key={tech}
                className="px-3 py-1 glass rounded-full text-xs font-semibold text-gray-700 hover:glass-card-hover hover:text-blue-700 transition-all duration-300 cursor-default group-hover:scale-105"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 4 && (
              <span className="px-3 py-1 glass rounded-full text-xs font-semibold text-gray-500">
                +{project.technologies.length - 4}개 더
              </span>
            )}
          </div>
        </div>

        {/* 주요 기능 섹션 (간소화) */}
        <div className="mb-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-2 h-6 bg-gradient-to-b from-green-500 to-emerald-500 rounded-full" />
            <h4 className="text-lg font-bold text-gray-900 group-hover:text-green-600 transition-colors duration-300">
              주요 기능
            </h4>
          </div>
          <div className="space-y-2">
            {project.features.slice(0, 2).map((feature, index) => (
              <div key={index} className="flex items-start gap-3 group/item">
                <div className="w-6 h-6 glass rounded-lg flex items-center justify-center flex-shrink-0 group-hover/item:scale-110 transition-all duration-300">
                  <div className="w-4 h-4 bg-gradient-to-r from-green-400 to-emerald-500 rounded flex items-center justify-center">
                    <svg
                      className="w-2 h-2 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={3}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                </div>
                <p className="text-sm text-gray-700 leading-relaxed group-hover/item:text-gray-900 transition-colors duration-300 flex-1">
                  {feature}
                </p>
              </div>
            ))}
            {project.features.length > 2 && (
              <p className="text-sm text-gray-500 ml-9">
                +{project.features.length - 2}개 기능 더 보기
              </p>
            )}
          </div>
        </div>

        {/* 액션 버튼들 */}
        <div className="flex flex-wrap gap-3 pt-6 border-t border-white/20">
          {/* 자세히 보기 버튼 */}
          <Button
            onClick={() => onViewDetails(project)}
            className="group/btn flex items-center gap-2 px-6 py-3 glass-card text-white text-sm font-semibold rounded-2xl hover:glass-card-hover hover:scale-105 transition-all duration-300"
          >
            <div className="w-5 h-5 glass rounded-lg flex items-center justify-center">
              <svg
                className="w-3 h-3"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                />
              </svg>
            </div>
            <span>자세히 보기</span>
            <svg
              className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300"
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
          </Button>

          {/* GitHub 링크 (간소화) */}
          {(project.github.frontend || project.github.backend) && (
            <button
              onClick={() => {
                const githubLink =
                  project.github.frontend || project.github.backend;
                if (githubLink) window.open(githubLink, "_blank");
              }}
              className="group/link flex items-center gap-2 px-4 py-2 glass-card text-white text-sm font-semibold rounded-xl hover:glass-card-hover hover:scale-105 transition-all duration-300"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              <span>GitHub</span>
              <svg
                className="w-3 h-3 group-hover/link:translate-x-1 transition-transform duration-300"
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
          )}
        </div>
      </div>
    </div>
  );
};
