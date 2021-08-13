<template>
  <App></App>
</template>

<script>
import welcomePage from "@/component/welcome/welcome.vue";
import root from "@/pages/Root.vue"

export default {
  name: "root-index",
  components: {
    App: () => ({
      component: new Promise(resolve => {
          setTimeout(() => {
                resolve(root)
          }, 3000);
      }),
      loading: welcomePage,
      delay: 0, // delay 是 多少毫秒之后才会加载异步组件
      timeout: 10000, // 超过指定的毫秒后异步组件仍然未被resovle的话就报错并且加载error组件
      // 总而言之，vue-router中使用Loading-component是无法被shown的，异步组件一旦被resolve，就会立即rendering，
      // 此时loading组件没有出现的必要了
    }),
  }
};
</script>