import { css } from "@/styled-system/css";

const loading = css({
  width: "full",
  height: "full",
  position: "absolute",
  top: "0",
  left: "0",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: "inherit",
  bgColor:
    "color-mix(in srgb, token(colors.colorPalette.600) 60%, transparent)",
  _after: {
    content: '""',
    width: "16px",
    height: "16px",
    borderLeft: "3px dotted rgba(255, 255, 255, 0.6)",
    borderRadius: "50%",
    position: "absolute",
    top: "0",
    bottom: "0",
    left: "0",
    right: "0",
    margin: "auto",
    animation: "spin 0.6s linear infinite",
  },
  _before: {
    content: '""',
    width: "16px",
    height: "16px",
    borderLeft: "3px dotted rgb(255, 255, 255)",
    borderRadius: "50%",
    position: "absolute",
    top: "0",
    bottom: "0",
    left: "0",
    right: "0",
    margin: "auto",
    animation: "spin 0.6s ease infinite",
  },
});

export default loading;
