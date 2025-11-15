"use client";

import React, { Fragment } from "react";
import { projectCategories } from "@/entities/project/data";
import { ProjectCard } from "./ProjectCard";
import {
  ProjectDetailModal,
  useProjectDetailModal,
} from "@/features/project-detail-modal";
import styles from "./ProjectSection.module.css";

const SectionHeader = () => (
  <div className={styles.sectionHeader}>
    <div className={styles.sectionBadge}>
      <span className={styles.badgeIcon}>PF</span>
      <span className={styles.badgeText}>Projects & Case Studies</span>
    </div>
    <h2 className={styles.sectionTitle}>주요 프로젝트</h2>
    <p className={styles.sectionDescription}>
      백엔드 개발자로서 참여한 핵심 프로젝트들을 소개합니다. <br />
      <span>각 프로젝트의 기획 의도부터 트러블슈팅까지</span> 상세히
      정리했습니다.
    </p>
    <div className={styles.sectionDivider} />
  </div>
);

const CategoryHeader = ({ name, index }: { name: string; index: number }) => (
  <div className={styles.categoryHeader}>
    <div className={styles.categoryBadge}>
      <span className={styles.categoryIndex}>{index + 1}</span>
      <span className={styles.categoryLabel}>Featured Category</span>
    </div>
    <h3 className={styles.categoryTitle}>{name}</h3>
    <div className={styles.categoryDivider} />
  </div>
);

export const ProjectSection: React.FC = () => {
  const { isOpen, selectedProject, openModal, closeModal } =
    useProjectDetailModal();

  return (
    <section id="projects" className={styles.section}>
      <div className={styles.backgroundGradient} />
      <div className={styles.backgroundPattern} />

      <div className={styles.inner}>
        <div className={styles.content}>
          <SectionHeader />

          <div className={styles.categoryList}>
            {projectCategories.map((category, categoryIndex) => (
              <Fragment key={category.name}>
                <CategoryHeader name={category.name} index={categoryIndex} />
                <div className={styles.cardGrid}>
                  {category.projects.map((project, projectIndex) => (
                    <div
                      key={project.id}
                      className={styles.cardWrapper}
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
