import { PropType, Transition, defineComponent, ref, toRef } from "vue";

import loadingRecipe, { LoadingVariants } from "./recipe";
import { css, cx } from "@/styled-system/css";

const ZLoading = defineComponent({
  name: "ZLoading",
  props: {
    color: {
      type: String,
      default: css({ colorPalette: "gray" }),
    },
    type: {
      type: String as PropType<LoadingVariants["type"]>,
      default: "default",
    },
    size: {
      type: Number,
    },
  },
  emits: ["update:visible", "update:text"],
  setup(props) {
    const rootRef = ref<HTMLElement>();
    const classes = loadingRecipe({ type: props.type });
    return () => (
      <Transition
        enterActiveClass={css({ transition: "opacity 0.5s" })}
        leaveActiveClass={css({ transition: "opacity 0.5s" })}
        enterToClass={css({ opacity: 0 })}
      >
        <div ref={rootRef} class={classes.root}>
          <div
            class={classes.container}
            style={{
              width: `${props.size}px`,
              height: `${props.size}px`,
            }}
          >
            {([1, 2, 3] as const).map((item) => (
              <div key={item} class={cx(props.color, classes[`load${item}`])} />
            ))}
          </div>
        </div>
      </Transition>
    );
  },
});

export default ZLoading;

export type ZLoadingProps = InstanceType<typeof ZLoading>["$props"];
