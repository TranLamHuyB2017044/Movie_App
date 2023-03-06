import { createWebHistory, createRouter } from "vue-router";
import Home from "@/views/Home.vue";
import AddPost from "@/views/AddPost.vue";
import DetailPost from "@/views/DetailPost.vue";
const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/create",
    name: "create",
    component: AddPost,
  },
  {
    path: "/post/:name",
    name: "detail",
    component: DetailPost,
  },
  

];
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});
export default router;
