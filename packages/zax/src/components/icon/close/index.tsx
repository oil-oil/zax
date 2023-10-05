import { defineComponent } from "vue";

import { css, cx } from "@/styled-system/css";

const Close = defineComponent({
  props: {
    color: {
      type: String,
      default: css({ colorPalette: "gray" }),
    },
    css: {
      type: String,
    },
  },
  setup(props) {
    return () => (
      <i
        ref="icon"
        class={cx(
          props.color,
          css({
            width: "30px",
            height: "30px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
            transition: "all 0.25s ease",
            _before: {
              background: "colorPalette.600",
              content: '""',
              position: "absolute",
              width: "16px",
              transform: "rotate(-45deg)",
              height: "2px",
              borderRadius: "2px",
              transition: "all 0.3s ease",
            },
            _after: {
              background: "colorPalette.600",
              content: '""',
              position: "absolute",
              width: "16px",
              height: "2px",
              transform: "rotate(45deg)",
              borderRadius: "2px",
              transition: "all 0.3s ease",
            },
          }),
          props.css,
        )}
      ></i>
    );
  },
});

export default Close;
