<template>
  <section
    class="content"
    :class="{ 'dark-theme': isDarkTheme, 'light-theme': !isDarkTheme }">


    <header><Header /></header>

    <div class="inner_container">
      <Theme @click="changeTheme" />

      <div
        class="task_wrapper"
        :class="{ 'dark-theme': isDarkTheme, 'light-theme': !isDarkTheme }">

        <div class="form_wrapper">
          <TaskInput />
          <ul class="p-0 completed_lg">
            <p class="text-dark d-flex justify-content-end">
              <span
                :class="{
                  'dark-theme': isDarkTheme,
                  'light-theme  ': !isDarkTheme,
                }"
                ><b>Completed Task: </b
                ><i class="text-success fs-3">{{
                  taskStore.totalCompleted
                }}</i></span
              >
            </p>

            <div class="no_todos" v-if="noCompletedTodos">
              No Completed Task's Yet
            </div>

            <li v-for="task in taskStore.tasks">
              <div v-if="task.completed === true" class="">
                <div class="">
                  <CompletedTask :task="task" />
                </div>
              </div>
            </li>
          </ul>
        </div>

        <div class="task_list">
          <p class="text-dark d-flex justify-content-end">
            <span
              :class="{
                'dark-theme': isDarkTheme,
                'light-theme': !isDarkTheme,
              }">
              <b>Total Tasks: </b
              ><i class="text-danger fs-3">{{
                taskStore.totalNotCompleted
              }}</i></span
            >
          </p>
          <ul class="p-0">
            <div class="no_todos" v-if="noIncompleteTodos">No Task's Yet</div>
            <li v-for="task in taskStore.tasks">
              <div v-if="task.completed === false" class="">
                <div class="">
                  <TaskList :task="task" />
                </div>
              </div>
            </li>
          </ul>
          <ul class="p-0 completed_sm">
            <p class="text-dark d-flex justify-content-end">
              <span
                :class="{
                  'dark-theme': isDarkTheme,
                  'light-theme  ': !isDarkTheme,
                }"
                ><b>Completed Tasks: </b
                ><i class="text-success fs-3">{{
                  taskStore.totalCompleted
                }}</i></span
              >
            </p>
            <div class="no_todos" v-if="noCompletedTodos">
              No Completed Task's Yet
            </div>
            <li v-for="task in taskStore.tasks">
              <div v-if="task.completed === true" class="">
                <div class="">
                  <CompletedTask :task="task" />
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>

    
    <footer><Footer /></footer>
  </section>
</template>

<script setup lang="ts">
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import Theme from "@/components/Theme.vue";
import TaskList from "@/components/TaskList.vue";
import TaskInput from "@/components/TaskInput.vue";
import CompletedTask from "@/components/CompletedTask.vue";
import { useTaskStore } from "@/stores/TaskStore";
import { ref, watch, computed } from "vue";

const taskStore = useTaskStore();

// const props = defineProps(["task"]);

const theme = ref<string>(localStorage.getItem("theme") || "light");

const isDarkTheme = ref<boolean>(theme.value === "dark");

// Toggle light and dark theme
const changeTheme = (): void => {
  theme.value = theme.value === "dark" ? "light" : "dark";
  localStorage.setItem("theme", theme.value);
};

const noCompletedTodos = computed(() => {
  return taskStore.tasks.filter((task) => task.completed).length === 0;
});

const noIncompleteTodos = computed(() => {
  return (
    taskStore.tasks.length === 0 ||
    taskStore.tasks.every((task) => task.completed)
  );
});

// Implement theme toggle in real time
watch(theme, (newTheme: string) => {
  isDarkTheme.value = newTheme === "dark";
});
</script>

<style lang="scss" scoped>
// Page align start
.content {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.inner_container {
  height: calc(100vh - 120px);
}
.task_wrapper {
  height: 100%;
  padding: 50px;
  width: 100%;
  display: flex;
  justify-content: space-between;
}
.form_wrapper {
  width: 35%;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.task_list {
  width: 55%;
}

.no_todos {
  width: 100%;
  text-align: center;
  font-size: 30px;
  font-weight: 600;
  font-style: italic;
}
.completed_lg {
  display: block;
}
.completed_sm {
  display: none;
}

// Page align end

// Theme start
.light-theme {
  background-color: #f4f4fc;
  color: #000;
}

.dark-theme {
  background-color: #090907;
  color: #abd5a8;
}

// Theme end

ul {
  li {
    list-style: none;
  }
}

.content {
  transition: color 0.5s ease, background-color 0.5s ease;
}

//  Media Query for Ipads
@media screen and (max-width: 700px) {
  .task_wrapper {
    flex-direction: column;
    width: 100%;
    height: 100%;
    padding: 25px;
  }
  .inner_container {
    height: 100%;
    min-height: calc(100vh - 120px);
  }
  .completed_lg {
    display: none;
  }
  .completed_sm {
    display: block;
  }
  .form_wrapper {
    width: 100%;
  }
  .task_list {
    width: 100%;
  }
  .no_todos {
    font-size: 20px;
  }
}
</style>
