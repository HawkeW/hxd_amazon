import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import {routes} from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.config.productionTip = false

Vue.use(ElementUI);
Vue.use(VueRouter);

const router = new VueRouter({
	mode:'history',
	routes
})



new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
