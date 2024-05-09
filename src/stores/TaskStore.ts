import { defineStore } from "pinia";
import { toast } from "vue3-toastify";
import "vue3-toastify/dist/index.css";

interface Task {
  id: number;
  title: string;
  completed: boolean;
}

interface TaskStoreState {
  tasks: Task[];
  showSuccessMessage: boolean;
  showCompletedMessage: boolean;
  showDeletedMessage: boolean;
  isOpen: boolean;
}

export const useTaskStore = defineStore("taskStore", {
  state: (): TaskStoreState => ({
    tasks: [],
    showSuccessMessage: false,
    showCompletedMessage: false,
    showDeletedMessage: false,
    isOpen: false,
  }),

  getters: {
    totalTask: (state): number => {
      return state.tasks.length;
    },

    totalCompleted: (state): number => {
      return state.tasks.filter((task) => task.completed).length;
    },
    totalNotCompleted: (state): number => {
      return state.tasks.filter((task) => !task.completed).length;
    },
  },

  actions: {
    addTask(task: Task): void {
      this.tasks.push(task);
      this.showSuccessMessage = true;
      toast.success("Task Added");
    },

    deleteTask(id: number): void {
      this.tasks = this.tasks.filter((t) => t.id !== id);
      this.showDeletedMessage = true;
      toast.info("Task Deleted");
    },

    editTask(editedTask: Task): void {
      this.tasks = this.tasks.map((task) =>
        task.id === editedTask.id ? editedTask : task
      );
      toast.success("Task Updated");
      this.closeModal();
    },

    openModal(): void {
      this.isOpen = true;
      console.log(this.isOpen);
    },

    closeModal(): void {
      this.isOpen = false;
      console.log(this.isOpen);
    },

    toggleFav(id: number): void {
      const task = this.tasks.find((t) => t.id === id);
      if (task) {
        task.completed = !task.completed;

        if (task.completed) {
          toast.success('Task Completed')
        }else {
          toast.warning('Task has been marked Uncompleted')
        }
      }
    },
  },
});
