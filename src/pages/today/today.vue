<template>
     <list-panel 
            headerTitle="我的一天" 
            :headerSubTitle="todayDate"
        >
    </list-panel>
</template>

<script>
import listPanel from "@/component/list-panel/list-panel.vue"

export default {
    name: "my-today",
    components: {
        listPanel
    },
    computed: {
        todayDate () {
            const weekData = ['一', '二', '三', '四', '五', '六', '日']
            const date = new Date();
            const month = date.getMonth();
            const day = date.getDate();
            const weekDay = date.getDay();

            return `${month}月${day}日，星期${weekData[weekDay - 1]}`
        }
    }
}
</script>