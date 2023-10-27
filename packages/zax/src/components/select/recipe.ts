import { sva } from "@/styled-system/css";

const selectRecipe = sva({
  slots: [
    "container",
    "label",
    "trigger",
    "positioner",
    "content",
    "item",
    "itemLabel",
  ],
  base: {
    trigger: {
      display: "flex",
      direction: "column",
      alignItems: "center",
      paddingX: "12px",
      paddingY: "8px",
      justifyContent: "center",
      minHeight: "38px",
      borderRadius: "12px",
      transition: "all 0.25s ease",
      backgroundColor: "gray.100",
      fontSize: "0.8rem",
      cursor: "pointer",
      _hover: {
        transform: "translateY(-2px)",
        backgroundColor: "white",
        boxShadow: "0px 5px 25px -4px rgba(0, 0, 0, token(opacity.shadow))",
      },
    },
    label: {
      fontSize: "0.8rem",
    },
    positioner: {
      position: "absolute",
      padding: "4px",
      borderRadius: "0px 0px 12px 12px",
      overflow: "hidden",
      boxShadow: "0px 10px 20px -5px rgba(0, 0, 0, token(opacity.shadow))",
    },
    item: {
      padding: "6px 10px",
      transition: "all 0.25s ease",
      borderRadius: "5px",
      color: "token(colors.text)",
      fontSize: "0.8rem",
      cursor: "pointer",
    },
    itemLabel: {
      _hover: {
        transform: "translateX(5px)",
        color: "colorPalette.600",
      },
    },
  },
  variants: {
    isOpen: {
      false: {},
      true: {
        trigger: {
          transform: "translateY(-2px)",
          backgroundColor: "white",
          boxShadow: "0px 5px 25px -4px rgba(0, 0, 0, token(opacity.shadow))",
        },
      },
    },
  },
});

export default selectRecipe;
