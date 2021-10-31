# 699pic

## Build Setup

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate

For detailed explanation on how things work, check out the [documentation](https://nuxtjs.org).

# 生命周期 https://nuxtjs.org/docs/concepts/nuxt-lifecycle
  # SSR:
  nuxtServerInit
    适用场景 store 操作

  middleware
    执行流程：
    nuxt.config.js -> 布局 -> 页面

  validate
    参数的有效性 -> 校验业务   失败自动跳转错误页面

  异步业务逻辑，读取服务器数据
  asyncData
    返回给组件
  fetch
    提交给vuex

  # SSR && CSR:
  beforeCreate
  created

  # CSR: window this->组件
  beforeMount
  mounted
  beforeUpdate
  updated
  beforeDestroy
  destroyed

# 路由 https://nuxtjs.org/docs/features/file-system-routing
  约定式
    展示区：<nuxt />
    声明试跳转：<nuxt-link :to="{ name: name, params: {key: value}, query: { key: value} }"></nuxt-link>
      name: 目录名-其他目录名-文件名
      params: key 对等文件名
    
    子路由：
      目录代表子路由，子路由内部的文件代表同级路由

    展示区层级控制
      | PATH           | FILE           |
      | :------------- | :------------- |
      | '/'            | 'index.vue'    |
      | '/a'           | 'a/index.vue'  |
      | '/a/123'       | 'a/_id.vue'    |
      | '/a/b'         | 'a/b.vue'      |
    
      page/一级展示/二级展示
                  /index.vue  会在一级展示
    
  路由守卫
    前置  依赖中间件middleware, plugins插件
      全局守卫： nuxt.config 指向middleware
              layouts定义中间件
      组件独享守卫：
              middleware
      插件全局守卫
              app.router.beforeEach
    
    后置
      组件独享守卫
              beforeRouteLeave钩子
      插件全局守卫
              app.router.afterEach
