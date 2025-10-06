import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

interface AnimatedTextProps {
  texts: string[];
  className?: string;
  interval?: number;
}

export function AnimatedText({ texts, className, interval = 2000 }: AnimatedTextProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setIsVisible(false);
      
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % texts.length);
        setIsVisible(true);
      }, 300); // Half of the transition duration
    }, interval);

    return () => clearInterval(timer);
  }, [texts.length, interval]);

  return (
    <span
      className={cn(
        "transition-all duration-500 ease-in-out",
        isVisible ? "opacity-100 transform translate-y-0" : "opacity-0 transform translate-y-2",
        className
      )}
    >
      {texts[currentIndex]}
    </span>
  );
}