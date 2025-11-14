"use client";

import React from "react";
import clsx from "clsx";

import { Project } from "@/entities/project/types";

import styles from "./ProjectCard.module.css";

interface ProjectCardProps {
  project: Project;
  onViewDetails: (project: Project) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  onViewDetails,
}) => {
  const isTeam = project.type === "team";
  const githubLink = project.github.frontend || project.github.backend;

  const handleGithubClick = () => {
    if (githubLink) {
      window.open(githubLink, "_blank");
    }
  };

  return (
    <div className={styles.card}>
      <div className={styles.overlay} />
      <div className={styles.content}>
        <header className={styles.header}>
          <div className={styles.badgeRow}>
            <span
              className={clsx(
                styles.typeDot,
                isTeam ? styles.typeDotTeam : styles.typeDotSolo
              )}
            />
            <span
              className={clsx(styles.typePill, !isTeam && styles.typePillSolo)}
            >
              {isTeam ? "팀 프로젝트" : "개인 프로젝트"}
            </span>
          </div>
          <div>
            <h3 className={styles.title}>{project.title}</h3>
            <p className={styles.description}>{project.description}</p>
          </div>
        </header>

        <section className={styles.section}>
          <div className={styles.sectionTitleRow}>
            <span className={styles.sectionAccentBlue} />
            <h4 className={styles.sectionTitle}>기술 스택</h4>
          </div>
          <div className={styles.chipList}>
            {project.technologies.slice(0, 5).map((tech) => (
              <span key={tech} className={styles.chip}>
                {tech}
              </span>
            ))}
            {project.technologies.length > 5 && (
              <span className={clsx(styles.chip, styles.chipMore)}>
                +{project.technologies.length - 5}개
              </span>
            )}
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.sectionTitleRow}>
            <span className={styles.sectionAccentGreen} />
            <h4 className={styles.sectionTitle}>주요 기능</h4>
          </div>
          <div className={styles.featureList}>
            {project.features.slice(0, 3).map((feature) => (
              <div key={feature} className={styles.featureItem}>
                <span className={styles.featureIcon}>
                  <svg
                    className={styles.checkIcon}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={3}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </span>
                <p className={styles.featureText}>{feature}</p>
              </div>
            ))}
            {project.features.length > 3 && (
              <p className={styles.featureMore}>
                +{project.features.length - 3}개 기능이 더 있습니다
              </p>
            )}
          </div>
        </section>

        <footer className={styles.footer}>
          <button
            type="button"
            className={styles.primaryButton}
            onClick={() => onViewDetails(project)}
          >
            <span>자세히 보기</span>
            <svg
              className={styles.arrowIcon}
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
          </button>

          {githubLink && (
            <button
              type="button"
              onClick={handleGithubClick}
              className={styles.ghostButton}
            >
              <svg
                className={styles.githubIcon}
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              <span>GitHub</span>
            </button>
          )}
        </footer>
      </div>
    </div>
  );
};
