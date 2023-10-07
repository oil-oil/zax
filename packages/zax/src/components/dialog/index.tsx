import { SystemStyleObject } from "@pandacss/dev";
import * as dialog from "@zag-js/dialog";
import { normalizeProps, useMachine } from "@zag-js/vue";
import {
  computed,
  defineComponent,
  Teleport,
  Transition,
  PropType,
  SlotsType,
  watch,
} from "vue";

import dialogRecipe, { DialogVariants } from "./recipe";
import Button from "../button";
import Close from "../icon/close";
import useId from "@/src/hooks/useId";
import { css } from "@/styled-system/css";

export default defineComponent({
  name: "ZDialog",
  props: {
    modelValue: {
      type: Boolean,
      default: false,
    },
    title: {
      type: String,
    },
    content: {
      type: String,
    },
    size: {
      type: String as PropType<DialogVariants["size"]>,
      default: "md",
    },
    square: {
      type: Boolean as PropType<DialogVariants["square"]>,
      default: false,
    },
    preventScroll: {
      type: Boolean as PropType<dialog.Context["preventScroll"]>,
      default: true,
    },
    closeOnInteractOutside: {
      type: Boolean as PropType<dialog.Context["closeOnEscapeKeyDown"]>,
      default: true,
    },
    closeOnEscapeKeyDown: {
      type: Boolean as PropType<dialog.Context["closeOnEscapeKeyDown"]>,
      default: true,
    },
    blur: {
      type: Boolean,
      default: true,
    },
    showClose: {
      type: Boolean,
      default: true,
    },
    showCancel: {
      type: Boolean,
      default: true,
    },
    cancelText: {
      type: String,
      default: "Cancel",
    },
    showConfirm: {
      type: Boolean,
      default: true,
    },
    confirmText: {
      type: String,
      default: "Confirm",
    },
    showFooter: {
      type: Boolean,
      default: true,
    },
  },
  slots: Object as SlotsType<{
    default?: any;
    title?: any;
    footer?: any;
  }>,
  emits: ["update:modelValue", "open", "close"],
  setup(props, { slots, emit }) {
    const { id } = useId("dialog");

    const [state, send] = useMachine(
      dialog.machine({
        id,
        preventScroll: props.preventScroll,
        closeOnEscapeKeyDown: props.closeOnEscapeKeyDown,
        closeOnInteractOutside: props.closeOnInteractOutside,
        onOpenChange({ open }) {
          emit("update:modelValue", open);
          emit(open ? "open" : "close");
        },
      }),
    );

    const apiRef = computed(() =>
      dialog.connect(state.value, send, normalizeProps),
    );

    const classesRef = computed(() =>
      dialogRecipe({
        blur: props.blur,
        size: props.size,
        square: props.square,
      }),
    );

    watch(
      () => props.modelValue,
      () => {
        apiRef.value[props.modelValue ? "open" : "close"]();
      },
    );

    return () => {
      const api = apiRef.value;
      const classes = classesRef.value;
      return (
        <Teleport to="body">
          <Transition
            leaveToClass={css({
              opacity: 0,
              "& > [data-part='container']": {
                transform: "scale(0.7)",
                boxShadow: "0px 0px 0px 0px rgba(0, 0, 0, 0.3)",
              },
            })}
            enterActiveClass={css({
              opacity: 1,
              transition: "all 0.25s ease",
              "& > [data-part='container']": {
                animation: "rebound 0.4s",
              },
            })}
            leaveActiveClass={css({
              transition: "all 0.15s ease",
              "& > [data-part='container']": {
                transition: "all 0.15s ease",
              },
            })}
          >
            {api.isOpen && (
              <div {...api.backdropProps} class={classes.backdrop}>
                <div {...api.containerProps} class={classes.container}>
                  <div {...api.contentProps} class={classes.content}>
                    {props.showClose && (
                      <Button
                        {...api.closeTriggerProps}
                        icon
                        variant="outline"
                        shape={props.square ? "square" : undefined}
                        css={dialogRecipe.raw().close as SystemStyleObject}
                      >
                        <Close />
                      </Button>
                    )}
                    <header {...api.titleProps} class={classes.title}>
                      {slots.title ? slots.title() : props.title}
                    </header>
                    <div {...api.descriptionProps}>
                      {slots.default ? slots.default() : props.content}
                    </div>

                    {slots.footer
                      ? slots.footer()
                      : props.showFooter && (
                          <footer class={classes.footer}>
                            <Button
                              variant="outline"
                              onClick={apiRef.value.close}
                              shape={props.square ? "square" : undefined}
                            >
                              {props.cancelText}
                            </Button>
                            <Button
                              variant="primary"
                              shape={props.square ? "square" : undefined}
                            >
                              {props.confirmText}
                            </Button>
                          </footer>
                        )}
                  </div>
                </div>
              </div>
            )}
          </Transition>
        </Teleport>
      );
    };
  },
});
