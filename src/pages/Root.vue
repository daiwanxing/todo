<template>
  <section class="todo-container">
    <!-- 左侧列表 -->
    <aside></aside>
    <div class="body-content"></div>
  </section>
</template>

<style scoped lang="scss">
.todo-container {
  display: flex;
  height: 100%;

  aside {
    height: 100%;
    width: 300px;
    background-color: #feffff;
    overflow-y: auto;
  }

  .body-content {
      flex: 1;
  }
}

@media screen and (max-width: 320px) {
  aside {
    display: none;
  }
}
</style>