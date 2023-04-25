export const animateAccordionBodyText = {
  initial: { y: "-100%" },
  animate: { y: 0 },
  exit: { y: "-150%" },
};

export const animateAccordionBody = {
  initial: { display: "none" },
  animate: { display: "block", height: "auto", transition: { duration: 0.2 } },
  exit: {
    height: "0",
    padding: 0,
    borderTop: 0,
    transition: { duration: 0.2 },
  },
};
