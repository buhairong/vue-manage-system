<template>
  <el-container class="wrap">
    <el-aside width="auto"><common-aside></common-aside></el-aside>
    <el-container>
      <el-header><common-header></common-header></el-header>
      <common-tab></common-tab>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import CommonHeader from '../components/CommonHeader.vue'
import CommonAside from '../components/CommonAside.vue'
import CommonTab from '../components/CommonTab.vue'

export default {
  components: {
    CommonHeader,
    CommonAside,
    CommonTab
  }
}
</script>

<style lang="scss" scoped>
.wrap {
  height: 100%;
}
.el-header {
  background: #333;
}
</style>
