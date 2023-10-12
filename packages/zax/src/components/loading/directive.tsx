import { App, Directive, createApp, ref } from "vue";

import ZLoading, { ZLoadingProps } from "./loading";

let app: App<Element>;
const LoadingDom = document.createElement("div");

const ZLoadingDirective: Directive<HTMLElement> = {
  mounted(el, binding) {
    // eslint-disable-next-line no-param-reassign
    el.style.position = "relative";
    app = createApp(() => (
      <ZLoading type={binding.arg as ZLoadingProps["type"]} />
    ));
    el.appendChild(LoadingDom);
    if (binding.value) {
      app.mount(LoadingDom);
    }
  },
  updated(_, binding) {
    if (binding.value !== binding.oldValue) {
      if (binding.value) {
        app = createApp(() => (
          <ZLoading type={binding.arg as ZLoadingProps["type"]} />
        ));
        app.mount(LoadingDom);
      } else {
        app.unmount();
      }
    }
  },
  unmounted(el) {
    el.appendChild(LoadingDom);
    app.unmount();
  },
};

export default ZLoadingDirective;
