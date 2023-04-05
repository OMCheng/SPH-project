import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import TypeNav from './components/TypeNav'
import Carousel from './components/Carousel'
import Pagination from '@/components/Pagination'
// import {reqCategoryList} from '@/api'
import  '@/mock/mockServer'
import 'swiper/css/swiper.css'



// console.log(reqGetSearchInfo({}))

Vue.component(TypeNav.name, TypeNav)
Vue.component(Carousel.name, Carousel)
Vue.component(Pagination.name, Pagination)

import * as API from "@/api";
new Vue({
  router,
  store, 
  render: h => h(App),
  beforeCreate(){
    Vue.prototype.$bus=this
    Vue.prototype.$API=API
  },
}).$mount('#app')
