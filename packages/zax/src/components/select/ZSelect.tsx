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
            <button
              {...api.triggerProps}
              class={cx(
                classes.trigger,
                !api.hasSelectedItems &&
                  css({
                    color: "gray.400",
                  }),
              )}
            >
              <span>{api.valueAsString || "Select option"}</span>
              <Arrow
                customCSS={css({
                  marginLeft: "16px",
                  transform: api.isOpen ? "rotate(45deg)" : "rotate(-135deg)",
                })}
              />
            </button>
          </div>

          <Teleport to="body">
            <Transition
              leaveToClass={css({
                opacity: 0,
                boxShadow: "0px 0px 0px 0px token(opacity.shadow)",
              })}
              enterFromClass={css({
                opacity: 0,
                boxShadow: "0px 0px 0px 0px token(opacity.shadow)",
              })}
              enterActiveClass={css({
                transition: "opacity 0.2s ease, margin 0.2s ease",
              })}
              leaveActiveClass={css({
                transition: "opacity 0.2s ease, margin 0.2s ease",
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
                          css(
                            api.getItemState({ item }).isSelected
                              ? {
                                  background:
                                    "color-mix(in srgb, token(colors.colorPalette.100) 40%, transparent)",
                                  color: "colorPalette.600",
                                }
                              : { color: "token(colors.text)" },
                          ),
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
