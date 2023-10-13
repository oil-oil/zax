import { RecipeVariantProps, sva } from "@/styled-system/css";

const loadingRecipe = sva({
  slots: ["root", "container", "load1", "load2", "load3"],
  base: {
    root: {
      position: "absolute",
      top: "0px",
      left: "0px",
      width: "full",
      height: "full",
      zIndex: 100000,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      transition: "all 0.25s ease",
      borderRadius: "inherit",
      background: "rgba(0, 0 ,0 ,0.2)",
    },
    container: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "column",
      transform: "scale(80%)",
    },
  },
  variants: {
    type: {
      default: {
        container: {
          borderRadius: "50%",
        },
        load1: {
          position: "absolute",
          top: "0px",
          bottom: "0px",
          width: "inherit",
          height: "inherit",
          margin: "auto",
          border: `3px solid token(colors.colorPalette.200)`,
          borderRadius: "inherit",
          borderTop: "3px solid transparent",
          borderLeft: "3px solid transparent",
          borderRight: "3px solid transparent",
          animation: "spin 0.8s ease infinite",
        },
        load2: {
          position: "absolute",
          top: "0px",
          bottom: "0px",
          width: "inherit",
          height: "inherit",
          margin: "auto",
          border: `3px dashed token(colors.colorPalette.200)`,
          borderRadius: "inherit",
          borderTop: "3px solid transparent",
          borderLeft: "3px solid transparent",
          borderRight: "3px solid transparent",
          animation: "spin 0.8s linear infinite",
          opacity: "0.4",
        },
      },
    },
  },
});

export default loadingRecipe;
export type LoadingVariants = Exclude<
  RecipeVariantProps<typeof loadingRecipe>,
  undefined
>;
