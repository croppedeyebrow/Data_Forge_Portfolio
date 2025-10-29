"use client";

import React from "react";
import { Button } from "@/shared/ui/Button";
import { scrollToSectionById } from "../model/scrollToSection";

interface ScrollToSectionButtonProps {
  targetId: string;
  children: React.ReactNode;
  className?: string;
}

export const ScrollToSectionButton: React.FC<ScrollToSectionButtonProps> = ({
  targetId,
  children,
  className,
}) => {
  return (
    <Button onClick={() => scrollToSectionById(targetId)} className={className}>
      {children}
    </Button>
  );
};
