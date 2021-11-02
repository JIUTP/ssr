<!--
 * @Description  : 企业layout
 * @Author       : RenChen
 * @Date         : 2021-11-02 14:32:16
 * @LastEditors  : RenChen
 * @LastEditTime : 2021-11-02 14:49:17
-->
<template>
  <div>
    <EnterpriceHeader />
    <nuxt />
  </div>
</template>

<script>
import EnterpriceHeader from './components/EnterpriceHeader.vue'
export default {
  components: {
    EnterpriceHeader
  }
}
</script>
