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
          label="必填"
        >
          <a-select default-value="0">
            <a-select-option value="0">
              否
            </a-select-option>
            <a-select-option value="1">
              是
            </a-select-option>
          </a-select>
        </a-form-item>
        <a-form-item
          :label-col="formItemLayout.labelCol"
          :wrapper-col="formItemLayout.wrapperCol"
          label="名称"
        >
          <a-input v-model="config.title" placeholder="名称设置" />
        </a-form-item>
        <a-form-item
          :label-col="formItemLayout.labelCol"
          :wrapper-col="formItemLayout.wrapperCol"
          label="提示文字"
        >
          <a-input v-model="config.placeholder" placeholder="提示文字设置" />
        </a-form-item>
        <a-form-item
          :label-col="formItemLayout.labelCol"
          :wrapper-col="formItemLayout.wrapperCol"
          label="类型"
        >
          <a-select default-value="0">
            <a-select-option value="0">
              文字
            </a-select-option>
            <a-select-option value="1">
              密码
            </a-select-option>
            <a-select-option value="2">
              手机号码
            </a-select-option>
            <a-select-option value="3">
              日期
            </a-select-option>
            <a-select-option value="4">
              邮箱
            </a-select-option>
          </a-select>
        </a-form-item>
      </a-form>
    </div>
  </div>
</template>

<script>
const formItemLayout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 16 },
};
const formTailLayout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 16, offset: 4 },
};
import eventKeys from "@/commons/event-keys";

export default {
  name: "appPageLibInputAttribute",
  props: {},
  data() {
    return {
      checkNick: false,
      formItemLayout,
      formTailLayout,
      form: this.$form.createForm(this, { name: "dynamic_rule" }),
      config: {
        required : 0
      },
    };
  },
  mounted() {
    this.$root.$on(eventKeys.ON_ATTRIBUTE_EDITE_UPDATE, ({ config }) => {
      console.log(config);
    });
  },
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
