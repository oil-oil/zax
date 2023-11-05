import * as toast from "@zag-js/toast";
import { PropTypes, normalizeProps, useMachine } from "@zag-js/vue";
import { App as VueApp, computed } from "vue";

import ZToast from "./ZToast";

const setupToast = (app: VueApp) => {
  app.mixin({
    setup() {
      const [state, send] = useMachine(toast.group.machine({ id: "1" }));
      const toastStore = toast.group.connect(state.value, send, normalizeProps);
      app.provide("toast", toastStore);
      const toastStoreRef = computed(() => toastStore);
      return () => {
        const api = toastStoreRef.value;
        return (
          <>
            {Object.entries(api.toastsByPlacement).map(
              ([placement, toasts]) => (
                <div key={placement}>
                  {toasts.map((actor) => (
                    <ZToast key={actor.id} actor={actor} />
                  ))}
                </div>
              ),
            )}
          </>
        );
      };
    },
  });
};

export type Toast = toast.GroupApi<PropTypes>;
export default setupToast;
