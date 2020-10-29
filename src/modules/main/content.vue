<template>
  <div class="page-content">
    <a-button type="primary" icon="search">
      添加
    </a-button>
  </div>
</template>

<script>
export default {
  name: 'MainContent',
  components: {
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
      display: block;
    }
}
</style>
