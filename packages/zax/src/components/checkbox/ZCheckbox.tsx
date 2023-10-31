import * as checkbox from "@zag-js/checkbox";
import { normalizeProps, useMachine } from "@zag-js/vue";
import { defineComponent, computed, Transition, watch, onMounted } from "vue";

import checkboxRecipe from "./recipe";
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
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  emits: ["update:modelValue"],
  setup(props, { emit }) {
    const [state, send] = useMachine(
      checkbox.machine({
        id: useId("checkbox"),
        disabled: props.disabled,
        checked: props.modelValue,
        onCheckedChange(detail) {
          emit("update:modelValue", detail.checked);
        },
      }),
    );

    const apiRef = computed(() =>
      checkbox.connect(state.value, send, normalizeProps),
    );

    const classesRef = computed(() =>
      checkboxRecipe({ isChecked: apiRef.value.isChecked }),
    );
    watch(
      () => props.modelValue,
      () => {
        apiRef.value.setChecked(props.modelValue);
      },
    );

    return () => {
      const api = apiRef.value;
      const classes = classesRef.value;
      return (
        <label {...api.rootProps} class={[classes.root, "group"]}>
          <div {...api.controlProps} class={classes.control}>
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
                <div class={cx(props.color, classes.selectedBlock)}>
                  <IconCheck
                    customCSS={css({
                      width: "18px",
                      height: "18px",
                    })}
                  />
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
