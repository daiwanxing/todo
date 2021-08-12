import VueRouter from "vue-router";


export default new VueRouter({
    base: "/",
    mode: "hash",
    routes: [
        {
            name: "root",
            path: "/",
            component: () => import('@/pages/index.vue')
        },
        {
            name: "entry",
            path: "/auth"
        }
    ]
});