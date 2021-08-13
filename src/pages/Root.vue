<template>
  <section class="todo-container">
    <!-- 左侧列表 -->
    <aside>
        <div class="brand-logo">
            <div class="icon-box">
                <font-awesome-icon icon="check-circle" class="icon-color" />
            </div>
            MicroHard Todo
        </div>
        <ul class="base-menu">
            <li class="menu-item" 
                v-for="item in baseMenu"
                :key="item.id"
                :class="{active: activeIndex === item.id}"
                @click="switchHandler(item.id)"
            >
                <div class="left-icon"><font-awesome-icon :icon="item.icon" /></div>
                {{ item.name }} 
            </li>
        </ul>
        <div class="create-item-button">
            <font-awesome-icon icon="plus" class="create-item-left-icon" />
            <font-awesome-icon icon="folder-plus" class="create-item-right-icon" />
        </div>
    </aside>
    <div class="body-content">
        <router-view></router-view>
    </div>
  </section>
</template>


<script>
import { baseMenu } from "@/utils/menu";

export default {
    name: "root",
    data () {
        return {
            activeIndex: -1,
            baseMenu
        }
    },
    methods: {
        switchHandler (tog) {
            this.activeIndex = tog;
            this.$notify();
        }
    }
}
</script>


<style scoped lang="scss">
.todo-container {
  display: flex;
  height: 100%;

  aside {
    position: relative;
    height: 100%;
    width: 300px;
    background-color: #feffff;
    overflow-y: auto;
    user-select: none;

    .create-item-button {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 30px;
        height: 46px;
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        line-height: 45px;
        border-top: 1px solid #ededed;
        color: #737373;
        cursor: pointer;

        &::after {
            content: "新建列表";
            position: absolute;
            left: 60px;
            margin: auto;
        }
    }
    
    .icon-box {
        padding-right: 20px;
    }

    .icon-color {
        color: var(--logoBarLeft);
    }

    .base-menu {
        margin: 0;
        padding: 0 0 10px 0;
        list-style: none;
        border-bottom: 1px solid #ededed;
    }

    .brand-logo {
        display: flex;
        padding-left: 20px;
        line-height: 50px;
        font-size: 24px;
        font-weight: bold;
        color: transparent;
        background-color: var(--logoBarLeft);
        background-clip: text;
    }

    .menu-item {
        display: flex;
        cursor: pointer;
        padding: 14px 0;
        font-size: 16px;
        transition: .25s background ease-in, .1s transform ease-in;
        color: #647783;

        .left-icon {
            width: 60px;
            text-align: center;
        }


        &.active{
            color: #2970ff;
            font-weight: bold;
        }

        &:hover {
            background-color: #f5f7f7;
        }

        &:active {
            transform: scale(.97);
        }
    }
  }

  .body-content {
      flex: 1;
      background-color: #ededed;
  }
}

@media screen and (max-width: 414px) {
  aside {
    display: none;
  }
}
</style>