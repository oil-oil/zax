<template>
  <div>
    <Button @click="isOpen = !isOpen">show dialog</Button>
    <Dialog
      v-model="isOpen"
      :showClose="true"
      size="lg"
      title="Edit Profile"
      content="Make changes to your profile here. Click save when you are done."
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

import Button from "./components/button/index.tsx";
import Dialog from "./components/dialog/index.tsx";
import "boxicons/css/boxicons.min.css";

const isOpen = ref(false);
</script>
