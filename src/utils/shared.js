import welcomePage from "@/component/welcome/welcome.vue";


export function asyncComponent (resolveCpt) {
    const asyncHandler = {
        component: resolveCpt,
        loading: welcomePage,
        delay: 10000,
        timeout: 2000
    }

    return asyncHandler
}