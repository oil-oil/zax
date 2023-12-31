import * as select from "@zag-js/select";
import { normalizeProps, useMachine } from "@zag-js/vue";
import {
  computed,
  defineComponent,
  Teleport,
  Transition,
  PropType,
  watch,
  toRaw,
} from "vue";

import selectRecipe from "./recipe";
import { ZCheckbox } from "../checkbox";
import IconArrow from "../icon/arrow";
import useId from "@/src/hooks/useId";
import { css, cx } from "@/styled-system/css";

export default defineComponent({
  name: "ZSelect",
  props: {
    modelValue: {
      type: String,
    },
    options: {
      type: Array as PropType<{ label: string; value: string }[]>,
      required: true,
    },
    color: {
      type: String,
      default: css({ colorPalette: "blue" }),
    },
    placeholder: {
      type: String,
      default: "Select option",
    },
    multiple: {
      type: Boolean,
      default: false,
    },
    selectOnBlur: {
      type: Boolean,
      default: false,
    },
    closeOnSelect: {
      type: Boolean,
      default: true,
    },
  },
  emits: ["update:modelValue"],
  setup(props, { emit }) {
    const [state, send] = useMachine(
      select.machine({
        id: useId("select"),
        collection: select.collection({
          items: toRaw(props.options),
        }),
        multiple: props.multiple,
        selectOnBlur: props.selectOnBlur,
        closeOnSelect: props.closeOnSelect,
        onValueChange(details) {
          emit("update:modelValue", details.value);
        },
      }),
    );

    const apiRef = computed(() =>
      select.connect(state.value, send, normalizeProps),
    );

    const classesRef = computed(() =>
      selectRecipe({ isOpen: apiRef.value.isOpen, multiple: props.multiple }),
    );

    watch(
      () => props.modelValue,
      () => {
        if (props.modelValue) {
          apiRef.value.selectValue(props.modelValue);
        }
      },
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
              <span>{api.valueAsString || props.placeholder}</span>
              <IconArrow
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
                marginTop: "-12px",
              })}
              enterFromClass={css({
                opacity: 0,
                boxShadow: "0px 0px 0px 0px token(opacity.shadow)",
                marginTop: "-12px",
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
                  <ul {...api.contentProps} class={css({ outline: "none" })}>
                    {props.options.map((item) => (
                      <li
                        key={item.value}
                        {...api.getItemProps({ item })}
                        class={cx(
                          props.color,
                          classes.item,
                          css({
                            ...(api.getItemState({ item }).isHighlighted
                              ? {
                                  background:
                                    "color-mix(in srgb, token(colors.gray.200) 40%, transparent)",
                                }
                              : {}),
                            ...(api.getItemState({ item }).isSelected
                              ? {
                                  background:
                                    "color-mix(in srgb, token(colors.colorPalette.100) 40%, transparent)",
                                  color: "colorPalette.600",
                                }
                              : { color: "token(colors.text)" }),
                          }),
                        )}
                      >
                        {props.multiple ? (
                          <ZCheckbox
                            disabled={true}
                            modelValue={api.getItemState({ item }).isSelected}
                            label={item.label}
                            color={props.color}
                          />
                        ) : (
                          <span>{item.label}</span>
                        )}
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
