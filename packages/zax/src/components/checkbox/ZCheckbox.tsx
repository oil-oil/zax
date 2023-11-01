import * as checkbox from "@zag-js/checkbox";
import { normalizeProps, useMachine } from "@zag-js/vue";
import { defineComponent, computed, Transition, watch } from "vue";

import IconCheck from "../icon/check";
import useId from "@/src/hooks/useId";
import { css, cx } from "@/styled-system/css";

const ZCheckbox = defineComponent({
  name: "ZCheckbox",
  props: {
    color: {
      type: String,
      default: css({ colorPalette: "blue" }),
    },
    modelValue: {
      type: Boolean,
    },
    label: {
      type: String,
    },
  },
  emits: ["update:modelValue"],
  setup(props, { emit }) {
    const [state, send] = useMachine(
      checkbox.machine({
        id: useId("checkbox"),
        onCheckedChange(detail) {
          emit("update:modelValue", detail.checked);
        },
      }),
    );

    const apiRef = computed(() =>
      checkbox.connect(state.value, send, normalizeProps),
    );

    watch(
      () => props.modelValue,
      () => {
        apiRef.value.setChecked(props.modelValue);
      },
    );

    return () => {
      const api = apiRef.value;
      return (
        <label
          {...api.rootProps}
          class={[
            css({
              display: "flex",
              alignItems: "center",
              cursor: "pointer",
            }),
            "group",
          ]}
        >
          <div
            {...api.controlProps}
            class={css({
              width: "24px",
              height: "24px",
              borderRadius: "8px",
              border: api.isChecked
                ? "none"
                : "token(colors.gray.200) solid 2px",
              transition: "all 0.3s",
              _groupHover: {
                background: "gray.200",
              },
              marginRight: "4px",
              flexShrink: "0",
            })}
          >
            <Transition
              enterFromClass={css({
                transition: "all 0.2s",
                transform: "scale(0.5)",
                opacity: "0",
              })}
              enterToClass={css({
                transition: "all 0.2s",
                transform: "scale(1)",
                opacity: "1",
              })}
              leaveToClass={css({
                transition: "all 0.2s",
                transform: "scale(0.5)",
                opacity: "0",
              })}
            >
              {api.isChecked && (
                <div
                  class={cx(
                    props.color,
                    css({
                      width: "full",
                      height: "full",
                      background: "colorPalette.600",
                      borderRadius: "inherit",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      transition: "all 0.3s",
                      _groupHover: {
                        boxShadow:
                          "0px 3px 15px 0px color-mix(in srgb, token(colors.colorPalette.600) 40%, transparent)",
                      },
                    }),
                  )}
                >
                  <IconCheck
                    customCSS={css({
                      width: "18px",
                      height: "18px",
                    })}
                  ></IconCheck>
                </div>
              )}
            </Transition>
          </div>
          <span {...api.labelProps}>{props.label} </span>

          <input {...api.hiddenInputProps} />
        </label>
      );
    };
  },
});

export default ZCheckbox;
export type ZCheckboxProps = InstanceType<typeof ZCheckbox>["$props"];
