import * as select from "@zag-js/select";
import { normalizeProps, useMachine } from "@zag-js/vue";
import { computed, defineComponent, Teleport } from "vue";

import selectRecipe from "./recipe";
import useId from "@/src/hooks/useId";

const selectData = [
  { label: "Nigeria", value: "NG" },
  { label: "Japan", value: "JP" },
  // ...
] as const;

export default defineComponent({
  name: "ZSelect",
  setup() {
    const { id } = useId("select");
    const [state, send] = useMachine(
      select.machine({
        id,
        collection: select.collection({
          items: selectData,
        }),
      }),
    );

    const apiRef = computed(() =>
      select.connect(state.value, send, normalizeProps),
    );

    const classesRef = computed(() => selectRecipe());

    return () => {
      const api = apiRef.value;
      const classes = classesRef.value;
      return (
        <>
          <div class={classes.container}>
            <label {...api.labelProps}>Label</label>
            <button {...api.triggerProps}>
              <span>{api.valueAsString || "Select option"}</span>
            </button>
          </div>

          <Teleport to="body">
            <div {...api.positionerProps}>
              <ul {...api.contentProps}>
                {selectData.map((item) => (
                  <li key={item.value} {...api.getItemProps({ item })}>
                    <span>{item.label}</span>
                    <span {...api.getItemIndicatorProps({ item })}>✓</span>
                  </li>
                ))}
              </ul>
            </div>
          </Teleport>
        </>
      );
    };
  },
});
