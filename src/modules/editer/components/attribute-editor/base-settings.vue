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
          <a-input
            v-decorator="[
              'username',
              {
                rules: [{ required: true, message: 'Please input your name' }],
              },
            ]"
            placeholder="Please input your name"
          />
        </a-form-item>
        <a-form-item
          :label-col="formItemLayout.labelCol"
          :wrapper-col="formItemLayout.wrapperCol"
          label="默认标题"
        >
          <a-input
            v-decorator="[
              'nickname',
              {
                rules: [
                  {
                    required: checkNick,
                    message: 'Please input your nickname',
                  },
                ],
              },
            ]"
            placeholder="Please input your nickname"
          />
        </a-form-item>
        <a-form-item
          :label-col="formTailLayout.labelCol"
          :wrapper-col="formTailLayout.wrapperCol"
        >
          <a-button type="primary" @click="check">
            Check
          </a-button>
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
  name: "EditerAttributeEditorBase",
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
