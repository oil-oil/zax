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
  onMounted,
} from "vue";

import dialogRecipe, { DialogVariants } from "./recipe";
import { ZButton } from "../button";
import IconClose from "../icon/close";
import useId from "@/src/hooks/useId";
import { css } from "@/styled-system/css";

const ZDialog = defineComponent({
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
    blur: {
      type: Boolean,
      default: true,
    },
    loading: {
      type: Boolean,
      default: false,
    },
    preventScroll: {
      type: Boolean as PropType<dialog.Context["preventScroll"]>,
      default: false,
    },
    scrollBehavior: {
      type: String as PropType<"inside" | "outside">,
      default: "inside",
    },
    closeOnInteractOutside: {
      type: Boolean as PropType<dialog.Context["closeOnEscapeKeyDown"]>,
      default: true,
    },
    closeOnEscapeKeyDown: {
      type: Boolean as PropType<dialog.Context["closeOnEscapeKeyDown"]>,
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
  emits: ["update:modelValue", "open", "close", "confirm"],
  setup(props, { slots, emit }) {
    const [state, send] = useMachine(
      dialog.machine({
        id: useId("dialog"),
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
        scrollBehavior: props.scrollBehavior,
      }),
    );

    watch(
      () => props.modelValue,
      () => {
        apiRef.value[props.modelValue ? "open" : "close"]();
      },
    );

    onMounted(() => {
      apiRef.value[props.modelValue ? "open" : "close"]();
    });

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
                <div {...api.positionerProps} class={classes.positioner}>
                  <div {...api.contentProps} class={classes.content}>
                    {props.showClose && (
                      <ZButton
                        {...api.closeTriggerProps}
                        icon
                        variant="outline"
                        shape={props.square ? "square" : undefined}
                        customCSS={
                          dialogRecipe.raw().close as SystemStyleObject
                        }
                      >
                        <IconClose />
                      </ZButton>
                    )}
                    <header {...api.titleProps} class={classes.title}>
                      {slots.title ? slots.title() : props.title}
                    </header>
                    <div {...api.descriptionProps} class={classes.description}>
                      {slots.default ? slots.default() : props.content}
                    </div>

                    {slots.footer
                      ? slots.footer()
                      : props.showFooter && (
                          <footer class={classes.footer}>
                            <ZButton
                              variant="outline"
                              onClick={apiRef.value.close}
                              shape={props.square ? "square" : undefined}
                            >
                              {props.cancelText}
                            </ZButton>
                            <ZButton
                              variant="primary"
                              shape={props.square ? "square" : undefined}
                              onClick={() => emit("confirm")}
                              loading={props.loading}
                            >
                              {props.confirmText}
                            </ZButton>
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

export default ZDialog;

export type ZDialogProps = InstanceType<typeof ZDialog>["$props"];
