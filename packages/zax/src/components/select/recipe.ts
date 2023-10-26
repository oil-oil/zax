import { sva } from "@/styled-system/css";

const selectRecipe = sva({
  slots: ["container", "label", "trigger", "positioner", "content", "item"],
  base: {
    container: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      minHeight: "38px",
      background: "white",
      borderRadius: "12px 12px 0px 0px",
      boxShadow: "0px 5px 25px -4px rgba(0, 0, 0, rgba(200,200,200,0.5))",
      transition: "all 0.25s ease",
      color: "colorPalette.800",
    },
  },
});

export default selectRecipe;
