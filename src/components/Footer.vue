<template>
  <footer class="wrapper">
    {{ currentYear }} &copy; 
    <p class="text-decoration-none">Abdul-Azeez</p>
  </footer>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const currentYear = ref(new Date().getFullYear());
</script>

<style>
  .wrapper{
    width: 100%;
    height: 50px;
    display: flex;
    gap: 5px;
    align-items: center;
    justify-content: center;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  }
  .wrapper p{
    margin: 0
  }
</style>
