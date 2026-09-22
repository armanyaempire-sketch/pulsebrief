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

    const scrollToTarget = () => {
      const target = document.getElementById(targetId);

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
      timeoutId = setTimeout(scrollToTarget, 300);
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
    };
  }, [targetId]);

  return null;
}
