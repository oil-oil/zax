import { RecipeVariantProps, cva } from "@/styled-system/css";

const buttonRecipe = cva({
  base: {
    position: "relative",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    boxSizing: "border-box",
    cursor: "pointer",
    transition: "all 0.3s ease",
    height: "min-content",
    _active: {
      transform: "scale(0.98)",
    },
    _disabled: {
      opacity: 0.8,
    },
  },
  variants: {
    variant: {
      primary: { bgColor: "colorPalette.600", color: "white" },
      flat: { bgColor: "colorPalette.50", color: "colorPalette.600" },
      outline: {
        borderWidth: "1.5px",
        bgColor: "white",
        borderColor: "gray.200",
        color: "gray.800",
        "&:hover": {},
      },
      text: {
        color: "colorPalette.600",
        bgSize: "0",
        _before: {
          content: '""',
          background: `colorPalette.50`,
          position: "absolute",
          bottom: "0px",
          left: "0px",
          width: "100%",
          height: "100%",
          borderRadius: "inherit",
          pointerEvents: "none",
          transition: "all 0.25s ease",
          zIndex: "-1",
          transform: "scale(0.6)",
          opacity: "0",
          boxSizing: "border-box",
        },
        _hover: {
          _before: {
            opacity: 1,
            transform: "scale(1)",
          },
        },
      },
      pressable: {
        bgColor: "colorPalette.600",
        color: "white",
        transition: "all 0.2s ease",
        _before: {
          content: '""',
          position: "absolute",
          bottom: "0px",
          left: "0px",
          width: "100%",
          height: `calc(100% - 3px)`,
          borderRadius: "inherit",
          pointerEvents: "none",
          transition: "all 0.4s ease",
          filter: "contrast(5) grayscale(0.4)",
          borderBottom: "4px solid token(colors.colorPalette.600)",
        },
        _active: {
          transform: "translate(0, 2px)",
          _before: {
            borderBottom: "0px solid token(colors.colorPalette.600)",
          },
        },
      },
    },
    shape: {
      circle: { borderRadius: "25px" },
      square: { borderRadius: "0px" },
    },
    size: {
      xs: { px: "8px", py: "4px", fontSize: "0.55rem", borderRadius: "8px" },
      sm: { px: "10px", py: "6px", fontSize: "0.7rem", borderRadius: "10px" },
      md: { px: "12px", py: "8px", fontSize: "0.85rem", borderRadius: "12px" },
      lg: { px: "14px", py: "10px", fontSize: "1rem", borderRadius: "14px" },
      xl: { px: "16px", py: "12px", fontSize: "1.15rem", borderRadius: "16px" },
    },
    block: {
      true: { w: "100%" },
      false: { w: "auto" },
    },
    icon: {
      true: {},
      false: {},
    },
    loading: {
      true: {
        cursor: "not-allowed",
      },
      false: {},
    },
  },
  compoundVariants: [
    {
      icon: true,
      size: "xs",
      css: {
        p: "4px",
        fontSize: "1rem",
      },
    },
    {
      icon: true,
      size: "sm",
      css: {
        p: "6px",
        fontSize: "1.15rem",
      },
    },
    {
      icon: true,
      size: "md",
      css: {
        p: "8px",
        fontSize: "1.3rem",
      },
    },
    {
      icon: true,
      size: "lg",
      css: {
        p: "10px",
        fontSize: "1.45rem",
      },
    },
    {
      icon: true,
      size: "xl",
      css: {
        p: "12px",
        fontSize: "1.7rem",
      },
    },
  ],
});

export default buttonRecipe;

export type ButtonVariants = Exclude<
  RecipeVariantProps<typeof buttonRecipe>,
  undefined
>;
