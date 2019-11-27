<template>
  <div class="manage">
    <div class="manage-header">
      <common-form inline></common-form>
    </div>
    <div class="manage-content">
      <common-table></common-table>
    </div>
  </div>
</template>

<script>
import CommonForm from '../../components/CommonForm.vue'
import CommonTable from '../../components/CommonTable.vue'

export default {
    components: {
        CommonForm,
        CommonTable
    }
}
</script>
<style lang="scss" scoped>
@import '@/assets/scss/common';
</style>
