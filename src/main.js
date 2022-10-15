import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import request from './utils/request';

Vue.config.productionTip = false

Vue.use(ElementUI,{size:"large"});

Vue.prototype.request=request

import store from './store/index'

new Vue({
  router,
  render: h => h(App),
  beforeCreate() {
		Vue.prototype.$bus = this //安装全局事件总线
	},
  store : store
}).$mount('#app')
