<template>
  <div class="page-index">
    <aHeader></aHeader>
    <aAside class="edite-body">
      <a-tabs default-active-key="1" tab-position="left">
        <a-tab-pane class="tabs-content-custom" key="1" tab="我的页面">
        </a-tab-pane>
      </a-tabs>
    </aAside>
    <PageContent>
      <aContent></aContent>
    </PageContent>
  </div>
</template>

<script>
import aAside from "@components/aside.vue";
import aHeader from "@components/header.vue";
import PageContent from "@components/content.vue";
import aContent from "./content.vue";
export default {
  name: "mainIndex",
  components: {
    aAside,
    aHeader,
    PageContent,
    aContent,
  },
};
</script>

<style lang="less" scoped>
/deep/ .ant-tabs {
  height: 100%;
}
</style>  