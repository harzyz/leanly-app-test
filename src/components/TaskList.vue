<template>
  <div class="task_item">
    <h5>
      {{ task.title }}
    </h5>
    <br />

    <div class="actions">
      <font-awesome-icon
        icon="trash-alt"
        class="text-danger"
        size="lg"
        @click="openDeleteModal" />

      <font-awesome-icon
        icon="check"
        style="color: green"
        size="lg"
        @click="taskStore.toggleFav(task.id)" />

      <font-awesome-icon
        icon="edit"
        style="color: blue"
        size="lg"
        @click="openEditModal" />

      <Modal :isOpen="editModal" @close="closeEditModal">
        <div class="modal_wrap">
          <input type="text" v-model="task.title" />
          <button @click="editTask(task)" class="btn btn-success">
            Save Task
          </button>
        </div>
      </Modal>
      <Modal :isOpen="deleteModal" @close="closeDeleteModal">
        <div class="modal_wrap">
          <h4 class="text-black">Delete Task?</h4>
          <div class="modal_actions">
            <button @click="deleteTask(task.id)" class="btn btn-danger">
              Yes
            </button>
            <button @click="closeDeleteModal" class="btn btn-dark">Cancel</button>
          </div>
        </div>
      </Modal>
    </div>
  </div>
</template>

<script setup lang="ts">
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

let editModal: Ref<boolean> = ref(false);
let deleteModal: Ref<boolean> = ref(false);

  

const openDeleteModal = (): void => {
  deleteModal.value = true;
};

const closeDeleteModal = (): void => {
  deleteModal.value = false;
};

const deleteTask = (id: number): void => {
  taskStore.deleteTask(id);
  deleteModal.value = false;
};

const openEditModal = (): void => {
  editModal.value = true;
};
const closeEditModal = (): void => {
  editModal.value = false;
};
const editTask = (task: Task): void => {
  taskStore.editTask(task);
  editModal.value = false;
};
</script>

<style lang="scss" scoped>
svg {
  cursor: pointer;
}

.actions {
  display: flex;
  gap: 10px;
}
.main-task {
  cursor: pointer;
}
.modal_actions {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 30px;
}
.delete_icon {
  color: red;
}

.text-danger {
  opacity: 1 !important;
  transition: opacity 1s;
}

.modal_wrap {
  padding: 30px;
  display: flex;
  flex-direction: column;
  width: 100%;
  text-align: center;
  gap: 20px;
}

.task_item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 15px;
  border-radius: 10px;
  border: 1px solid #ccc;
  width: 100%;
  background-color: #FFF;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
}
</style>
