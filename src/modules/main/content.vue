<template>
  <div class="page-content">
    <a @click="showModal" class="add-app">添加</a>
       <a-modal v-model="visible" :footer="null" :maskClosable="false" title="新增APP" @ok="handleOk">
         
      </a-modal>
  </div>
</template>

<script>
export default {
  name: 'MainContent',
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
      this.visible = false;
    },
  }
}
</script>

<style lang="less" scoped>
.page-content{
    position: absolute;
    left: 186px;
    right: 0;
    top: 50px;
    display: flex;
    padding: 15px;
    .add-app{
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
</style>
