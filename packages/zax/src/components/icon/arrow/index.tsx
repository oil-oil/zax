import { HTMLAttributes, defineComponent } from "vue";

import { CompWithAttr } from "@/src/types/global";
import { css, cx } from "@/styled-system/css";

const Arrow = defineComponent({
  props: {
    color: {
      type: String,
      default: css({ colorPalette: "gray" }),
    },
    css: {
      type: String,
    },
  },
  setup(props, { attrs }) {
    return () => (
      <i
        {...attrs}
        ref="icon"
        class={cx(
          props.color,
          css({
            pointerEvents: "none",
            width: "7px",
            height: "7px",
            transform: "rotate(-135deg)",
            transition: "all 0.25s ease",
            transformOrigin: "center",
            _after: {
              content: "",
              top: "0px",
              width: "100%",
              height: "1px",
              background: "colorPalette.600",
              position: "absolute",
              display: "block",
            },
            _before: {
              content: "",
              top: "0px",
              width: "1px",
              height: "100%",
              background: "colorPalette.600",
              position: "absolute",
              display: "block",
            },
          }),
          props.css,
        )}
      />
    );
  },
});

export default Arrow as CompWithAttr<typeof Arrow, HTMLAttributes>;
