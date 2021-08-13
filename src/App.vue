<template>
    <main>
        <transition enter-active-class="animate__fadeIn" leave-active-class="animate__fadeOut">
            <router-view class="animate__animated"></router-view>
        </transition>
    </main>
</template>

<script>

export default {
    name: "App"
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