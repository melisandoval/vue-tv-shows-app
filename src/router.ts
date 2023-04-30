import { RouteRecordRaw, createRouter, createWebHistory } from "vue-router";
import HomePage from "./views/HomePage/HomePage.vue";
import ListPage from "./views/ListPage.vue/ListPage.vue";
import DetailsPage from "./views/DetailsPage/DetailsPage.vue";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "Home Page",
    component: HomePage,
  },
  {
    path: "/list-page/:listname",
    name: "List Page",
    component: ListPage,
  },
  {
    path: "/details-page/:id",
    name: "Details Page",
    component: DetailsPage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});

export default router;
