import Vue from "vue";
import VueRouter from "vue-router";
//import Home from "@/views/Home.vue";
import About from "@/views/About.vue";
import Users from "@/views/Users.vue";
import EditUser from "@/views/EditUser.vue";
import DeleteUser from "@/views/DeleteUser.vue";
import AddUser from "@/views/AddUser.vue";

const Home = () => import("@/views/Home.vue");

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history", //'hash',
  linkExactActiveClass: "active",

  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/about",
      name: "about",
      component: About
    },
    {
      path: "/users",
      name: "users",
      component: Users,
      meta: { requiresAuth: true }
    },
    {
      path: "/edit/:id",
      name: "edit",
      component: EditUser
    },
    {
      path: "/delete/:id",
      name: "delete",
      component: DeleteUser
    },
    {
      path: "/add",
      name: "add",
      component: AddUser
    }
  ]
});

const token = "2";

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // этот путь требует авторизации, проверяем залогинен ли
    // пользователь, и если нет, перенаправляем на страницу логина
    if (token != "2") {
      next({
        path: "/login",
        query: { redirect: to.fullPath }
      });
    } else {
      next();
    }
  } else {
    next(); // всегда так или иначе нужно вызвать next()!
  }
});

export default router;
