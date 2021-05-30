import Vue from 'vue'
import App from './App.vue'
import router from './router'

import { ValidationProvider, ValidationObserver } from 'vee-validate';
import { extend } from 'vee-validate';
import { required, regex, max } from 'vee-validate/dist/rules';

Vue.component('ValidationProvider', ValidationProvider);
Vue.component('ValidationObserver', ValidationObserver);

extend('required', {
  ...required,
  message: 'This field is required'
});

extend('regex', {
  ...regex,
  message: 'Url is not valid'
});

extend('max', {
  ...max,
  message: 'The field cannot be greater than 20 characters'
});


Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
