import { defineComponent } from "vue";

import { css, cx } from "@/styled-system/css";

const IconCheck = defineComponent({
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
          css({
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }),
          props.customCSS,
        )}
      >
        <div
          class={css({
            position: "relative",
            width: "80%",
            height: "40%",
            transform: "rotate(-45deg)",
          })}
        >
          <div
            class={css({
              position: "absolute",
              left: "0",
              width: "full",
              height: "full",
              borderLeft: "2px solid white",
              animation: "checkShort 0.15s",
            })}
          />
          <div
            class={css({
              position: "absolute",
              left: "0",
              width: "full",
              height: "full",
              borderBottom: "2px solid white",
              animation: "checkLong 0.5s",
            })}
          />
        </div>
      </i>
    );
  },
});

export default IconCheck;
