<template>
    <div class="container essay-main-wrap">
        <essayItem :isIndex="false"/>
    </div>
</template>
<script>
import axios from "~/plugins/axios";
import essayItem from "~/components/essayItem";
export default {
  components: {
    essayItem
  },
  
};
</script>
<style lang="scss" scoped>
.essay-main-wrap {
  width: 100%;
}
</style>
