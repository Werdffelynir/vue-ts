import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import vuetify from './plugins/vuetify';


Vue.config.productionTip = false;

const option: any = {
  router,
  store,
  vuetify,
  render: (handler: any): any => handler(App),
};

new Vue({...option}).$mount('#app');
