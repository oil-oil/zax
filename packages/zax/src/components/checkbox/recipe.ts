import { RecipeVariantProps, cva, sva } from "@/styled-system/css";

const checkboxRecipe = sva({
  slots: ["root", "control", "selectedBlock"],
  base: {
    root: {
      display: "flex",
      alignItems: "center",
      cursor: "pointer",
    },
    control: {
      width: "24px",
      height: "24px",
      borderRadius: "8px",
      border: "token(colors.gray.200) solid 2px",
      transition: "all 0.3s",
      _groupHover: {
        background: "gray.200",
      },
      marginRight: "4px",
      flexShrink: "0",
    },
    selectedBlock: {
      width: "full",
      height: "full",
      background: "colorPalette.600",
      borderRadius: "inherit",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      transition: "all 0.3s",
      _groupHover: {
        boxShadow:
          "0px 3px 15px 0px color-mix(in srgb, token(colors.colorPalette.600) 40%, transparent)",
      },
    },
  },
  variants: {
    isChecked: {
      true: {
        control: {
          border: "none",
        },
      },
    },
  },
});

export default checkboxRecipe;

export type CheckVariants = Exclude<
  RecipeVariantProps<typeof checkboxRecipe>,
  undefined
>;
