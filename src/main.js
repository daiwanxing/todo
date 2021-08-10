import Vue from "vue";
import App from "@/App.vue";
import VueRouter from "vue-router";
import router from "@/router/index.js";
import "normalize.css";
import { library } from "@fortawesome/fontawesome-svg-core"
import { faSun, faCalendarAlt, faCheckDouble, faClock, faTasks } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome"

library.add(faSun, faCalendarAlt, faCheckDouble, faClock, faTasks);
Vue.component('font-awesome-icon', FontAwesomeIcon);
Vue.use(VueRouter);

const options = {
    el: "#app",
    router,
    render: h => h(App)
};

const todoApp = new Vue(options);