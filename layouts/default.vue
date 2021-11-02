<!--
 * @Description  : 布局
 * @Author       : RenChen
 * @Date         : 2021-10-30 17:29:32
 * @LastEditors  : RenChen
 * @LastEditTime : 2021-11-02 14:55:03
-->
<template>
  <div>
    <Header />
    <nuxt />
    <Footer />
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
export default {
  components: {
    Header,
    Footer
  }
}
</script>
