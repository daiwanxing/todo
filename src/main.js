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

// require.context 会构建一个上下文目录，一般用于组件批量注册，如果目录里的所有文件（如果设置了正则则只匹配正则的文件， 第二个参数true）
// 表示的是深度递归子文件夹