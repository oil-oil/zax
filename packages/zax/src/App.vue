<template>
  <div>
    <div
      v-for="(toasts, placement, index) in toastApi.toastsByPlacement"
      :key="placement"
    >
      <div v-bind="toastApi.getGroupProps({ placement })">
        <ZToast v-for="toast in toasts" :key="toast.id" :actor="toast" />
      </div>
    </div>

    <button @click="show">create</button>
  </div>
</template>

<script setup lang="ts">
import * as toast from "@zag-js/toast";
import { useMachine, normalizeProps } from "@zag-js/vue";
import { computed, watch } from "vue";

import { ZToast } from "./components/toast";
import useId from "./hooks/useId";

const [state, send] = useMachine(toast.group.machine({ id: useId("toast") }));
const toastApi = computed(() =>
  toast.group.connect(state.value, send, normalizeProps),
);

const show = () => {
  toastApi.value.create({ title: "Hello", placement: "top-start" });
};
</script>
