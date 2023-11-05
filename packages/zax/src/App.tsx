import * as toast from "@zag-js/toast";
import { useMachine, normalizeProps } from "@zag-js/vue";
import { defineComponent, ref, computed, TransitionGroup } from "vue";

import { ZButton } from "./components/button";
import { ZToast } from "./components/toast";
import useId from "./hooks/useId";
import { css } from "@/styled-system/css";

export default defineComponent({
  setup() {
    const [state, send] = useMachine(
      toast.group.machine({
        id: useId("toast"),
        duration: 1000000,
      }),
    );
    const toastApi = computed(() =>
      toast.group.connect(state.value, send, normalizeProps),
    );

    const show = () => {
      toastApi.value.create({
        title: "Hello",
        description: "hello",
        placement: "top-end",
      });
    };

    return () => {
      const api = toastApi.value;
      return (
        <div>
          {Object.entries(toastApi.value.toastsByPlacement).map(
            ([placement, toasts], index) => (
              <div key={placement}>
                <div
                  {...toastApi.value.getGroupProps({
                    placement: placement as toast.Placement,
                  })}
                >
                  <TransitionGroup
                    tag="div"
                    key={placement}
                    {...api.getGroupProps({
                      placement: placement as toast.Placement,
                    })}
                    moveClass={css({ transition: "all 0.25s" })}
                    enterFromClass={css({
                      opacity: 0,
                      clipPath: "circle(0% at 50% 0%)",
                      overflow: "hidden",
                    })}
                    leaveToClass={css({
                      opacity: 0,
                      clipPath: "circle(0% at 50% 0%)",
                      overflow: "hidden",
                    })}
                    enterActiveClass={css({
                      transition: "all 0.25s",
                      clipPath: "circle(120% at 50% 0%)",
                      overflow: "hidden",
                    })}
                    leaveActiveClass={css({
                      transition: "all 0.25s",
                      clipPath: "circle(120% at 50% 0%)",
                      overflow: "hidden",
                    })}
                  >
                    {toasts.map((actor) => (
                      <ZToast key={actor.id} actor={actor} />
                    ))}
                  </TransitionGroup>
                </div>
              </div>
            ),
          )}

          <ZButton onClick={show}>create</ZButton>
        </div>
      );
    };
  },
});
