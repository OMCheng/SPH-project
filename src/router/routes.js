import Home from '../views/Home/index.vue';
import Login from '../views/Login/index.vue';
import Search from '../views/Search/index.vue';
import Register from '../views/Register/index.vue';
import Detail from '../views/Detail/index.vue';
import AddCartSuccess from '../views/AddCartSuccess/index.vue';
import ShopCart from '../views/ShopCart/index.vue';
import Trade from '../views/Trade';
import Pay from '../views/Pay';
export default [
    {
        path: '/',
        redirect: '/home'
    },
    {
        path: '/home',
        component: Home,
        meta: { show: true }
    },
    {
        name: 'login',
        path: '/login',
        component: Login,
        meta: { show: false }
    },
    {
        name: 'register',
        path: '/register',
        component: Register,
        meta: { show: false }
    },
    {
        name: 'search',
        path: '/search/:keyword?',
        component: Search,
        meta: { show: true }
    },
    {
        name: 'detail',
        path: '/detail/:skuId?',
        component: Detail,
        meta: { show: true },
        
    },
    {
        name: 'addcartsuccess',
        path: '/addcartsuccess',
        component: AddCartSuccess,
        meta: { show: true },
        
    },
    {
        name: 'shopcart',
        path: '/shopcart',
        component: ShopCart,
        meta: { show: true },
        
    },
    {
        name: 'trade',
        path: '/trade',
        component: Trade,
        meta: { show: true },
        
    },
    {
        name: 'pay',
        path: '/pay',
        component: Pay,
        meta: { show: true },
        
    }
]