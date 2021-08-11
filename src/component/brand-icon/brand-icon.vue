<template>
    <div class="brand-icon-box">
        <div class="brand-icon">
            <div class="loading-box">
                <font-awesome-icon icon="spinner" class="icon-color" spin />
            </div>
        </div>
    </div>
</template>


<style scoped lang="scss">

.brand-icon-box {
    position: relative;
    width: 100%;
    height: 100%;
}


.brand-icon {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto;
    width: 160px;
    height: 160px;

    .loading-box {
        position: absolute;
        left: 0;
        right: 0;
        text-align: center;
        font-size: 26px;
        bottom: 0;
        transform: translateY(100%);
        color: var(--logoBarLeft);
    }

    &::before {
        content: "";
        display: block;
        height: 34px;
        width: 40%;
        background-color: var(--logoBarLeft);
        border-radius: 6px;
        transform-origin: center;
        transform: rotate(45deg) translate(71%, 120%);
        z-index: 2;
    }

    &::after {
        content: "";
        display: block;
        height: 34px;
        width: 80%;
        background-image: var(--logoBarBottom);
        border-radius: 6px;
        transform: rotate(135deg) translate(-5%, -110%);
    }
}
</style>