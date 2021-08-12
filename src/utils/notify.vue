<template>
    <div class="fixed" v-if="visible">通知</div>
</template>

<script>
export default {
    name: "notify",
    data () {
        return {
            visible: false
        }
    }
}
</script>

<style scoped>
.fixed {
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    border-radius: 6px;
    margin: auto;
    width: 300px;
    height: 40px;
    line-height: 40px;
    text-align: center;
    color: #fff;
    background-color: var(--logoBarLeft);
}
</style>