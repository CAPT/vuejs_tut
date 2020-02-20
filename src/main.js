import Vue from "vue";
import App from "@/App.vue";
import router from "@/router/index.js";
import "bootstrap/dist/css/bootstrap.css";

import {
  extend,
  localize,
  ValidationProvider,
  ValidationObserver
} from "vee-validate";
import { required, email } from "vee-validate/dist/rules";
import ru from "vee-validate/dist/locale/ru.json";
import en from "vee-validate/dist/locale/en.json";
localize({ ru, en });
localize("ru");

Vue.component("ValidationProvider", ValidationProvider);
Vue.component("ValidationObserver", ValidationObserver);

extend("required", required);
extend("email", email);

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
