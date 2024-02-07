import { RouteRecordRaw, createWebHistory, createRouter } from "vue-router";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "task",
    component: () => import("@/components/TaskList.vue"),
  },
  {
    path: "/task/:id",
    name: "task-detail",
    component: () => import("@/components/TaskDetails.vue"),
  },

  {
    path: "/task/new",
    name: "task-new",
    component: () => import("@/components/TaskForm.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
