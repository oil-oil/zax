import { HTMLAttributes, defineComponent } from "vue";

import { CompWithAttr } from "@/src/types/global";
import { css, cx } from "@/styled-system/css";

const Arrow = defineComponent({
  props: {
    color: {
      type: String,
      default: css({ colorPalette: "gray" }),
    },
    size: {
      type: String,
      default: css({ colorPalette: "gray" }),
    },
    customCSS: {
      type: String,
    },
  },
  setup(props) {
    return () => (
      <i
        class={cx(
          props.color,
          css({
            display: "inline-block",
            pointerEvents: "none",
            width: "7px",
            height: "7px",
            transition: "all 0.25s ease",
            transformOrigin: "center",
            position: "relative",
            _before: {
              content: '""',
              position: "absolute",
              top: "0px",
              width: "1px",
              height: "100%",
              background: "colorPalette.600",
              display: "block",
            },
            _after: {
              content: '""',
              position: "absolute",
              top: "0px",
              width: "100%",
              height: "1px",
              background: "colorPalette.600",
              display: "block",
            },
          }),
          props.customCSS,
        )}
      />
    );
  },
});

export default Arrow as CompWithAttr<typeof Arrow, HTMLAttributes>;
