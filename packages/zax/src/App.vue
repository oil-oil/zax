<template>
  <div
    style="
      width: 100vw;
      height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
    "
  >
    <div style="width: 120px">
      <ZCheckbox label="label1" :color="css({ colorPalette: 'red' })" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ZCheckbox } from "./components/checkbox";
import { css } from "@/styled-system/css";
</script>
