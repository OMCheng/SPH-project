import Vue from 'vue';
import VueRouter from 'vue-router';
import routes from './routes';
import store from '@/store';

//重写push方法
let originPush = VueRouter.prototype.push;
let originReplace = VueRouter.prototype.replace;
VueRouter.prototype.push = function (location, resolve, reject) {
  if (resolve && reject) {
    originPush.call(this, location, resolve, reject)
  }
  else {
    originPush.call(this, location, () => { }, () => { })
  }
}
VueRouter.prototype.replace = function (location, resolve, reject) {
  if (resolve && reject) {
    originReplace.call(this, location, resolve, reject)
  }
  else {
    originReplace.call(this, location, () => { }, () => { })
  }
}

Vue.use(VueRouter)


const router = new VueRouter({
  routes,
  scrollBehavior(to, from, savedPosition) {
    return { x: 0, y: 0 }

  }
});
router.beforeEach(async (to, from, next) => {
  let hasToken = store.state.user.token;
  //用户信息
  let hasNickName = store.state.user.nickName;
  //用户登录
  if (hasToken) {
    //用户登录了,不能去login
    if (to.path == "/login") {
      next('/home');
    } else {
      //用户登陆了,而且还有用户信息【去的并非是login】
      if (hasNickName) {
        next();
      } else {
        //用户登陆了,但是没有用户信息 
        try {
          //发请求获取用户信息以后在放行
          await store.dispatch('getUserInfo');
          next();
        } catch (error) {
          //用户没有信息，还携带token发请求获取用户信息【失败】
          //token【学生证失效了】
          //token失效:本地清空数据、服务器的token通知服务器清除
          await store.dispatch('userLogout');
          //回到登录页，重新获取一个新的学生证
          next('/login');
        }
      }
    }
  } else {
    //用户未登录||目前的判断都是放行.将来这里会'回手掏'增加一些判断
    //用户未登录:不能进入/trade、/pay、/paysuccess、/center、/center/myorder  /center/teamorder
    let toPath = to.path;
    if (toPath.indexOf('trade') != -1 || toPath.indexOf('pay') != -1 || toPath.indexOf('center') != -1) {
      next('/login?redirect=' + toPath);
    } else {
      next();
    }
  }
})

export default router
