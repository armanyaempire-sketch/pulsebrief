"use client";

import { useEffect } from "react";

type AutoScrollToSectionProps = {
  targetId: string;
};

export default function AutoScrollToSection({
  targetId,
}: AutoScrollToSectionProps) {
  useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout> | undefined;
    let target: HTMLElement | null = null;

    const handleTargetClick = () => {
      if (!target) {
        return;
      }

      const top =
        target.getBoundingClientRect().top +
        window.scrollY;

      window.scrollTo({
        top,
        behavior: "auto",
      });
    };

    const handleLoad = () => {
      target = document.getElementById(targetId);

      if (!target) {
        return;
      }

      target.addEventListener("click", handleTargetClick);

      // Automatically click the section header 2 seconds after opening.
      timeoutId = setTimeout(() => {
        target?.click();
      }, 2000);
    };

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad, { once: true });
    }

    return () => {
      window.removeEventListener("load", handleLoad);

      if (timeoutId) {
        clearTimeout(timeoutId);
      }

      target?.removeEventListener("click", handleTargetClick);
    };
  }, [targetId]);

  return null;
}
