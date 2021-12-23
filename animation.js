//title animation framer motion
export const titleAnim = {
  hidden: {
    y: 200,
  },
  show: {
    y: 0,
    staggerChildren: 1,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
};

export const revealAnim = {
  hidden: {
    opacity: 0,
  },
  staggerChildren: 0.1,

  show: {
    opacity: 1,
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
};
export const revealAnim2 = {
  hidden: {
    opacity: 0,
  },
  staggerChildren: 0.1,

  show: {
    opacity: 1,
    transition: {
      duration: 2,
      ease: "easeInOut",
    },
  },
};

export const imgAnim = {
  hidden: {
    opacity: 0,
    scale: 1.5,
  },
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
};

export const NavAnim = {
  hidden: {
    y: -100,
  },
  show: {
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
};
