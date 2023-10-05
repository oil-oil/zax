import { SystemStyleObject } from "@pandacss/dev";
import { PropType, defineComponent } from "vue";

import loading from "./loading";
import buttonRecipe, { ButtonVariants } from "./recipe";
import showRipple from "./ripple";
import { css, cx } from "@/styled-system/css";

const Button = defineComponent({
  name: "ZButton",
  props: {
    color: {
      type: String,
      default: css({ colorPalette: "blue" }),
    },
    variant: {
      type: String as PropType<ButtonVariants["variant"]>,
      default: "flat",
    },
    size: {
      type: String as PropType<ButtonVariants["size"]>,
      default: "md",
    },
    shape: {
      type: String as PropType<ButtonVariants["shape"]>,
    },
    block: {
      type: Boolean as PropType<ButtonVariants["block"]>,
    },
    icon: {
      type: Boolean as PropType<ButtonVariants["icon"]>,
    },
    loading: {
      type: Boolean as PropType<ButtonVariants["loading"]>,
    },
    css: {
      type: Object as PropType<SystemStyleObject>,
    },
  },
  setup(props, { slots }) {
    return () => {
      const { color, css: customCSS, ...rest } = props;
      return (
        <button
          onMousedown={(el) => showRipple(el)}
          class={cx(color, css(buttonRecipe.raw(rest), customCSS))}
          disabled={props.loading}
        >
          {props.loading && <div class={cx(props.color, loading)} />}
          {slots?.default?.()}
        </button>
      );
    };
  },
});

export default Button;

export type ButtonProps = InstanceType<typeof Button>["$props"];
