<!--
 * @Description  : Home
 * @Author       : RenChen
 * @Date         : 2021-10-30 20:44:02
 * @LastEditors  : RenChen
 * @LastEditTime : 2021-10-31 20:39:14
-->
<template>
  <div class="box">首页</div>
</template>

<script>
export default {
  name: 'Home',
  async asyncData ({ app }) {
    const userInfo = await app.api.getUserInfo()

    return userInfo
  }
}
</script>

<style lang="scss" scoped>
$blue: #0000ff;
.box{
  color: $blue;
}
</style>
