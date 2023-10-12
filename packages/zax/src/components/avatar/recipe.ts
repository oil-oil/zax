import { RecipeVariantProps, sva } from "@/styled-system/css";

const avatarRecipe = sva({
  slots: ["root", "fallback", "image"],
  base: {
    root: {
      borderRadius: "35%",
      background: "gray.200",
      userSelect: "none",
    },
    fallback: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "gray.600",
      boxShadow: "inset 0px 0px 0px 0px rgba(0, 0, 0, 0.05)",
      transition: "all 0.2s ease",
      _hover: {
        boxShadow: "inset 0px 0px 40px 0px rgba(0, 0, 0, 0.05)",
      },
    },
    image: {
      transition: "all 0.25s ease",
      _hover: {
        transform: "scale(1.1)",
      },
    },
  },
});

export default avatarRecipe;
export type AvatarVariants = Exclude<
  RecipeVariantProps<typeof avatarRecipe>,
  undefined
>;
