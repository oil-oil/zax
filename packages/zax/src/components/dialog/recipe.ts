import { RecipeVariantProps, sva } from "@/styled-system/css";

const dialogRecipe = sva({
  slots: [
    "backdrop",
    "container",
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
      zIndex: "1",
      width: "full",
      height: "full",
      py: "80px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      bgColor: "rgba(0,0,0,0.6)",
    },
    container: {
      bgColor: "white",
      minWidth: "400px",
      maxWidth: "800px",
      margin: "auto",
      transition: "all 0.25s ease",
      position: "relative",
      borderRadius: "20px",
      boxShadow: "0px 5px 30px 0px rgba(0, 0, 0, 0.2)",
      zIndex: 2,
    },
    title: {
      py: "16px",
    },
    content: {
      px: "24px",
      py: "8px",
      width: "100%",
      position: "relative",
      borderRadius: "inherit",
    },
    footer: {
      padding: "10px 24px",
      paddingTop: "0px",
      display: "flex",
      justifyContent: "end",
    },
    close: {
      position: "absolute",
      top: "-6px",
      right: "-6px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: "12px",
      boxShadow: "0px 5px 20px 0px rgba(0, 0, 0, 0.3)",
      transition: " all 0.25s ease",
      zIndex: "200",
      border: "none",
      padding: "4px",
      _hover: {
        boxShadow: "0px 0px 4px 0px rgba(0, 0, 0, 0.3)",
        transform: "translate(-2px, 2px)",
      },
    },
  },
});

export default dialogRecipe;
