import { SystemStyleObject } from "@pandacss/dev";
import { HTMLAttributes, PropType, defineComponent } from "vue";

import { CompWithAttr } from "@/src/types/global";
import { css, cx } from "@/styled-system/css";

const IconClose = defineComponent({
  props: {
    color: {
      type: String,
      default: css({ colorPalette: "gray" }),
    },
    customCSS: {
      type: Object as PropType<SystemStyleObject>,
    },
  },
  setup(props) {
    return () => (
      <i
        class={cx(
          props.color,
          css(
            {
              width: "30px",
              height: "30px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              position: "relative",
              transition: "all 0.25s ease",
              _before: {
                background: "colorPalette.800",
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
            },
            props.customCSS,
          ),
        )}
      />
    );
  },
});

export default IconClose as CompWithAttr<typeof IconClose, HTMLAttributes>;
