<template>
  <div
    :style="{
      width: '100vw',
      height: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '10px',
    }"
  >
    <ZAvatar name="LZH" src="https://i.pravatar.cc/44?u=1" :loading="loading" />
    <ZAvatar
      name="LZH"
      src="https://i.pravatar.cc/44?u=2"
      :loading="loading"
      loadingType="corner"
    />
    <ZAvatar
      name="LZH"
      src="https://i.pravatar.cc/44?u=3"
      :loading="loading"
      loadingType="point"
    />
    <ZAvatar
      name="LZH"
      src="https://i.pravatar.cc/44?u=4"
      :loading="loading"
      loadingType="square"
    />
    <!-- <ZButton @click="loading = !loading" :loading="loading">loading</ZButton> -->
    <ZButton @click="loading = !loading">loading</ZButton>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

import { ZAvatar } from "./components/avatar";
import { ZButton } from "./components/button";

const loading = ref(false);
</script>
