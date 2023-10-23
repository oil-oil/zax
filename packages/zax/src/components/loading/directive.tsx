import { Directive, DirectiveBinding, render } from "vue";

import ZLoading, { ZLoadingProps } from "./ZLoading";

const domId = "LOADING_CONTAINER";

const mountLoading = (el: HTMLElement, binding: DirectiveBinding) => {
  const loadingDom = document.createElement("div");
  loadingDom.id = domId;
  loadingDom.style.borderRadius = "inherit";
  render(<ZLoading type={binding.arg as ZLoadingProps["type"]} />, loadingDom);
  el.appendChild(loadingDom);
};

const unmountLoading = (el: HTMLElement) => {
  const dom = el.querySelector(`#${domId}`);
  if (dom) {
    el.removeChild(dom);
  }
};

const ZLoadingDirective: Directive<HTMLElement, boolean> = {
  mounted(el, binding) {
    // eslint-disable-next-line no-param-reassign
    el.style.position = "relative";
    if (binding.value !== false) {
      mountLoading(el, binding);
    }
  },
  updated(el, binding) {
    if (binding.value !== binding.oldValue) {
      if (binding.value !== false) {
        mountLoading(el, binding);
      } else {
        unmountLoading(el);
      }
    }
  },
  unmounted(el) {
    unmountLoading(el);
  },
};

export default ZLoadingDirective;
