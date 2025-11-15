"use client";

import React from "react";
import Image from "next/image";
import { ScrollToSectionButton } from "@/features/scroll-to-section";
import { featureCards } from "./model/featureCards";
import styles from "./Hero.module.css";

const RESUME_FILE_URL =
  process.env.NEXT_PUBLIC_RESUME_URL ?? "/files/data-forge-resume.pdf";

export const Hero: React.FC = () => {
  return (
    <section id="home" className={styles.heroSection}>
      <div className={styles.backgroundGradient} />
      <div className={styles.backgroundPattern} />

      <div className={styles.sectionContent}>
        <div className={styles.heroBody}>
          <div className={styles.logoBlock}>
            <div className={styles.logoWrapper}>
              <div className={styles.logoGlow} />
              <div className={styles.logoInner}>
                <Image
                  src="/data_forge_logo.png"
                  alt="Data_Forge Logo"
                  fill
                  sizes="96px"
                  style={{ objectFit: "contain", borderRadius: "9999px" }}
                  priority
                />
              </div>
            </div>

            <div className={styles.titleBlock}>
              <h1 className={styles.heroTitle}>
                <span className={styles.heroTitleAccent}>Data_Forge</span>
              </h1>
              <p className={styles.heroSubtitle}>백엔드 개발자</p>
            </div>

            <div className={styles.descriptionBlock}>
              백엔드 핵심 프로젝트들의{" "}
              <span className={styles.descriptionHighlight}>기획 의도</span>,{" "}
              <span className={styles.descriptionHighlight}>활용 기술</span>,{" "}
              <span className={styles.descriptionHighlight}>트러블슈팅</span>{" "}
              과정을 상세히 정리한 싱글 페이지 포트폴리오입니다.
            </div>
          </div>

          <div className={styles.ctaSection}>
            <div className={styles.ctaDivider} />
            <div className={styles.ctaButtons}>
              <ScrollToSectionButton
                targetId="projects"
                className={styles.primaryCta}
              >
                프로젝트 보기
                <svg
                  className={styles.ctaArrow}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </ScrollToSectionButton>

              <button
                type="button"
                className={styles.secondaryCta}
                onClick={() =>
                  window.open("https://github.com/croppedeyebrow", "_blank")
                }
              >
                <svg
                  className={styles.githubIcon}
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                GitHub 방문
              </button>

              <a
                href={RESUME_FILE_URL}
                download
                className={styles.resumeCta}
                target="_blank"
                rel="noreferrer"
              >
                <svg
                  className={styles.resumeIcon}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 5v10m0 0l4-4m-4 4l-4-4M5 19h14"
                  />
                </svg>
                이력서 다운로드
              </a>
            </div>
          </div>

          <div className={styles.cardsGrid}>
            {featureCards.map((card) => (
              <article key={card.title} className={styles.featureCard}>
                <div
                  className={styles.featureGlow}
                  style={{ background: card.glow }}
                />
                <div className={styles.featureContent}>
                  <div
                    className={styles.featureIcon}
                    style={{ background: card.gradient }}
                  >
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d={card.iconPath}
                      />
                    </svg>
                  </div>
                  <h3 className={styles.featureTitle}>{card.title}</h3>
                  <p className={styles.featureDescription}>
                    {card.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
