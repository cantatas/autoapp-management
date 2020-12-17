<template>
  <div>
    <div class="page-head">
      <span>{{ pageId }}</span
      >{{ pageName }}
    </div>
    <div class="phone-view">
      <iframe
        id="page-view"
        ref="appIframe"
        src="./app/#/login"
        frameborder="0"
      ></iframe>
    </div>
  </div>
</template>

<script>
import { saveDataApi, updateDataApi, getInfoByIdApi } from "@/api/editor";
import eventKeys from "@/commons/event-keys";

export default {
  name: "EditerPhoneView",
  data() {
    return {
      editeData: {
        _id: "",
        formAttribute: {
          formStyle: null,
          FormBorderClass: null,
        },
      },
      pageId: "",
      pageName: "",
    };
  },
  mounted() {
    this.getDataInfo();
    this.onClickPage();
    this.onEditeFormAttrs();
    this.onSaveData();
    this.onClickLeftPage();
  },
  methods: {
    init() {
      this.setPagePath();
      this.setPageBeautify();
    },
    getDataInfo() {
      getInfoByIdApi({ _id: this.$route.params.id })
        .then((res) => {
          this.editeData = res.data;
          this.init();

          this.setStyleValue(
            res.data.formAttribute.formStyle,
            res.data.formAttribute.FormBorderClass
          );
        })
        .catch((err) => {
          console.log(err.message, "--===-- error");
          this.$message.error("获取详情失败");
          this.init();
        });
    },
    setPagePath() {
      const sedata = this.$refs.appIframe.contentWindow.sessionStorage.getItem(
        "beautify-page-list"
      );
      const defData = JSON.parse(sedata)[0];
      if (defData.meta) {
        this.$refs.appIframe.src = `./app/#${defData.path}`;
        this.pageName = defData.meta.name;
        this.pageId = defData.meta.id;
      }
    },
    onSaveData() {
      //保存
      this.$root.$on(eventKeys.ON_CLICK_SAVE_DATA, () => {
        let params = {
          page_id: this.$route.params.id,
          formAttribute: this.editeData.formAttribute,
        };
        if (this.editeData._id) {
          params._id = this.editeData._id;
          updateDataApi(params).then((res) => {
            if (!res.data.success) {
              this.$message.error("更新失败");
            } else {
              this.$message.success("更新成功");
            }
          });
        } else {
          saveDataApi(params).then((res) => {
            if (!res.data.success) {
              this.$message.error("保存失败");
            } else {
              this.$message.success("保存成功");
            }
          });
        }
      });
    },
    onClickPage() {
      //点击表单
      this.$refs.appIframe.contentWindow.addEventListener("click", (e) => {
        const formType = e.target.getAttribute("data-beautify-type");
        this.$root.$emit(eventKeys.ON_CLICK_BEAUTIFY_FORM_EL, formType);
      });
    },
    onEditeFormAttrs() {
      let inputStyle = "";
      let buttonStyle = "";
      let textButtonStyle = "";
      let listMenuStyle = "";
      let mainMenuStyle = "";
      let formStyle = "";
      //表单属性编辑
      this.$root.$on(
        eventKeys.ON_EDITE_FORM_ATTRS,
        ({
          fontColor,
          FormBorderClass,
          borderColor,
          borderThick,
          borderRadius,
          bgColor,
          textDecoration,
          listMenuFontColor,
          listMenuFontSize,
          listMenuColumnNum,
          listMenuIconBoxShadow,
          listMenuIconBorderRadius,
          listMenuIconBgColor,
          listMenuIconColor,
          listMenuIconMarginBottom,
          mainMenufontColor,
          mainMenufontSize,
          mainMenubgColor,
          mainMenufontIconSize,
          mainMenuIconColor,
          mainMenuIconMarginBottom,
          formType,
        }) => {
          // 样式设置

          //0=页面; 1=logo; 2=文本框; 3=密码;5=按钮; 6=文本按钮
          if (formType === 2) {
            inputStyle = `
                    --input-title-color:${fontColor};
                    --input-border-color:${borderColor};
                    --input-border-radius:${borderRadius};
                    --input-border-thick:${borderThick}px;
                    `;
          } else if (formType === 5) {
            buttonStyle = `
                    --btn-font-color:${fontColor};
                    --btn-border-color:${borderColor};
                    --btn-border-radius:${borderRadius};
                    --btn-bg-color:${bgColor};
                    --btn-border-thick:${borderThick}px;
                    `;
          } else if (formType === 6) {
            textButtonStyle = `
                    --text-btn-font-color:${fontColor};
                    --text-btn-text-decoration:${textDecoration};
                    `;
          } else if (formType === 7) {
            listMenuStyle = `
                  --list-menu-font-color:${listMenuFontColor};
                  --list-menu-font-size:${listMenuFontSize}px;
                  --list-menu-column-num:${listMenuColumnNum};
                  --list-menu-box-shadow:${listMenuIconBoxShadow};
                  --list-menu-border-radius: ${listMenuIconBorderRadius};
                  --list-menu-icon-bgcolor: ${listMenuIconBgColor};
                  --list-menu-icon-color: ${listMenuIconColor};
                  --list-menu-icon-margin-bottom: ${listMenuIconMarginBottom}px;
                    `;
          } else if (formType === 8) {
            mainMenuStyle = `
                  --main-menu-font-color:${mainMenufontColor};
                  --main-menu-font-size:${mainMenufontSize}px;
                  --main-menu-bgcolor: ${mainMenubgColor};
                  --main-menu-font-icon-size:${mainMenufontIconSize}px;
                  --main-menu-icon-color: ${mainMenuIconColor};
                  --main-menu-icon-margin-bottom : ${mainMenuIconMarginBottom}px;
                    `;
          }
          //表单样式拼接
          formStyle = `${inputStyle}${buttonStyle}${textButtonStyle}${listMenuStyle}${mainMenuStyle}`;
          //接口参数
          this.editeData.formAttribute.formStyle = formStyle;
          this.editeData.formAttribute.FormBorderClass = FormBorderClass;
          this.setStyleValue(formStyle, FormBorderClass);
        }
      );
    },
    onClickLeftPage() {
      this.$root.$on(eventKeys.ON_SELECTED_LEFT_PAGE, (item) => {
        console.log(item);
        this.pageName = item.meta.name;
        this.pageId = item.meta.id;
      });
    },
    setStyleValue(formStyle, FormBorderClass) {
      this.$nextTick(() => {
        //页面样式更改
        const pageInstance = this.$refs.appIframe.contentWindow.document.body;
        pageInstance.style = formStyle;
        const bForm = pageInstance.querySelector(".beautify-form");
        const noBorder = "no-border";
        const fllBorder = "full-border border-radius";
        if (bForm && FormBorderClass) {
          bForm.className = `${bForm.className
            .replace(noBorder, "")
            .replace(fllBorder, "")} ${FormBorderClass || ""} `; //form表单样式
        }
      });
    },
    formStyleMap(formType) {
      let type = {};
      return type[formType];
    },
    setPageBeautify() {
      let iframe = this.$refs.appIframe.contentWindow;
      iframe.window.onload = () => {
        iframe.sessionStorage.setItem("parent-beautify", 1);
        let cnames = iframe.document.body.className;
        iframe.document.body.className = `${cnames} beautify`;
      };
    },
  },
};
</script>

<style lang="less" scoped>
.page-head {
  height: 60px;
  line-height: 60px;
  font-size: 14px;
  font-weight: 600;
  span {
    font-size: 22px;
    margin-right: 10px;
  }
}
.phone-view {
  width: 375px;
  height: 667px;
  background: url(../../../assets/imgs/phone-bg.png);
  box-shadow: 0 0 14px 0 rgba(22, 45, 61, 0.36);
  margin-bottom: 80px;
  iframe {
    width: 100%;
    height: 100%;
  }
}
/deep/ .vue-resizable-handle {
  z-index: 9999;
}
.vue-grid-item {
  background: transparent;
  border-radius: 4px;

  &:hover {
    .item-mask {
      display: flex;
    }
  }
  .item-mask {
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    justify-content: center;
    z-index: 99;
    background: rgba(0, 0, 0, 0.7);
    display: none;
    a {
      color: #fff;
      line-height: 2.5;
      font-size: 12px;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 5px;
      margin-right: 15px;
      &.del {
        color: #ffac11;
      }
    }
  }
  > * {
    z-index: -1;
    width: 100%;
    height: 100%;
  }
}
</style>
