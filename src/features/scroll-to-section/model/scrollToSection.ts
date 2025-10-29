"use client";

export function scrollToSectionById(targetId: string): void {
  if (!targetId) return;
  const element = document.querySelector(`#${targetId}`);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
}
