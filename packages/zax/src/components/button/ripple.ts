import { css } from "@/styled-system/css";

const showRipple = (event: MouseEvent) => {
  const el = event.currentTarget as HTMLElement;
  const rippleContainer = document.createElement("div");
  rippleContainer.className = css({
    position: "absolute",
    left: "0",
    top: "0",
    width: "100%",
    height: "100%",
    overflow: "hidden",
    borderRadius: "inherit",
  });

  const rippleElement = document.createElement("span");
  rippleElement.className = css({
    position: "absolute",
    width: "100%",
    height: "100%",
    transform: "scale(0) translate(-50%, -50%)",
    transformOrigin: "0 0",
    opacity: 0.5,
    borderRadius: "50%",
    transition: "all 0.8s ease",
    background:
      "radial-gradient(circle, rgba(200,200,200,0.5), rgba(200,200,200,1))",
  });
  rippleElement.style.left = `${event.pageX - el.offsetLeft}px`;
  rippleElement.style.top = `${event.pageY - el.offsetTop}px`;

  rippleContainer.appendChild(rippleElement);
  el.appendChild(rippleContainer);
  requestAnimationFrame(() => {
    rippleElement.style.transform = "scale(3) translate(-50%, -50%)";
    rippleElement.style.opacity = "0";
  });

  setTimeout(() => {
    rippleContainer.remove();
  }, 800);
};

export default showRipple;
