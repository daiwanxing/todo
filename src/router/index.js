import VueRouter from "vue-router";


export default new VueRouter({
    base: "/",
    routes: [
        {
            name: "root",
            path: "/",
            redirect: "/app"
        },
        {
            name: "app",
            path: "/app",
            component: () => import('@/pages/Root.vue')
        },
        {
            name: "entry",
            path: "/auth"
        }
    ]
});