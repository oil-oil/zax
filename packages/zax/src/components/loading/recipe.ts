import { RecipeVariantProps, sva } from "@/styled-system/css";

const loadingRecipe = sva({
  slots: ["backdrop", "container", "load1", "load2", "load3"],
  base: {
    backdrop: {
      position: "absolute",
      top: "0px",
      left: "0px",
      width: "full",
      height: "full",
      zIndex: 1,
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
      overflow: "hidden",
    },
    load1: {
      width: "inherit",
      height: "inherit",
    },
    load2: {
      width: "inherit",
      height: "inherit",
    },
    load3: {
      width: "inherit",
      height: "inherit",
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
          margin: "auto",
          border: "3px dashed token(colors.colorPalette.200)",
          borderRadius: "inherit",
          borderTop: "3px solid transparent",
          borderLeft: "3px solid transparent",
          borderRight: "3px solid transparent",
          animation: "spin 0.8s linear infinite",
          opacity: "0.4",
        },
      },
      corner: {
        load1: {
          width: "80%",
          height: "80%",
          background: "transparent",
          position: "absolute",
          animation: "corner 1s ease infinite",
          border: `3px solid token(colors.colorPalette.200)`,
          borderRadius: "50%",
        },
      },
      point: {
        container: {
          flexDirection: "row",
        },
        load1: {
          width: "8px",
          height: "8px",
          background: " token(colors.colorPalette.200)",
          borderRadius: "50%",
          margin: "3px",
          animation: "point 0.75s ease infinite",
        },
        load2: {
          width: "8px",
          height: "8px",
          background: " token(colors.colorPalette.200)",
          borderRadius: "50%",
          margin: "3px",
          animation: "point 0.75s ease infinite 0.25s",
        },
        load3: {
          width: "8px",
          height: "8px",
          background: "token(colors.colorPalette.200)",
          borderRadius: "50%",
          margin: "3px",
          animation: "point 0.75s ease infinite 0.5s",
        },
      },
      square: {
        load1: {
          position: "absolute",
          width: "60%",
          height: "60%",
          animation: "rotateSquare 3s ease infinite",
          background: "token(colors.colorPalette.200)",
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
