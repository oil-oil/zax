import * as select from "@zag-js/select";
import { normalizeProps, useMachine } from "@zag-js/vue";
import { computed, defineComponent, Teleport, Transition } from "vue";

import selectRecipe from "./recipe";
import Arrow from "../icon/arrow";
import useId from "@/src/hooks/useId";
import { css, cx } from "@/styled-system/css";

const selectData = [
  { label: "Nigeria", value: "NG" },
  { label: "Japan", value: "JP" },
  // ...
] as const;

export default defineComponent({
  name: "ZSelect",
  props: {
    color: {
      type: String,
      default: css({ colorPalette: "blue" }),
    },
  },
  setup(props) {
    const { id } = useId("select");
    const [state, send] = useMachine(
      select.machine({
        id,
        collection: select.collection({
          items: selectData,
        }),
        positioning: {
          strategy: "fixed",
          placement: "bottom",
        },
      }),
    );

    const apiRef = computed(() =>
      select.connect(state.value, send, normalizeProps),
    );

    const classesRef = computed(() =>
      selectRecipe({ isOpen: apiRef.value.isOpen }),
    );

    return () => {
      const api = apiRef.value;
      const classes = classesRef.value;
      return (
        <>
          <div>
            <label {...api.labelProps}>Label</label>
            <button {...api.triggerProps} class={classes.trigger}>
              <span>{api.valueAsString || "Select option"}</span>
              <Arrow />
            </button>
          </div>

          <Teleport to="body">
            <Transition
              leaveToClass={css({
                "& > [data-part='positioner']": {
                  opacity: 0,
                  transform: "translate(0, -10px)",
                  boxShadow: "0px 0px 0px 0px token(opacity.shadow)",
                },
              })}
              enterFromClass={css({
                "& > [data-part='positioner']": {
                  opacity: 0,
                  transform: "translate(0, -10px)",
                  boxShadow: "0px 0px 0px 0px token(opacity.shadow)",
                },
              })}
              enterActiveClass={css({
                "& > [data-part='positioner']": {
                  transition: "all 0.25s ease",
                },
              })}
              leaveActiveClass={css({
                "& > [data-part='positioner']": {
                  transition: "all 0.25s ease",
                },
              })}
            >
              {api.isOpen && (
                <div {...api.positionerProps} class={classes.positioner}>
                  <ul {...api.contentProps}>
                    {selectData.map((item) => (
                      <li
                        key={item.value}
                        {...api.getItemProps({ item })}
                        class={cx(
                          props.color,
                          classes.item,
                          !api.getItemIndicatorProps({ item }).hidden
                            ? css({
                                background: "colorPalette.100",
                                color: "colorPalette.600",
                              })
                            : "",
                        )}
                      >
                        <span class={classes.itemLabel}>{item.label}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </Transition>
          </Teleport>
        </>
      );
    };
  },
});
