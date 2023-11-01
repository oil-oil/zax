import { App as VueApp, computed, createApp, inject } from "vue";

import App from "./App.vue";
import "./style.css";
import * as components from "./components";
import store from "./components/toast/toastStore";
import ZToast from "./components/toast/ZToast";

export const install = (app: VueApp) => {
  // Components
  app.mixin({
    setup() {
      const toastStoreRef = computed(() => store);
      return () => {
        const api = toastStoreRef.value;
        return (
          <>
            {Object.entries(api.toastsByPlacement).map(
              ([placement, toasts]) => (
                <div key={placement} {...api.getGroupProps({ placement })}>
                  {toasts.map((toast) => (
                    <ZToast key={toast.id} actor={toast} />
                  ))}
                </div>
              ),
            )}
          </>
        );
      };
    },
  });

  Object.values(components).forEach((component) => {
    app.component(component.name, component);
  });
};

export * from "./components";

export default { install };
const app = createApp(App);
app.mount("#app");
