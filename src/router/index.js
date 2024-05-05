import { createRouter,createWebHistory } from "vue-router";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: "/register", name: "register", component: () => import("../components/registerPage.vue"),meta:{include:true} },
        { path: "/test", name: "test", component: () => import("../components/testForm.vue"),meta:{include:true}  },
        { path: "/one", name: "login", component: () => import("../components/formOne.vue") },
        { path: "/nav", name: "nav", component: () => import("../components/navBar.vue") },
        { path: "/employees/:id", name: "employees", component: () => import("../components/EmployeeTestMixin.vue"),meta: {must_authenticated:true} },
        { path: "/search", name: "search", component: () => import("../components/routeSearch.vue") },
        { path: "/searchEmployee", name: "searchEmployee", component: () => import("../components/searchEmployee.vue") },
        { path: "/:pathMatch(.*)*", name: "no_found", component: () => import("../components/notFoundPage.vue") },
        { path: "/profile", name: "profile", component: () => import("../components/provideInject.vue") },

    ]
})
router.beforeEach((to,from,next)=>{
    if(to.meta.must_authenticated == true) {
        if(localStorage.getItem("loggedIn")){
            next()
        }else{
            next({name:"login"})
        }
    }
    console.log("from => ",from)
    console.log("to => ",to)
    next()

})
export default router;