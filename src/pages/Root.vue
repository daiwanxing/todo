<template>
  <section class="todo-container" :data-theme="theme">
    <!-- 左侧列表 -->
    <aside>
      <div class="brand-logo">
        <div class="icon-box">
          <font-awesome-icon icon="check-circle" class="icon-color" />
        </div>
        MicroHard Todo
      </div>
      <ul class="base-menu">
        <li
          v-for="item in baseMenu"
          :key="item.id"
          class="menu-item"
        >
          <router-link :to="item.path" class="menu-link">
            <div class="left-icon"><font-awesome-icon :icon="item.icon" /></div>
            {{ item.name }}
          </router-link>
        </li>
      </ul>
      <div class="create-item-button" @click="createHandler">
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
  data() {
    return {
      loading: false,
      activeIndex: -1,
      baseMenu,
      theme: "purple"
    };
  },
  created () {
    const res = baseMenu.filter(menu => menu.path === this.$route.path);
       if (res.length > 0) {
           this.theme = res[0].theme;
       }
  },
  methods: {
    // 创建handle
    createHandler() {},
  }
};
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
      font-size: 16px;
      transition: 0.25s background ease-in, 0.1s transform ease-in;
      color: #647783;

      .menu-link {
        display: flex;
        width: 100%;
        padding: 14px 0;
        text-decoration: none;
        color: inherit;
      }

      .left-icon {
        width: 60px;
        text-align: center;
      }

      .router-link-exact-active {
        color: var(--menuActive);
        font-weight: bold;
      }

      &:hover {
        background-color: #f5f7f7;
      }

      &:active {
        transform: scale(0.97);
      }
    }
  }

  .body-content {
    flex: 1;
  }
}

@media screen and (max-width: 414px) {
  aside {
    display: none;
  }
}
</style>