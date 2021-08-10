<template>
  <section class="todo-container">
    <!-- 左侧列表 -->
    <aside>
        <div class="brand-logo">MicroHard ToDo</div>
        <ul class="base-menu">
            <li class="menu-item" v-for="item in baseMenu" :key="item.id">
                <div class="left-icon"><font-awesome-icon :icon="item.icon" /></div>
                {{ item.name }} 
            </li>
        </ul>
    </aside>
    <div class="body-content"></div>
  </section>
</template>


<script>
import { baseMenu } from "@/utils/menu";

export default {
    name: "root",
    data () {
        return {
            baseMenu
        }
    }
}
</script>


<style scoped lang="scss">
.todo-container {
  display: flex;
  height: 100%;

  aside {
    height: 100%;
    width: 300px;
    background-color: #feffff;
    overflow-y: auto;

    .base-menu {
        margin: 0;
        padding: 0 0 10px 0;
        list-style: none;
        border-bottom: 1px solid #ededed;
    }

    .brand-logo {
        padding-left: 60px;
        line-height: 50px;
        font-size: 18px;
        font-weight: bold;
        color: transparent;
        background-image: linear-gradient(to top, #768adb, #5d71bf);
        -webkit-background-clip: text;
    }

    .menu-item {
        display: flex;
        cursor: pointer;
        padding: 14px 0;
        transition: .25s transform ease-in;
        font-size: 16px;

        .left-icon {
            width: 60px;
            text-align: center;
        }


        &.active{
            color: #647783;
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

@media screen and (max-width: 320px) {
  aside {
    display: none;
  }
}
</style>