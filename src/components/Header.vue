<template>
  <section class="">
    <h1 v-if="userName !== ''" class="welcome_text">Welcome <span style="color: #6aa3ff;">{{ userName }}</span></h1>
    <h1 v-if="userName === ''" class="welcome_text">Welcome <span style="color: #6aa3ff;">Anonymous User</span></h1>
  </section>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';

let userName = ref<string>(JSON.parse(localStorage.getItem('user') || 'Anonymous User')); 

</script>

<style lang="scss" scoped>
img {
  width: 50px;
  height: auto;
}

section {
  width: 100%;
  padding: 0 50px;
  // border-bottom: 1px dotted;
  height: 50px;
  display: flex;
  align-items: center
}
.welcome_text{
  font-size: 30px;
  font-weight: 500;
}
@media screen and (max-width: 700px){
  section{
    padding: 0 25px;
  }
  .welcome_text{
  font-size: 20px;
  font-weight: 500;
}
}
</style>
