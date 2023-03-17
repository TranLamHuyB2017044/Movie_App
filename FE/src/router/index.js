import { createWebHistory, createRouter } from "vue-router";
import Home from "@/views/Home.vue";
import AddPost from "@/views/AddPost.vue";
import DetailPost from "@/views/DetailPost.vue";
import EditPost from "@/views/EditPost.vue";
import SignIn from "@/views/SignIn.vue";
import SignUp from "@/views/SignUp.vue";
const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/AddPost",
    name: "add",
    component: AddPost,
  },
  {
    path: "/watch_:slug",
    name: "detail",
    component: DetailPost,
    props:true
  },
  {
    path: "/editPost/:slug",
    name: "edit-post",
    component: EditPost,
    
  },
  {
    path: '/Signin',
    name: "signin",
    component: SignIn,
  },
  {
    path: '/Signup',
    name: "signup",
    component: SignUp,
  },
  {
    path: "/:pathMatch(.*)*",
    name: "notfound",
    component: () => import("@/views/NotFound.vue"),
  },

  

];
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});
export default router;
