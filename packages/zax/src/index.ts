import { App as VueApp, computed, createApp } from "vue";

import App from "./App.vue";
import "./style.css";
import * as components from "./components";
import setupToast from "./components/toast/setupToast";

export const install = (app: VueApp) => {
  setupToast(app);
  Object.values(components).forEach((component) => {
    app.component(component.name, component);
  });
};

export * from "./components";

export default { install };
const app = createApp(App);
setupToast(app);
app.mount("#app");
