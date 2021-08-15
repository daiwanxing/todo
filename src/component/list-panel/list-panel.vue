<template>
  <div class="list-panel">
    <div class="list-panel-box">
      <div class="list-header">
        <div class="list-header-title">
          <template v-if="icon">
            <font-awesome-icon :icon="icon" />
          </template>
          {{ headerTitle }}
        </div>
        <div class="list-header-sub-title" v-if="headerSubTitle">
          {{ headerSubTitle }}
        </div>
        <div class="options-menu">
          <font-awesome-icon icon="ellipsis-h" />
        </div>
      </div>
      <div class="list-body">
        <slot> </slot>
        <div class="add-task">
          <font-awesome-icon icon="plus" />
          <input type="text" placeholder="添加任务" v-model="task" />
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  props: {
    headerTitle: {
      type: String,
      required: true,
    },
    headerSubTitle: {
      type: String,
    },
    icon: {
      type: String,
    },
  },
  data() {
    return {
      task: ""
    };
  },
};
</script>

<style scoped lang="scss">
.list-panel {
  height: 100%;
  box-sizing: border-box;
  padding: 40px;
  background-image: var(--panelBg);

  .list-panel-box {
    height: 100%;
    position: relative;
  }

  .list-header {
    position: relative;
  }

  .list-header-title {
    font-size: 28px;
    font-weight: 700;
    color: var(--headerTitle);
  }

  .list-header-sub-title {
    margin: 12px 0;
    font-size: 14px;
    color: var(--headerSubTitle);
  }

  .options-menu {
    position: absolute;
    padding: 2px 6px;
    right: 0;
    top: 0;
    color: #fff;
    border-radius: 4px;
    transform: translateY(50%);
    background-color: rgba(0, 0, 0, 0.4);
    cursor: pointer;

    &:hover {
      background-color: rgba(0, 0, 0, 0.6);
    }
  }

  .add-task {
    position: absolute;
    padding: 0 20px;
    line-height: 50px;
    left: 0;
    right: 0;
    bottom: 0;
    color: #fff;
    background-color: rgba(0, 0, 0, 0.2);
    border-radius: 6px;
    cursor: text;

    input {
      margin-left: 10px;
      width: 60%;
      outline: transparent;
      background-color: transparent;
      border: none;
      color: #fff;
    }

    input::placeholder {
      color: #fff;
    }

    &:hover {
      background-color: rgba(0, 0, 0, 0.3);
    }
  }
}
</style>