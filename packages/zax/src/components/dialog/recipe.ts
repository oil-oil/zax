import { RecipeVariantProps, sva } from "@/styled-system/css";

const dialogRecipe = sva({
  slots: [
    "backdrop",
    "positioner",
    "content",
    "title",
    "description",
    "close",
    "closeIcon",
    "footer",
  ],
  base: {
    backdrop: {
      position: "fixed",
      left: "0",
      top: "0",
      zIndex: "token(zIndex.dialog)",
      width: "full",
      height: "full",
      py: "80px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      bgColor: "rgba(0,0,0,0.6)",
    },
    positioner: {
      bgColor: "white",
      margin: "auto",
      color: "gray.700",
      transition: "all 0.25s ease",
      position: "relative",
      borderRadius: "20px",
      boxShadow: "0px 5px 30px 0px rgba(0, 0, 0, 0.2)",
    },
    title: {
      px: "24px",
      py: "16px",
      fontWeight: "bold",
      fontSize: "xl",
      color: "inherit",
    },
    content: {
      py: "8px",
      width: "100%",
      position: "relative",
      borderRadius: "inherit",
    },
    description: {
      px: "24px",
    },
    footer: {
      p: "24px",
      pb: "8px",
      display: "flex",
      justifyContent: "end",
      gap: "8px",
    },
    close: {
      position: "absolute",
      top: "-6px",
      right: "-6px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      boxShadow: "0px 5px 20px 0px rgba(0, 0, 0, 0.1)",
      transition: " all 0.25s ease",
      width: "36px",
      height: "36px",
      zIndex: "200",
      border: "none",
      padding: "4px",
      _hover: {
        boxShadow: "0px 0px 4px 0px rgba(0, 0, 0, 0.1)",
        transform: "translate(-2px, 2px)",
      },
    },
  },
  variants: {
    size: {
      xs: { positioner: { width: "240px" } },
      sm: { positioner: { width: "320px" } },
      md: { positioner: { width: "480px" } },
      lg: { positioner: { width: "600px" } },
      xl: { positioner: { width: "960px" } },
    },
    blur: {
      false: {},
      true: {
        backdrop: {
          backdropFilter: "saturate(180%) blur(5px)",
        },
      },
    },
    square: {
      false: {},
      true: {
        positioner: {
          borderRadius: "0px",
        },
      },
    },
    scrollBehavior: {
      outside: {
        backdrop: {
          overflowY: "auto",
        },
      },
      inside: {
        description: {
          overflowY: "auto",
          maxHeight: "70vh",
        },
      },
    },
  },
});

export default dialogRecipe;
export type DialogVariants = Exclude<
  RecipeVariantProps<typeof dialogRecipe>,
  undefined
>;
