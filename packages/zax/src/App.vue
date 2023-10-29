<template>
  <div style="width: 120px">
    <ZSelect
      :color="css({ colorPalette: 'red' })"
      :options="[
        { label: 'Nigeria', value: 'NG' },
        { label: 'Japan', value: 'JP' },
      ]"
    ></ZSelect>
  </div>
</template>

<script setup lang="ts">
import { ZSelect } from "./components";
import { css } from "@/styled-system/css";
</script>
