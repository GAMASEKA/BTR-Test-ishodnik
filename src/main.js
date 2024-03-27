import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import HomePage from './components/HomePage.vue'
import SecondPage from './components/SecondPage.vue'

Vue.use(VueRouter)

const routes = [
{ path: '/', component: HomePage },
{ path: '/second-page', component: SecondPage }
]

const router = new VueRouter({
routes
})

new Vue({
el: '#app',
router,
render: h => h(App)
})
