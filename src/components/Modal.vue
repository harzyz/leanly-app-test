<template>
  <div v-if="isOpen" class="modal-wrapper" @click="$emit('close')">
    <div class="wrap" @click.stop>
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useTaskStore } from "@/stores/TaskStore";
import { ref } from "vue";
import { defineProps, defineEmits } from 'vue';

// const isOpen = ref(false);
const taskStore = useTaskStore();


const props = defineProps<{
  isOpen: boolean;
  // onClose: () => void;
}>(); 
// const { emit } = defineEmits<(['close']);
// const onClose = () => {
//   $emit('close');
// }
// const onClose  = defineEmits(['close']);
</script>

<style scoped>
.modal-wrapper {
  position: fixed;
  overflow: hidden;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}
.wrap {
  background-color: #FFF;
  border-radius: 8px;
  padding: 10px;
}
.modal::-webkit-scrollbar {
  display: none;
}
@media screen and (max-width: 700px) {
  .modal {
    padding: 0;
    width: 80%;
    border-radius: 8px;
  }
}
</style>
