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
    <Button @click="isOpen = !isOpen">show dialog</Button>
    <Dialog v-model="isOpen" :showClose="true" size="lg" title="Edit Profile">
      <h4>Whats is Vuesax?</h4>
      <p>
        Vuesax (pronounced / vjusacksː /, as view sacks) is a framework of UI
        components created with Vuejs to make projects easily and with a unique
        and pleasant style, vuesax is created from scratch and designed for all
        types of developers from the frontend lover to the backend who wants to
        easily create their visual approach to the end-user We are focused on
        streamlining the work of the programmer by giving components created in
        their entirety and with independent customization and very easy to
        implement, so creativity is in our hands but we do not neglect that each
        project is different both visually and in its ecosystem Vuesax does not
        have a design line such as other component frameworks based on Material
        Design, we believe that there are already emaciated frameworks that look
        visually and in UI / UX and we don't want to be one more of the bunch,
        apart from that we love to create and design new experiences and
        surprise you with new elements or details that we can only do by being
        visually free.
      </p>

      <h4>Why Vuesax?</h4>

      <p>
        Vuesax is a relatively new framework with a refreshing design and in the
        latest trends, vuesax based on vuejs which means that we go hand in hand
        with one of the most popular javascript frameworks in the world and with
        a huge community with which you will have all the help and documentation
        to create and make your project
        <br />

        - Independent components to avoid importing unnecessary code.
        <br />
        <br />

        - Markdown documents for better sustainability.
        <br />
        <br />

        - and much more.
      </p>
    </Dialog>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

import Button from "./components/button/index.tsx";
import Dialog from "./components/dialog/index.tsx";
import "boxicons/css/boxicons.min.css";

const isOpen = ref(false);
</script>
