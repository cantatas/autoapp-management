<template>
  <div class="form-view">
    <div class="form-row">
      基础设置
    </div>
    <div class="form-row">
      <div class="form-col name">
        名称：
      </div>
      <div class="form-col input">
        <a-input @keyup="doEdit" v-model="postEditeData.input.value" />
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "EditerAttributeEditorBase",
  data() {
    return {
      postEditeData : {}
    };
  },
  components: {
  },
  mounted() {
  },
  methods: {
    doEdit(){}

  },
};
</script>

<style lang="less" scoped>
@import '@/assets/less/form.less';
</style>
