import Vue from "vue";
import App from "@/App.vue";
import VueRouter from "vue-router";
import router from "@/router/index.js";
import "normalize.css";

Vue.use(VueRouter);

const options = {
    el: "#app",
    router,
    render: h => h(App)
};

const todoApp = new Vue(options);