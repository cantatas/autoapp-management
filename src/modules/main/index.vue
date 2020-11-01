<template>
  <div class="page-index">
    <aHeader></aHeader>
    <aAside></aAside>
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