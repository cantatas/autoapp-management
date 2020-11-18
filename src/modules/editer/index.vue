<template>
  <div class="editer-page">
    <aHeader></aHeader>
    <aAside class="edite-body">
      <a-tabs default-active-key="1" tab-position="left">
        <a-tab-pane class="tabs-content-custom" key="1" tab="新增">
          <formList></formList>
        </a-tab-pane>
        <a-tab-pane  class="tabs-content-custom" key="2" tab="其他">
          Content of Tab 2
        </a-tab-pane>
      </a-tabs>
      <!-- <div class="menu">
        <ul>
          <li>
            <a class="">
              page
            </a>
          </li>
        </ul>
      </div>
      <div class="page-show-list">
        <ul>
          <li>
            <div class="page-thumbnail"></div>
          </li>
        </ul>
      </div> -->
    </aAside>
    <PageContent class="content">
      <div class="left">
        <phoneView></phoneView>
      </div>
      <div class="right">
        <attribute-editor></attribute-editor>
      </div>
    </PageContent>
  </div>
</template>

<script>
import aAside from "@components/aside.vue";
import aHeader from "@components/header.vue";
import PageContent from "@components/content.vue";
import attributeEditor from "./components/attribute-editor/index.vue";
import phoneView from "./components/phone-view.vue";
import formList from "./components/form-list.vue";
export default {
  name: "mainIndex",
  components: {
    aAside,
    aHeader,
    PageContent,
    attributeEditor,
    phoneView,
    formList,
  },
};
</script>

<style lang="less" scoped>
.edite-body {
  /deep/ .ant-tabs{
    height: 100%;
  }
  /deep/ .ant-tabs-nav-scroll{
    padding-top: 20px;
  }
  /deep/ .ant-tabs-left-content{
    padding-left: 0;
  }
  /deep/ .ant-tabs-left-bar,
  /deep/ .ant-tabs-content{
    height: 100%;
  }
  .tabs-content-custom{
    background-color: #f1f8ff;
    height: 100%;
    width: 300px;
  }
  .menu {
    width: 45px;
    background: #3899ec;
    height: 100%;
    li {
      a {
        display: block;
        color: #fff;
        height: 50px;
        line-height: 50px;
      }
    }
  }
  .page-show-list {
    position: absolute;
    top: 0;
    left: 45px;
    height: 100%;
    width: 230px;
    background-color: #f1f8ff;
    display: inline-block;
    height: calc(100% - 28px);
    padding: 14px 0;
    vertical-align: top;
    overflow: auto;
    .page-thumbnail {
      position: relative;
      width: 150px;
      height: 212.5px;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.4);
      background: #fff;
      overflow: hidden;
      margin: 15px auto;

    }
  }
}
.content {
  left: 275px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-content: center;
  flex: 1;
  .left {
    flex: 7;
    display: flex;
    justify-content: center;
    width: 100%;
    height: 100%;
    overflow: auto;
  }
  .right {
    flex: 3;
    display: flex;
    justify-content: flex-end;
  }
}
</style>
