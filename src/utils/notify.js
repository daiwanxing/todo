import Vue  from "vue";
import notify from "./notify.vue";

let notifyVm = Vue.extend(notify);

export default function () {
    const _notify = new notifyVm({});
    _notify.$mount();
    _notify.visible = true;
    setTimeout(() => {
        _notify.visible = false;
    }, 3000);
    document.body.appendChild(_notify.$el);
}