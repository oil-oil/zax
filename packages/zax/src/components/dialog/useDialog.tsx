import { createApp, onMounted, onUnmounted, ref } from "vue";

import { ZDialog, ZDialogProps } from ".";

const useDialog = (props: ZDialogProps) => {
  const isOpen = ref(false);
  const app = createApp(() => <ZDialog {...props} v-model={isOpen.value} />);

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
