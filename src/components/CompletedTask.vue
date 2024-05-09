<template>
  <div class="task_item">
    <!-- <h5 class="d-inline ps-2 main-task" @click="taskStore.toggleFav(task.id)">
      {{ task.title }}
    </h5> -->
    <span :class="{'doned': task.completed, 'title': !task.completed}">
    {{ task.title }}
  </span>
    <br />

    <div class="actions">
      <font-awesome-icon
        icon="arrow-rotate-left"
        class="text-info"
        size="lg"
        @click="taskStore.toggleFav(task.id)" />

      <font-awesome-icon
        icon="trash-alt"
        class="text-danger"
        size="lg"
        @click="openDeleteModal" />
      
      <Modal :isOpen="deleteModal" @close="closeDeleteModal">
        <div class="modal_wrap">
          <h4>Are you sure you want to delete Task?</h4>
          <div class="modal_actions">
            <button @click="deleteTask(task.id)" class='btn btn-danger'>Yes</button>
            <button @click="closeDeleteModal" class='btn btn-info'>Cancel</button>
          </div>
        </div>
      </Modal>

    </div>
  </div>
</template>

<script setup lang='ts'>
import { useTaskStore } from "@/stores/TaskStore";
import { defineProps, ref, type Ref } from "vue";
import Modal from "@/components/Modal.vue";

interface Task {
  id: number;
  title: string;
  completed: boolean;
}

const props = defineProps<{
  task: Task;
}>();

const taskStore = useTaskStore();

let deleteModal: Ref<boolean> = ref(false);

  const openDeleteModal = (): void => {
  deleteModal.value = true;
  console.log(deleteModal);
};

const closeDeleteModal = (): void => {
  deleteModal.value = false;
  console.log(deleteModal);
};

const deleteTask = (id: number): void => {
  taskStore.deleteTask(id);
  deleteModal.value = false;
  console.log(deleteModal);
};
</script>

<style>
  .task_item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  border-radius: 10px;
  border: 1px solid #ccc;
  width: 100%;
  background-color: #FFF;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
}
.title {
  font-weight: 500;
}
.doned {
  text-decoration: line-through;
  font-weight: 500;
}

.actions {
  display: flex;
  gap: 10px;
}

.modal_wrap {
  padding: 30px;
  display: flex;
  flex-direction: column;
  width: 100%;
  text-align: center;
  gap: 20px;
}

.modal_actions {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 30px;
}
</style>