<script setup lang="ts">
import Button, { ButtonProps } from "./components/button";
import "boxicons/css/boxicons.min.css";
import { css } from "@/styled-system/css";

const sizes = ["xs", "sm", "md", "lg", "xl"] as ButtonProps["size"][];
const colors = [
  css({ colorPalette: "rose" }),
  css({ colorPalette: "orange" }),
  css({ colorPalette: "yellow" }),
  css({ colorPalette: "green" }),
  css({ colorPalette: "teal" }),
];

const types = [
  "text",
  "flat",
  "outline",
  "primary",
  "pressable",
] as ButtonProps["type"][];
</script>

<template>
  <div>
    <div :style="{ display: 'flex', gap: '5px', padding: '10px' }">
      <Button v-for="type in types" :key="type" :type="type" size="lg"
        >oil-oil</Button
      >
    </div>

    <div :style="{ display: 'flex', gap: '5px', padding: '10px' }">
      <Button
        v-for="color in colors"
        :key="color"
        type="primary"
        size="lg"
        :color="color"
        icon
        loading
        ><i class="bx bxs-balloon"></i
      ></Button>
    </div>

    <div :style="{ display: 'flex', gap: '5px', padding: '10px' }">
      <Button
        v-for="size in sizes"
        :key="size"
        type="pressable"
        :size="size"
        loading
        >oil-oil</Button
      >
    </div>
  </div>
</template>
