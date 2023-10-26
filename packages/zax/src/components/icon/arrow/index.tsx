import { HTMLAttributes, defineComponent } from "vue";

import { CompWithAttr } from "@/src/types/global";
import { css, cx } from "@/styled-system/css";

const IconArrow = defineComponent({
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
              width: "100%",
              height: "1px",
              background: "colorPalette.600",
              position: "absolute",
              display: "block",
              top: "0px",
            },
            _before: {
              top: "0px",
              content: "",
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

export default IconArrow as CompWithAttr<typeof IconArrow, HTMLAttributes>;
