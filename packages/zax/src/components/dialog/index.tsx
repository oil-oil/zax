import { SystemStyleObject } from "@pandacss/dev";
import * as dialog from "@zag-js/dialog";
import { normalizeProps, useMachine } from "@zag-js/vue";
import { computed, defineComponent, Teleport, Transition } from "vue";

import dialogRecipe from "./recipe";
import Button from "../button";
import Close from "../icon/close";
import { css } from "@/styled-system/css";

export default defineComponent({
  name: "ZDialog",
  setup() {
    const classes = dialogRecipe();

    const [state, send] = useMachine(dialog.machine({ id: "1" }));

    const apiRef = computed(() =>
      dialog.connect(state.value, send, normalizeProps),
    );

    return () => {
      const api = apiRef.value;
      return (
        <>
          <button {...api.triggerProps}>Open Dialog</button>
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
                      <Button
                        {...api.closeTriggerProps}
                        icon
                        variant="outline"
                        css={dialogRecipe.raw().close as SystemStyleObject}
                      >
                        <Close />
                      </Button>
                      <header {...api.titleProps} class={classes.title}>
                        Edit profile
                      </header>
                      <p {...api.descriptionProps}>
                        Make changes to your profile here. Click save when you
                        are done.
                      </p>

                      <footer class={classes.footer}>
                        <Button variant="primary">Save Changes</Button>
                      </footer>
                    </div>
                  </div>
                </div>
              )}
            </Transition>
          </Teleport>
        </>
      );
    };
  },
});
