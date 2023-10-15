import { createApp, onMounted, onUnmounted, ref } from "vue";

import { ZDialog, ZDialogProps } from ".";

const useDialog = (
  props?: Omit<ZDialogProps, "modelValue">,
  slots?: InstanceType<typeof ZDialog>["$slots"],
) => {
  const isOpen = ref(false);
  const app = createApp(() => (
    <ZDialog {...(props || {})} v-model={isOpen.value} v-slots={slots || {}} />
  ));

  let DialogDom: HTMLDivElement;

  onMounted(() => {
    DialogDom = document.createElement("div");
    app.mount(DialogDom);
    document.body.appendChild(DialogDom);
  });

  onUnmounted(() => {
    app.unmount();
    document.body.removeChild(DialogDom);
  });

  const open = () => {
    isOpen.value = true;
  };

  const close = () => {
    isOpen.value = false;
  };

  return { open, close };
};

export default useDialog;
