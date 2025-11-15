import React from "react";
import Image from "next/image";
import { SITE_CONFIG } from "@/shared/config/constants";

import styles from "./Footer.module.css";

const stackLines = [
  "Java • Spring Boot • Python • FastAPI",
  "Node.js • NestJS • Express",
  "React • TypeScript • Next.js",
  "MySQL • PostgreSQL • MongoDB • Redis",
  "Docker • GitHub Actions",
  "Styled Components • CSS Modules",
];

const contacts = ["GitHub: @croppedeyebrow", "Email: lee940706@gmail.com"];

export const Footer: React.FC = () => (
  <footer className={styles.footer}>
    <div className={styles.inner}>
      <div className={styles.grid}>
        <div className={styles.logoBlock}>
          <div className={styles.logoRow}>
            <div className={styles.logoImage}>
              <Image
                src="/data_forge_logo.png"
                alt="Data_Forge Logo"
                fill
                sizes="48px"
                style={{ objectFit: "contain", borderRadius: "12px" }}
              />
            </div>
            <span className={styles.logoTitle}>Data_Forge</span>
          </div>
          <p className={styles.tagline}>백엔드 개발자 기술 역량 포트폴리오</p>
        </div>

        <div className={styles.column}>
          <h3 className={styles.columnTitle}>기술 스택</h3>
          <div className={styles.list}>
            {stackLines.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </div>
        </div>

        <div className={styles.column}>
          <h3 className={styles.columnTitle}>연락처</h3>
          <div className={styles.list}>
            {contacts.map((info) => (
              <p key={info}>{info}</p>
            ))}
          </div>
        </div>
      </div>

      <div className={styles.divider}>
        <p>&copy; 2024 {SITE_CONFIG.author}. All rights reserved.</p>
      </div>
    </div>
  </footer>
);
