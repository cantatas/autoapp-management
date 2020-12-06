<template>
<header class="header-panel">
  <div class="logo">
  UDA
  </div>
  <div v-show="isShow" class="options box">
        <a-tooltip placement="bottom">
          <template slot="title">
            <span>保存</span>
          </template>
          <a @click="doSaveData" class="save-data box"><i class="iconfont iconbaocun"></i></a>
        </a-tooltip>
        <a-tooltip placement="bottom">
          <template slot="title">
            <span>重置</span>
          </template>
          <a @click="doReset" class="save-data box"><i class="iconfont iconzhongzhi"></i></a>
        </a-tooltip>
  </div>
</header>
</template>

<script>
import eventKeys from "@/commons/event-keys";
export default {
  name: 'HeaderPane',
  data() {
    return {
    }
  },
  computed : {
    isShow(){
      return this.$route.name === 'editer'
    }
  },
  methods: {
    doSaveData(item){
      this.$root.$emit(eventKeys.ON_CLICK_SAVE_DATA,item)
    },
    doReset(){
      this.$root.$emit(eventKeys.ON_CLICK_RESET)
    }
  },
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
    .save-data{
      color: #666;
      width: 50px;
      height: 100%;
      &:hover{
        background: #eaf7ff
      }
    }
}
</style>
