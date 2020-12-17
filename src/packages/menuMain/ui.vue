<template>
  <div class="form-view">
    <div class="form-row">
      <a-form :form="form" v-bind="formItemLayout">
        <a-form-item label="背景色">
          <a-input
            v-model="dataFrom.mainMenubgColor"
            placeholder="背景色设置"
          />
        </a-form-item>
        <a-form-item label="字体颜色">
          <a-input
            v-model="dataFrom.mainMenufontColor"
            placeholder="字体颜色设置"
          />
        </a-form-item>
        <a-form-item label="字体大小">
          <a-input-number
            @change="onFontSize"
            v-model="dataFrom.mainMenufontSize"
            :min="9"
            :max="20"
          />
        </a-form-item>
        <a-form-item label="图标大小">
          <a-input-number
            @change="onIconSize"
            v-model="dataFrom.mainMenufontIconSize"
            :min="20"
            :max="50"
          />
        </a-form-item>
        <a-form-item label="图标下间距">
          <a-input-number
            @change="onMarginBottom"
            v-model="dataFrom.mainMenuIconMarginBottom"
            :min="5"
            :max="40"
          />
        </a-form-item>
        <a-form-item label="图标颜色">
          <a-input
            v-model="dataFrom.mainMenuIconColor"
            placeholder="图标颜色设置"
          />
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
  name: "appPageLibMenuListUI",
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
        mainMenufontColor: "#666",
        mainMenufontSize: "12",
        mainMenubgColor: "#202533",
        mainMenufontIconSize: "32",
        mainMenuIconColor: "#fff",
        mainMenuIconMarginBottom: "10",
        formType: 8,
      },
      timer: null,
    };
  },
  mounted() {},
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
    onFontSize(val) {
      this.dataFrom.mainMenufontSize = val;
    },
    onIconSize(val) {
      this.dataFrom.mainMenufontIconSize = val;
    },
    onMarginBottom(val) {
      this.dataFrom.mainMenuIconMarginBottom = val;
    },
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
