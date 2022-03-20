import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import firebase from 'firebase'
Vue.config.productionTip = false
const firebaseConfig = {
  apiKey: "AIzaSyBm3klhUOQO4Gdctbt6aW3AidupPZIL_Sg",
  authDomain: "cabinet-medical-database.firebaseapp.com",
  projectId: "cabinet-medical-database",
  storageBucket: "cabinet-medical-database.appspot.com",
  messagingSenderId: "320566362395",
  appId: "1:320566362395:web:58664383469d23442793be"
};


firebase.initializeApp(firebaseConfig);
new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')


const db = firebase.firestore();

db.settings({timestampsInSnapshots:true})

export default db;
