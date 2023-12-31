import { SystemStyleObject } from "@pandacss/dev";
import { ButtonHTMLAttributes, PropType, defineComponent } from "vue";

import buttonRecipe, { ButtonVariants } from "./recipe";
import showRipple from "./ripple";
import { ZLoadingProps } from "../loading/ZLoading";
import { CompWithAttr } from "@/src/types/global";
import { css, cx } from "@/styled-system/css";

const ZButton = defineComponent({
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
    loadingType: {
      type: String as PropType<ZLoadingProps["type"]>,
    },
    customCSS: {
      type: Object as PropType<SystemStyleObject>,
    },
  },
  setup(props, { slots }) {
    return () => (
      <button
        v-loading={[props.loading, props.loadingType]}
        onMousedown={(el) => showRipple(el)}
        class={cx(
          props.color,
          css(
            buttonRecipe.raw({
              variant: props.variant,
              size: props.size,
              shape: props.shape,
              block: props.block,
              icon: props.icon,
              loading: props.loading,
            }),
            props.customCSS,
          ),
        )}
        disabled={props.loading}
      >
        {slots?.default?.()}
      </button>
    );
  },
});

export default ZButton as CompWithAttr<typeof ZButton, ButtonHTMLAttributes>;

export type ZButtonProps = InstanceType<typeof ZButton>["$props"];
