<template>
  <div class="add-app-page">
    <div class="step-1">
      <a @click="showModal" class="add-app">添加</a>
    </div>
    <div class="stip-2 edit-container">
      
    </div>

    <a-modal
      v-model="visible"
      :maskClosable="false"
      title="新增APP"
      @ok="handleOk"
    >
      <div>
        <a-input placeholder="页面名称" />
      </div>
    </a-modal>
  </div>
</template>

<script>
export default {
  name: "MainContent",
  data() {
    return {
      visible: false,
    };
  },
  components: {

  },
  methods: {
    showModal() {
      this.visible = true;
    },
    handleOk(e) {
      console.log(e);
      this.$router.push('/editer')
      this.visible = false;
    },
  },
};
</script>

<style lang="less" scoped>
.add-app-page {

  .add-app {
    width: 100px;
    height: 100px;
    border: 1px dashed #999;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 6px;
    font-size: 14px;
    color: #666;
  }
}

.edit-container{

}

</style>
