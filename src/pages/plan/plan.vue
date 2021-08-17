<script>
import listPanel from "@/component/list-panel/list-panel.vue";

export default {
    name: "plan",
    render () {
        return (
            <listPanel header-title='计划' icon='calendar-alt'>
                {
                       () => {
                           // this.scopedSlots.default 可以拿到默认插槽的内容，如果是一个render函数则执行该函数
                           return <h1>Hello plan.vue</h1>;
                       }
                }
            </listPanel>
        );
    }
};
</script>

<style scoped>
.white {
    color:white;
}
</style>