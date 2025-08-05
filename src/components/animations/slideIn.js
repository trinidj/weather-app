import { animate } from "animejs";

export const slideIn = (settings) => {
  const { targets, translate, opacity, duration, ease } = settings;

  animate(targets, {
    translateY: translate,
    opacity: opacity,
    duration: duration,
    ease: ease,
  });
};