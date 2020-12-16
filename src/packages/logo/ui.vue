<template>
  <div class="app-page-lib-logo box" :class="styleType">
    logo
  </div>
</template>

<script>

export default {
  name: 'appPageLibLogo',
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

.app-page-lib-logo{
  &.style1{
  }
}
</style>
