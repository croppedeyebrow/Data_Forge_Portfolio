"use client";

import React from "react";
import clsx from "clsx";

import styles from "./ContactSection.module.css";

const iconClassMap: Record<string, string> = {
  blue: styles.iconBlue,
  green: styles.iconGreen,
  purple: styles.iconPurple,
  orange: styles.iconOrange,
  magenta: styles.iconMagenta,
  cyan: styles.iconCyan,
};

const contacts = [
  {
    title: "GitHub",
    description: "저의 GitHub 프로필을 방문해주세요.",
    iconGradient: "blue",
    actionText: "GitHub 방문",
    onClick: () => window.open("https://github.com/croppedeyebrow", "_blank"),
    overlayGradient:
      "linear-gradient(135deg, rgba(59,130,246,0.15), rgba(139,92,246,0.15))",
  },
  {
    title: "이메일",
    description: "프로젝트 문의나 협업 제안을 보내주세요.",
    iconGradient: "green",
    actionText: "이메일 보내기",
    onClick: () => window.open("mailto:contact@dataforge.dev", "_blank"),
    overlayGradient:
      "linear-gradient(135deg, rgba(34,197,94,0.15), rgba(16,185,129,0.15))",
  },
  {
    title: "Velog",
    description: "기술 블로그에서 작성한 인사이트와 아카이브를 확인해 보세요.",
    iconGradient: "purple",
    actionText: "Velog 방문",
    onClick: () => window.open("https://velog.io/@c_d_c/posts", "_blank"),
    overlayGradient:
      "linear-gradient(135deg, rgba(14,165,233,0.18), rgba(236,72,153,0.15))",
  },
  {
    title: "Tistory",
    description: "프로덕트 개발과 연구를 기록한 블로그 글을 공유합니다.",
    iconGradient: "orange",
    actionText: "Tistory 방문",
    onClick: () => window.open("https://data-forge.tistory.com/", "_blank"),
    overlayGradient:
      "linear-gradient(135deg, rgba(249,115,22,0.25), rgba(249,172,103,0.15))",
  },
  {
    title: "Instagram",
    description: "일상과 프로젝트 비하인을 공유하는 공간입니다.",
    iconGradient: "magenta",
    actionText: "인스타그램 팔로우",
    onClick: () =>
      window.open("https://www.instagram.com/data___forge/", "_blank"),
    overlayGradient:
      "linear-gradient(135deg, rgba(236,72,153,0.25), rgba(147,51,234,0.2))",
  },
  {
    title: "LinkedIn",
    description: "프로페셔널 네트워크에서 제 커리어를 확인해 보세요.",
    iconGradient: "cyan",
    actionText: "LinkedIn 연결하기",
    onClick: () =>
      window.open(
        "https://www.linkedin.com/in/jae-sung-lee-90719b284",
        "_blank"
      ),
    overlayGradient:
      "linear-gradient(135deg, rgba(14,165,233,0.2), rgba(59,130,246,0.25))",
  },
];

const chunkContacts = (items: typeof contacts, size = 3) =>
  Array.from({ length: Math.ceil(items.length / size) }, (_, index) => {
    const start = index * size;
    return items.slice(start, start + size);
  });

const techCards = [
  { tag: "Stack", text: "Next.js 14 & React 19" },
  { tag: "Language", text: "TypeScript" },
  { tag: "Design", text: "CSS Modules + PostCSS" },
  { tag: "Architecture", text: "FSD (Feature-Sliced Design)" },
];

const renderIcon = (title: string) => {
  switch (title) {
    case "GitHub":
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
        </svg>
      );
    case "이메일":
      return (
        <svg
          viewBox="0 0 24 24"
          stroke="currentColor"
          fill="none"
          width="20"
          height="20"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
      );
    case "Velog":
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
          <path d="M5 5h3l3.083 8.4L14.1 5h3.062l-4.15 12.5h-2.3z" />
        </svg>
      );
    case "Tistory":
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
          <circle cx="8" cy="5.5" r="2.5" />
          <circle cx="8" cy="12" r="2.5" />
          <circle cx="15.5" cy="9.5" r="2.5" />
          <circle cx="15.5" cy="16.5" r="2.5" />
        </svg>
      );
    case "Instagram":
      return (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          width="20"
          height="20"
        >
          <rect
            x="4"
            y="4"
            width="16"
            height="16"
            rx="5"
            ry="5"
            strokeWidth={1.8}
          />
          <circle cx="12" cy="12" r="3.2" strokeWidth={1.8} />
          <circle cx="17" cy="7" r="1.2" fill="currentColor" />
        </svg>
      );
    case "LinkedIn":
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
          <path d="M5.5 9h-3v12h3V9zm-1.5-1.5A1.75 1.75 0 117 5.75 1.75 1.75 0 014 7.5zM9 9h2.9v1.6h.04c.4-.76 1.37-1.56 2.83-1.56 3.02 0 3.58 1.98 3.58 4.55V21H15v-5.5c0-1.31-.02-3-1.83-3-1.83 0-2.11 1.43-2.11 2.9V21H9z" />
        </svg>
      );
    default:
      return <span>{title.charAt(0)}</span>;
  }
};

export const ContactSection: React.FC = () => (
  <section id="contact" className={styles.section}>
    <div className={styles.backgroundGradient} />
    <div className={styles.backgroundPattern} />

    <div className={styles.inner}>
      <div className={styles.content}>
        <header className={styles.header}>
          <div className={styles.badge}>
            <span className={styles.badgeIcon}>CT</span>
            <span className={styles.badgeText}>Contact</span>
          </div>
          <h2 className={styles.title}>함께 일하고 싶습니다</h2>
          <p className={styles.description}>
            새로운 도전과 성장의 기회를 찾고 있습니다. <br />
            저의 성장은 현재에 머무르지 않습니다. <br />
            백엔드 경력을 통해 시스템 이해도를 쌓은 후, 데이터 엔지니어링과
            DevOps 역량을 통합하여 <br />
            최종적으로 AI/ML 엔지니어로 성장하는 것을 목표로 합니다. <br />
            <br />
            <span>함께 멋진 프로젝트를 만들어보시겠습니까?</span>
          </p>
        </header>

        <div className={styles.cardsGrid}>
          {chunkContacts(contacts).map((row, rowIndex) => (
            <div className={styles.cardsRow} key={`contact-row-${rowIndex}`}>
              {row.map((contact) => (
                <article key={contact.title} className={styles.card}>
                  <div
                    className={styles.cardOverlay}
                    style={{ background: contact.overlayGradient }}
                  />
                  <div className={styles.cardContent}>
                    <div className={styles.iconWrapper}>
                      <div
                        className={clsx(
                          styles.iconBase,
                          iconClassMap[contact.iconGradient] ?? styles.iconBlue
                        )}
                      >
                        {renderIcon(contact.title)}
                      </div>
                    </div>
                    <h3 className={styles.cardTitle}>{contact.title}</h3>
                    <p className={styles.cardText}>{contact.description}</p>
                    <button
                      type="button"
                      className={styles.cardButton}
                      onClick={contact.onClick}
                    >
                      {contact.actionText}
                    </button>
                  </div>
                </article>
              ))}
            </div>
          ))}
        </div>

        <section className={styles.highlightPanel}>
          <div className={styles.highlightPattern} />
          <div className={styles.highlightContent}>
            <div className={styles.highlightText}>
              <h3 className={styles.highlightTitle}>
                포트폴리오를 끝까지 봐주셔서 감사합니다!
              </h3>
              <p className={styles.highlightDescription}>
                이 포트폴리오는 Next.js와 TypeScript를 기반으로 PostCSS + CSS
                Modules, 그리고 FSD 구조를 활용하여 제작되었습니다.
              </p>
            </div>
            <div className={styles.highlightTechGrid}>
              {techCards.map((card) => (
                <div key={card.text} className={styles.techCard}>
                  <span className={styles.techTag}>{card.tag}</span>
                  <p className={styles.techText}>{card.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  </section>
);
