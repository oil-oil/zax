import { PropType, Transition, computed, defineComponent, ref } from "vue";

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
      type: String,
    },
  },
  setup(props) {
    const rootRef = ref<HTMLElement>();
    const classes = loadingRecipe({ type: props.type });

    const innerSize = computed(() => {
      if (rootRef.value) {
        const el = rootRef.value as HTMLElement;
        return `${Math.min(el.offsetWidth, el.offsetHeight)}px`;
      }
      return 0;
    });

    return () => (
      <Transition
        enterActiveClass={css({ transition: "opacity 0.5s" })}
        leaveActiveClass={css({ transition: "opacity 0.5s" })}
        enterToClass={css({ opacity: 0 })}
      >
        <div ref={rootRef} class={classes.backdrop}>
          <div
            class={classes.container}
            style={{
              width: props.size || innerSize.value,
              height: props.size || innerSize.value,
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
