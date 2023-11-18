export const pageVariants = {
  initial: {
    y: '100vh',
  },
  in: {
    y: 'calc(0 + (3rem + 6vh)',
  },
  out: { y: '100vh' },
};

export const pageTransition = {
  type: 'tween',
  ease: 'anticipate',
  duration: 0.5,
};
