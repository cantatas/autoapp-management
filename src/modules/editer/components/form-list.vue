<template>
  <div class="form-list">
    <ul>
      <li>
        <div class="title">表单</div>
        <div class="form-list-body">
          <div class="item" :key="index" v-for="(item,index) in formDataList">
            <a-button @click="doGetFormItem(item)">{{ item.text }}</a-button>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>

import eventKeys from "@/commons/event-keys";
export default {
  name: "EditerFormList",
  data() {
    return {
      formDataList : [
        { type : 1 ,text:'logo' },
        { type : 2 ,text:'输入框' },
        { type : 3 ,text:'单选' },
        { type : 4 ,text:'多选' },
        { type : 5 ,text:'文本域' },
        { type : 6 ,text:'按钮' },
      ]
    };
  },
  components: {
  },
  mounted() {
  },
  methods: {
    doGetFormItem(item){
      this.$root.$emit(eventKeys.ON_CLICK_FORM_ITEM,item)
    }
  },
};
</script>

<style lang="less" scoped>
@import '@/assets/less/form.less';
.form-list{
  padding: 15px;
  .title{
    font-size: 14px;
    color: #999;
    text-align: left;
  }
  .form-list-body{
    text-align: left;
    .item{
      margin-top: 15px;
    }
  }
}
</style>
