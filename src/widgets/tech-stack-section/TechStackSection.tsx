"use client";

import React from "react";
import { techStackCategories } from "@/entities/tech-stack/data";

import styles from "./TechStackSection.module.css";

const growthHighlights = [
  { icon: "📚", text: "Node.js 기반 생태계 학습" },
  { icon: "📚", text: "Python 기반 생태계 학습" },
  { icon: "☁️", text: "클라우드 기술 및 데브옵스 적용" },
  { icon: "🔥", text: "Rust, C++, Go 기반 공부" },
  { icon: "🔥", text: "AI/ML 기술 학습" },
  { icon: "🎮", text: "유니티 엔진 활용" },
  { icon: "⚡", text: "성능 최적화 시키기" },
  { icon: "🏗️", text: "아키텍처 설계" },
];

export const TechStackSection: React.FC = () => (
  <section id="tech-stack" className={styles.section}>
    <div className={styles.backgroundGradient} />
    <div className={styles.backgroundPattern} />

    <div className={styles.inner}>
      <div className={styles.content}>
        <header className={styles.header}>
          <div className={styles.badge}>
            <span className={styles.badgeIcon}>TS</span>
            <span className={styles.badgeText}>Tech Stack</span>
          </div>
          <h2 className={styles.title}>기술 스택</h2>
          <p className={styles.description}>
            프로젝트에서 활용한 다양한 기술들을 카테고리별로 정리했습니다.{" "}
            <br />
            <span>최신 기술 트렌드를 학습하고 적용하는 능력</span>을
            보여드립니다.
          </p>
        </header>

        <div className={styles.categoryList}>
          {techStackCategories.map((category, categoryIndex) => (
            <div key={category.name}>
              <div className={styles.categoryHeader}>
                <div className={styles.categoryBadge}>
                  <span className={styles.categoryIndex}>
                    {categoryIndex + 1}
                  </span>
                  <span className={styles.categoryLabel}>Category</span>
                </div>
                <h3 className={styles.categoryTitle}>{category.name}</h3>
                <div className={styles.categoryDivider} />
              </div>

              <div className={styles.stackGrid}>
                {category.stacks.map((stack, index) => (
                  <article
                    key={stack.category}
                    className={styles.stackCard}
                    style={{
                      animation: "fadeInUp 0.6s ease-out forwards",
                      animationDelay: `${(categoryIndex * 3 + index) * 150}ms`,
                    }}
                  >
                    <div className={styles.stackOverlay} />
                    <div className={styles.stackContent}>
                      <div className={styles.stackHeader}>
                        <span className={styles.stackAccent} />
                        <h4 className={styles.stackTitle}>{stack.category}</h4>
                      </div>
                      {stack.description && (
                        <p className={styles.stackDescription}>
                          {stack.description}
                        </p>
                      )}
                      <div className={styles.chipList}>
                        {stack.technologies.map((tech) => (
                          <span key={tech} className={styles.chip}>
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          ))}
        </div>

        <section className={styles.growthPanel}>
          <div className={styles.growthPanelPattern} />
          <div className={styles.growthContent}>
            <div>
              <h3 className={styles.growthTitle}>지속적인 학습과 성장</h3>
              <p className={styles.growthDescription}>
                지망하는 기술과 도메인 분야를 위해 지속적으로 새로운 기술을
                학습하고,
                <span>실제 프로젝트에 적용하여 문제를 해결하는 능력</span>을
                키워나가고 있습니다.
              </p>
            </div>
            <div className={styles.growthGrid}>
              {growthHighlights.map((item) => (
                <div key={item.text} className={styles.growthCard}>
                  <div className={styles.growthIcon}>{item.icon}</div>
                  <div className={styles.growthText}>{item.text}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  </section>
);
