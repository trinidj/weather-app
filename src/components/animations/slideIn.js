/**
 * @param { String } targets
 * @param { Array } translate
 * @param { Array } opacity
 * @param { Number } duration
 * @param { String } easing
 */

import anime from 'https://cdn.jsdelivr.net/npm/animejs@3.2.1/lib/anime.es.js';

export const slideIn = (settings) => {
  const { targets, translate, opacity, duration, easing } = settings;

  anime({
    targets: targets,
    translateY: translate,
    opacity: opacity,
    duration: duration,
    easing: easing,
  });
};