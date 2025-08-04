import anime from 'https://cdn.jsdelivr.net/npm/animejs@3.2.1/lib/anime.es.js';

export const breathing = (targets) => {
   anime({
    targets: targets,
    translateY: [-10, 10],
    duration: 2000,
    easing: 'easeInOutSine',
    direction: 'alternate',
    loop: true,
  });
};