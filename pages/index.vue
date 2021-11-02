<!--
 * @Description  : Home
 * @Author       : RenChen
 * @Date         : 2021-10-30 20:44:02
 * @LastEditors  : RenChen
 * @LastEditTime : 2021-11-02 14:36:01
-->
<template>
  <div class="box">
    首页
    <nuxt-link :to="{path: 'enterprice'}">
      企业
    </nuxt-link>
  </div>
</template>

<script>
export default {
  name: 'Home',
  async asyncData ({ app }) {
    const userInfo = await app.api.getUserInfo()

    return userInfo
  },
  async mounted () {
    const userInfo = await this.$api.getUserInfo()

    console.log(userInfo)

    const obj = { a: 1, b: 2 }

    console.log(this.$_.pick(obj, ['a']))
  }
}
</script>

<style lang="scss" scoped>
$blue: #0000ff;
.box{
  color: $blue;
}
</style>
