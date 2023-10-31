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
      <ZSelect
        :options="[
          { label: 'Vue', value: 'Vue' },
          { label: 'React', value: 'React' },
          { label: 'Solid', value: 'Solid' },
        ]"
        multiple
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ZSelect } from "./components";
</script>
