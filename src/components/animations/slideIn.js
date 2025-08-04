import anime from 'https://cdn.jsdelivr.net/npm/animejs@3.2.1/lib/anime.es.js';

export const slideIn = (targets) => {
  anime({
    targets: targets,
    translateY: [80, 0],
    opacity: [0, 1],
    duration: 700,
    easing: 'easeOutQuad'
  });
};