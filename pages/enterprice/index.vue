<!--
 * @Description  : 企业介绍页
 * @Author       : RenChen
 * @Date         : 2021-11-02 14:29:27
 * @LastEditors  : RenChen
 * @LastEditTime : 2021-11-02 14:51:18
-->
<template>
  <div>
    企业介绍页
    <nuxt-link :to="{ path: '/' }">
      首页
    </nuxt-link>
  </div>
</template>

<script>
export default {
  name: 'Enterprice',
  layout: 'enterprice_layout'
}
</script>
