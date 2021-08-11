<template>
</template>

<script>
export default {
    name: "awe-icon",
    props: {
        size: {
            type: Number | String,
            default: "1em",
            validator (val) {
            }
        },
        color: {
            type: String
        },
        type: {

        }
    }
}
</script>