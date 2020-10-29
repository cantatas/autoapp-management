<template>
  <div class="page-index">
    <aHeader></aHeader>
    <aAside></aAside>
    <aContent></aContent>

  </div>
</template>

<script>

import aAside from '@components/aside.vue';
import aHeader from '@components/header.vue';
import aContent from './content.vue';
export default {
  name: 'mainIndex',
  components: {
    aAside,
    aHeader,
    aContent,
  }
}
</script>

<style>
</style>
