<template>
  <form @submit.prevent="handleSubmit">
    <input
      class="form_input"
      type="text"
      name="task"
      placeholder="Enter a Task"
      v-model="newTask" />
    <br />

    <button class="add_task_btn">
      <font-awesome-icon icon="plus" style="color: #fff;" size="lg" />Add Task
    </button>
  </form>
</template>

<script setup lang="ts">
import { useTaskStore } from "@/stores/TaskStore";
import { ref } from "vue";
import { toast } from "vue3-toastify";
import "vue3-toastify/dist/index.css"

const taskStore = useTaskStore();
const newTask = ref<string>("");

const handleSubmit = (): void => {
  const addedTask = newTask.value.trim();

  if (addedTask.length > 0) {
    taskStore.addTask({
      title: addedTask,
      completed: false,
      id: Math.floor(Math.random() * 10000000000),
    });
    newTask.value = "";
  } else{
    toast.warning('Please Fill Input')
  }
};
</script>

<style>
.add_task_btn {
  width: 100%;
  padding: 10px 20px;
  font-size: 16px;
  background-color: #2f27ce;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
}
.form_input{
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-bottom: 10px;
  width: 100%;
}
</style>
