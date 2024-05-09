<template>
  <div class="welcome">
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR94EFn0fj4SYbqZNfDj0rM49EDLYMuUpnZC4ez3FBiPg&s" alt="">
    <h1>Welcome to TeachMateAI Task Management System</h1>
    <input class="name_input" type='text' placeholder='Enter Name' v-model="newUser" />
    <router-link to="/dashboard"><button class="letsgo_btn" @click="welcome">Let's Go</button></router-link>
    
  </div>
</template>

<script setup lang="ts">
  import {ref} from 'vue';
  import { toast } from "vue3-toastify";
import "vue3-toastify/dist/index.css";

  const newUser = ref<string>("");
  
  const welcome = () => {
    localStorage.setItem('user', JSON.stringify(newUser.value));
  }
</script>

<style>
.welcome{
  width: 100%;
  height: 100vh;
  display: flex;
  gap: 20px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.welcome h1{
  text-align: center;
  margin: 0;
}
.welcome img{
  width: 150px;
  height: 150px;
}
.letsgo_btn {
  width: 100%;
  padding: 10px 20px;
  font-size: 16px;
  background-color: #2f27ce;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
.name_input{
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-bottom: 10px;
  width: 200ox;
}
@media screen and (max-width:700px) {
  .welcome{
    justify-content: start;
  }
  .welcome h1{
    font-size: 25px;
  }
}
</style>