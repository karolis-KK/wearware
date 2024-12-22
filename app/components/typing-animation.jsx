"use client";

import { cn } from "../../lib/utils";
import { motion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import PropTypes from 'prop-types';

export function TypingAnimation({
  children,
  className,
  duration = 100,
  delay = 0,
  as: Component = "div",
  startOnView = true
}) {
  const MotionComponent = motion.create(Component);
  const [displayedText, setDisplayedText] = useState("");
  const [started, setStarted] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    if (!startOnView) {
      const startTimeout = setTimeout(() => {
        setStarted(true);
      }, delay);
      return () => clearTimeout(startTimeout);
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(false); // Reset started state
          setDisplayedText(""); // Clear displayed text
          setTimeout(() => {
            setStarted(true); // Start typing animation
          }, delay);
        }
      },
      { threshold: 0 }, // Adjusted threshold to 0
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [delay, startOnView]);

  useEffect(() => {
    if (!started) return;

    let i = 0;
    const typingEffect = setInterval(() => {
      if (i < children.length) {
        setDisplayedText(children.substring(0, i + 1));
        i++;
      } else {
        clearInterval(typingEffect);
      }
    }, duration);

    return () => {
      clearInterval(typingEffect);
    };
  }, [children, duration, started]);

  return (
    <MotionComponent
      ref={elementRef}
      className={cn(
        "leading-[5rem] tracking-[-0.02em]",
        className,
      )}
    >
      {displayedText}
    </MotionComponent>
  );
}

TypingAnimation.propTypes = {
  children: PropTypes.string.isRequired,
  className: PropTypes.string,
  duration: PropTypes.number,
  delay: PropTypes.number,
  as: PropTypes.elementType,
  startOnView: PropTypes.bool
};