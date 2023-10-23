import { ButtonHTMLAttributes, defineComponent } from "vue";

import { CompWithAttr } from "@/src/types/global";
import { css } from "@/styled-system/css";

const ZButtonGroup = defineComponent({
  name: "ZButtonGroup",
  setup(_, { slots }) {
    return () => (
      <div
        class={css({
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          "&>button": {
            margin: "0",
          },
          "&>button:not(:first-child):not(:last-child)": {
            borderRadius: "0",
            borderLeft: "0",
          },
          "&>button:first-child": {
            borderRadius: "12px 0px 0px 12px",
          },
          "&>button:last-child": {
            borderRadius: "0px 12px 12px 0px",
            borderLeft: "0",
          },
        })}
      >
        {slots.default?.()}
      </div>
    );
  },
});

export default ZButtonGroup as CompWithAttr<
  typeof ZButtonGroup,
  ButtonHTMLAttributes
>;
