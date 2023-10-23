import { App } from "vue";

import "./style.css";
import * as components from "./components";

export const install = (app: App) => {
  // Components
  Object.values(components).forEach((component) => {
    app.component(component.name, component);
  });
};

export * from "./components";

export default { install };
