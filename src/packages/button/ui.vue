<template>
  <div class="form-view">
    <div class="form-row">
      <h3>设置</h3>
    </div>
    <div class="form-row">
      <a-form :form="form">
        <a-form-item
          :label-col="formItemLayout.labelCol"
          :wrapper-col="formItemLayout.wrapperCol"
          label="按钮名称"
        >
          <a-input
            v-model="config.buttonName"
            placeholder="按钮名称设置"
          />
        </a-form-item>
      </a-form>
    </div>
  </div>
</template>

<script>
const formItemLayout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 14 },
};
const formTailLayout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 14, offset: 4 },
};

export default {
  name: "appPageLibInputUI",
  props: {
    config: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      postEditeData: {},
      checkNick: false,
      formItemLayout,
      formTailLayout,
      form: this.$form.createForm(this, { name: "dynamic_rule" }),
    };
  },
  components: {},
  mounted() {},
  methods: {
    doEdit() {},
    check() {
      this.form.validateFields((err) => {
        if (!err) {
          console.info("success");
        }
      });
    },
  },
};
</script>

<style lang="less" scoped>
@import "@/assets/less/form.less";
.form-row {
  font-size: 12px;
  width: 100%;
  h3 {
    font-size: 14px;
  }
}
</style>
