<template>
  <section class="theme" @click="changeTheme">
    <font-awesome-icon icon="fa-solid fa-cloud-sun" size="lg" v-show="theme === 'dark'" />
    <font-awesome-icon icon="fa-solid fa-cloud-moon" size="lg" v-show="theme === 'light'" />
  </section>
</template>

<script setup lang="ts">
import { ref } from "vue";

const theme = ref<string>(localStorage.getItem("theme") || "light");

const changeTheme = (): void => {
  theme.value = theme.value === "dark" ? "light" : "dark";
  localStorage.setItem("theme", theme.value);
};
</script>

<style lang="scss" scoped>
.theme {
  position: fixed;
  top: 20px;
  right: 15px;
  cursor: pointer;
}
</style>
