<template>
    <main>
        <welcome v-if="loading"></welcome>
        <router-view v-else></router-view>
    </main>
</template>

<script>
import welcome from "@/pages/welcome/welcome.vue";

export default {
    name: "App",
    data () {
        return {
            loading: true
        }
    },
    mounted () {
        setTimeout(() => {
            this.loading = false;
        }, 1000);
    },
    components: {
        welcome
    }
}
</script>


<style lang="scss">
html, body {
    height: 100%;
}

main {
    height: 100%;
}

:root {
    --logoBarLeft: #185abd;
    --logoBarBottom: linear-gradient(to left, #2a88e6, #56bdf5);
}
</style>