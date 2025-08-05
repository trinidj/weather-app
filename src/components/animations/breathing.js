import { animate } from 'animejs';

export const breathing = (target) => {
  animate(target, {
    translateY: 10,
    duration: 1500,
    ease: 'inOutQuad',
    alternate: true,
    loop: true,
  });
};