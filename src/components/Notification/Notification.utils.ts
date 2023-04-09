export const getNotificationAnimation = (
  vertical: string,
  horizontal: string
) => {
  let initialX = "100%";
  let initialY: string = "0";
  let animateX: string = "0";
  let animateY: string = "0";

  if (horizontal === "left") {
    initialX = "-100%";
  }

  if (horizontal === "center" && vertical === "bottom") {
    initialY = "-100%";
  }

  if (horizontal === "center" && vertical === "top") {
    initialX = "-50%";
    animateX = "-50%";
    initialY = "-100%";
    animateY = "0";
  }

  if (horizontal === "center" && vertical === "bottom") {
    initialX = "-50%";
    animateX = "-50%";
    initialY = "100%";
    animateY = "0";
  }

  return {
    initial: { x: initialX, y: initialY },
    animate: { x: animateX, y: animateY },
  };
};
