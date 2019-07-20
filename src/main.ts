import Vue from 'vue';
import './plugins/vuetify'
import App from './App.vue';
import router from './router';
import store from './store';
import firebase from 'firebase';


Vue.config.productionTip = false;
var firebaseConfig = {
  apiKey: "AIzaSyA-xqXiANGxyMExi7hDwTWSD__QCP_jvd8",
  authDomain: "my-address-14313.firebaseapp.com",
  databaseURL: "https://my-address-14313.firebaseio.com",
  projectId: "my-address-14313",
  storageBucket: "",
  messagingSenderId: "968324870920",
  appId: "1:968324870920:web:25e4874a4ba66ea5"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
