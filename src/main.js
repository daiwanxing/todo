import Vue from "vue";
import App from "@/App.vue";
import VueRouter from "vue-router";
import router from "@/router/index";
import "normalize.css";
import "./utils/fontAwesomeIcon";
import "animate.css";
import "@/theme/skin-theme.scss";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

Vue.component("FontAwesomeIcon", FontAwesomeIcon);
Vue.use(VueRouter);

const options = {
    el: "#app",
    router,
    render: h => h(App)
};

const todoApp = new Vue(options);