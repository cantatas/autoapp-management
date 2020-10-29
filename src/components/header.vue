<template>
<header class="header-panel">
<div class="logo">
UDA
</div>
</header>
</template>

<script>
export default {
  name: 'HeaderPane',
  props: {
  }
}
</script>

<style lang="less" scoped>
.header-panel{
    position: absolute;
    top: 0;
    left: 0;
    min-height: 50px;
    width: 100%;
    min-width: 600px;
    display: flex;
    box-shadow: 0 0 15px 0 rgba(22,45,61,.5);
    z-index: 999;
    .logo{
      width: 100px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 900;
      border-right: 1px solid #eaf7ff;
    }
}
</style>
