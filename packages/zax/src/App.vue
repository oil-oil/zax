<template>
  <div
    :style="{
      width: '100vw',
      height: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }"
  >
    <ZButton @click="open">show dialog</ZButton>
  </div>
</template>

<script setup lang="ts">
import { reactive, h } from "vue";

import { ZButton } from "./components/button/index.ts";
import { useDialog } from "./components/dialog/index.ts";

const dialogProps = reactive({
  title: "Edit Profile",
  content: "Make changes to your profile here. Click save when you are done.",
  size: "sm" as const,
});

const { open } = useDialog(dialogProps, {
  title: h("h1", { style: { color: "red" }, innerHTML: "Hello" }),
});
</script>
