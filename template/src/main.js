import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
if (options.echarts) {
  import echarts from 'echarts'
}

Vue.config.productionTip = false

Vue.use(ElementUI);

if (options.echarts) {
  Vue.prototype.$echarts = echarts
}

var vue=new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
export default vue