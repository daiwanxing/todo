import Vue from "vue";
import App from "@/App.vue";

const options = {
    el: "#app",
    render: h => h(App)
};

const todoApp = new Vue(options);