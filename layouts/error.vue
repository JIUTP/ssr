<!--
 * @Description  : error
 * @Author       : RenChen
 * @Date         : 2021-10-30 20:44:28
 * @LastEditors  : RenChen
 * @LastEditTime : 2021-10-30 20:53:48
-->
<template>
  <div>
    <h1 v-if="error.statusCode">
      {error.message}
    </h1>
    <h1 v-else>
      异常
    </h1>
  </div>
</template>

<script>
export default {
  // 接收错误信息  error: {statusCode,message}
  props: {
    error: {
      type: Object,
      required: true
    }
  }
}
</script>
