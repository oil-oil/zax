import { App as VueApp, createApp } from "vue";

import App from "./App.vue";
import "./style.css";
import * as components from "./components";

export const install = (app: VueApp) => {
  // Components
  Object.values(components).forEach((component) => {
    app.component(component.name, component);
  });
};

export * from "./components";

export default { install };
const app = createApp(App);
app.mount("#app");
