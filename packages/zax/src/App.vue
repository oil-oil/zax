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
    <ZAvatar
      name="LZH"
      src="https://i.pravatar.cc/44"
      :loading="loading"
    ></ZAvatar>
    <ZButton :loading="loading">loading</ZButton>
    <ZButton @click="loading = !loading">loading</ZButton>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

import { ZAvatar } from "./components/avatar";
import { ZButton } from "./components/button";

const loading = ref(false);
</script>
