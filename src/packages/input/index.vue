<template>
  <div class="app-page-lib-input box" :class="styleType">
    <div class="input-title flex1">{{defaultData.title}}</div>
    <div class="input-content flex3">
      <input :type="defaultData.type" :placeholder="defaultData.placeholder">
    </div>
    <div class="flex1"></div>
  </div>
</template>

<script>

export default {
  name: 'appPageLibInput',
  props: {
    styleType: {
      type: String,
      default: "style1",
    },
  },
  data() {
    return {
      defaultData : {
        title : '标题',
        placeholder : '请输入内容',
        type : 'text'
      }
    };
  },
}
</script>

<style lang="less" scoped>

.app-page-lib-input{
  &.style1{
    background: #fff;
    border-bottom: 1px solid #ddd;
    .input-title{
      padding: 0 10px;
    }
    .input-content{
      input{
        border: none
      }
    }
  }
}
</style>
