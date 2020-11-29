<template>
  <div class="app-page-lib-button box" :class="styleType">
    <a-button type="primary" block>
      {{ defaultData.buttonName }}
    </a-button>
  </div>
</template>

<script>

export default {
  name: 'appPageLibButton',
  props: {
    styleType: {
      type: String,
      default: "style1",
    },
  },
  data() {
    return {
      defaultData : {
        buttonName : '确定',
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
