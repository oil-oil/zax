import { RecipeVariantProps, cva, sva } from "@/styled-system/css";

const checkboxRecipe = sva({
  slots: ["root"],
  base: {
    root: {
      display: "flex",
      alignItems: "center",
    },
  },
});

export default checkboxRecipe;

export type CheckVariants = Exclude<
  RecipeVariantProps<typeof checkboxRecipe>,
  undefined
>;
