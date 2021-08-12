<template>
    <section class="welcome-page">
        <brand-icon></brand-icon>
    </section>
</template>


<script>
import brandIcon from "@/component/brand-icon/brand-icon.vue";

export default {
    name: "welcome",
    components: {
        brandIcon
    }
}
</script>

<style scoped lang="scss">
    .welcome-page {
        height: 100vh;
        width: 100vw;
        background-color: #fff;
    }
</style>