<template>
  <div class="editer-page">
    <aHeader></aHeader>
    <aAside class="edite-body">
      <div class="menu">
        <ul>
          <li :class="{ active: activeIndex === 0 }" @click="onChange(0)">
            <a class="menu-item">
              <div><i class="iconfont iconyemian"></i></div>
              <div>页面</div>
            </a>
          </li>
          <li :class="{ active: activeIndex === 1 }" @click="onChange(1)">
            <a class="menu-item">
              <div><i class="iconfont iconkongjianshu"></i></div>
              <div>控件</div>
            </a>
          </li>
        </ul>
      </div>
      <div class="page-show-list">
        <div v-show="activeIndex === 0">
          <pageList></pageList>
        </div>
        <div v-show="activeIndex === 1">
          控件
        </div>
      </div>
    </aAside>
    <PageContent class="content">
      <div class="left">
        <phoneView></phoneView>
      </div>
      <div class="right">
        <form-editor></form-editor>
      </div>
    </PageContent>
  </div>
</template>

<script>
import aAside from "@components/aside.vue";
import aHeader from "@components/header.vue";
import PageContent from "@components/content.vue";
// import attributeEditor from "./components/attribute-editor/index.vue";
import formEditor from "./components/form-editor/index.vue";
import phoneView from "./components/phone-view.vue";
import pageList from "./components/page-list.vue";
export default {
  name: "mainIndex",
  data() {
    return {
      activeIndex: 0,
    };
  },
  components: {
    aAside,
    aHeader,
    PageContent,
    formEditor,
    phoneView,
    pageList,
  },
  methods: {
    onChange(index) {
      this.activeIndex = index;
    },
  },
};
</script>

<style lang="less" scoped>
.edite-body {
  .menu {
    width: 55px;
    height: 100%;
    background: #3899ec;
    li {
      padding: 15px 0;
      &.active,
      &:hover {
        background: #4eb7f5;
        a {
          color: #2b5672;
        }
      }
      a {
        display: block;
        color: #fff;
        div {
          i {
            font-size: 28px;
          }
        }
      }
    }
  }
  .page-show-list {
    position: absolute;
    top: 0;
    left: 55px;
    height: 100%;
    width: 230px;
    background-color: #f1f8ff;
    display: inline-block;
    height: calc(100% - 28px);
    padding: 14px 0;
    vertical-align: top;
    overflow: auto;
    color: #333;
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
