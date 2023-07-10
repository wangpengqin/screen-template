import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
<%_ if (options.echarts) { _%>
  import echarts from 'echarts'
<%_ } _%>

Vue.config.productionTip = false

Vue.use(ElementUI);

<%_ if (options.echarts) { _%>
  Vue.prototype.$echarts = echarts
<%_ } _%>

var vue=new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
export default vue