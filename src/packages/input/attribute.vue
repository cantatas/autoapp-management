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
          label="标题"
        >
          <a-input v-model="config.title" placeholder="标题设置" />
        </a-form-item>
        <a-form-item
          :label-col="formItemLayout.labelCol"
          :wrapper-col="formItemLayout.wrapperCol"
          label="默认内容提示"
        >
          <a-input v-model="config.placeholder" placeholder="默认内容提示设置" />
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
      defaultData: {},
    };
  },
  mounted() {
    this.$root.$on(
      eventKeys.ON_ATTRIBUTE_EDITE_UPDATE,
      ({ config, defaultData }) => {
        console.log(config);
        this.defaultData = defaultData;
      }
    );
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
