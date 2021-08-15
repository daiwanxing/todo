import VueRouter from "vue-router";


export default new VueRouter({
    base: "/",
    mode: "hash",
    routes: [
        {
            name: "root",
            path: "/",
            component: () => import('@/pages/Root.vue'),
            redirect: "/today",
            children: [
                {
                    name: "today",
                    path: "/today",
                    component: () => import('@/pages/today/today.vue')
                },
                {
                    name: "priority",
                    path: "/priority",
                    component: () => import('@/pages/priority/priority.vue')
                }
            ]
        },
        {
            name: "entry",
            path: "/auth"
        }
    ]
});