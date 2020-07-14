import Vue from 'vue'
import App from './App'
import Router from 'vue-router'
import routes from './router/index'
import VueSession from 'vue-session'

Vue.config.productionTip = false

//Global Component
import adminHeader from './components/adminHeader'
Vue.component("adminHeader", adminHeader);
import adminFooter from './components/adminFooter'
Vue.component("adminFooter", adminFooter);

Vue.use(Router);

var options = {
  persist: true
}
Vue.use(VueSession, options)

const router1 = new Router({
  routes: routes,
  mode: "history"
});

new Vue({
  el: '#app',
  router: router1,
  components: { App },
  template: '<App/>'
})
