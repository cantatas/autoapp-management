<template>
  <div class="form-view">
    <div class="form-row">
      <a-form :form="form" v-bind="formItemLayout">
        <a-form-item label="字体颜色">
          <a-input v-model="dataFrom.fontColor" placeholder="名字体颜色设置" />
        </a-form-item>
        <a-form-item label="字体线条修饰">
          <a-select v-model="dataFrom.textDecoration" default-value="">
            <a-select-option value="">
              无修饰
            </a-select-option>
            <a-select-option value="underline">
              显示下线条
            </a-select-option>
            <a-select-option value="overline">
              显示上线条
            </a-select-option>
            <a-select-option value="line-through">
              显示穿过线条
            </a-select-option>
            <a-select-option value="blink">
              字体闪烁
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
  name: "appPageLibButtonUI",
  props: {},
  data() {
    return {
      checkNick: false,
      formItemLayout,
      formTailLayout,
      form: this.$form.createForm(this, { name: "dynamic_rule" }),
      config: {
        required: 0,
      },
      dataFrom: {
        fontColor: "",
        textDecoration: "",
        formType: 6,
      },
      timer: null,
    };
  },
  mounted() {
  },
  watch: {
    dataFrom: {
      handler(newVal) {
        clearTimeout(this.timer);
        this.timer = setTimeout(() => {
          this.$root.$emit(eventKeys.ON_EDITE_FORM_ATTRS, newVal);
        }, 1000);
      },
      deep: true,
    },
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
