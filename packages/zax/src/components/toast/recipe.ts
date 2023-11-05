import { RecipeVariantProps, sva } from "@/styled-system/css";

const toastRecipe = sva({
  slots: ["root", "title", "description", "close"],
  base: {
    root: {
      borderRadius: "16px",
      background: "colorPalette.100",
      padding: "20px",
      width: "340px",
      boxShadow: " 0px 10px 30px -5px rgba(0, 0, 0, token(opacity.shadow))",
      transition: "all 0.25s",
      clipPath: "circle(120% at 50% 0%)",
    },
    title: {
      fontSize: "1rem",
      fontWeight: "bold",
      color: "colorPalette.800",
    },
    description: {
      fontSize: "0.75rem",
      color: "colorPalette.600",
    },
    close: {
      position: "absolute",
      cursor: "pointer",
      top: "2px",
      right: "2px",
    },
  },
});

export default toastRecipe;
export type ToastVariants = Exclude<
  RecipeVariantProps<typeof toastRecipe>,
  undefined
>;
