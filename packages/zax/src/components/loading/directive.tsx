import { Directive, DirectiveBinding, render } from "vue";

import ZLoading, { ZLoadingProps } from "./loading";

const domId = "LOADING_CONTAINER";

const mountLoading = (el: HTMLElement, binding: DirectiveBinding<any>) => {
  const size = Math.min(el.offsetWidth, el.offsetHeight);
  const loadingDom = document.createElement("div");
  loadingDom.id = domId;
  loadingDom.style.borderRadius = "inherit";
  el.appendChild(loadingDom);
  render(
    <ZLoading size={size} type={binding.arg as ZLoadingProps["type"]} />,
    loadingDom,
  );
};

const unmountLoading = (el: HTMLElement) => {
  const dom = el.querySelector(`#${domId}`);
  if (dom) {
    el.removeChild(dom);
  }
};

const ZLoadingDirective: Directive<HTMLElement> = {
  mounted(el, binding) {
    // eslint-disable-next-line no-param-reassign
    el.style.position = "relative";
    if (binding.value) {
      mountLoading(el, binding);
    }
  },
  updated(el, binding) {
    if (binding.value !== binding.oldValue) {
      if (binding.value) {
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
