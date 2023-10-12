import { createApp } from "vue";

import "./style.css";
import App from "./App.vue";
import { ZLoadingDirective } from "./components/loading";

const app = createApp(App);
app.directive("loading", ZLoadingDirective);
app.mount("#app");
