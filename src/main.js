import Vue from "vue";
import App from "@/App.vue";
import VueRouter from "vue-router";
import router from "@/router/index";
import "normalize.css";
import "./utils/fontAwesomeIcon";
import "animate.css";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome"
import notify from "@/utils/notify.js";

Vue.component('font-awesome-icon', FontAwesomeIcon);
Vue.use(VueRouter);


Vue.prototype.$notify = notify

const options = {
    el: "#app",
    router,
    render: h => h(App)
};

const todoApp = new Vue(options);