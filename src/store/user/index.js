import { setToken, getToken, removeToken } from '@/utils/token';
import { reqSendCode, reqRegister, reqLogin, reqUserInfo, reqLogout, reqAddressInfo } from '@/api'
const state = {
  phoneCode: '',
  token: getToken(),
  userInfo: {},
};
const mutations = {
  GETCODE(state, phoneCode) {
    state.phoneCode = phoneCode
  },
  USERLOGIN(state, token) {
    state.token = token;
  },
  GETUSERINFO(state, userInfo) {
    state.userInfo = userInfo
  },
  CLEAR(state) {
    state.userInfo = '';
    state.token = '';
    removeToken();
  },

};
const getters = {
};
const actions = {
  async getCode({ commit }, phone) {
    let result = await reqSendCode(phone);
    if (result.code == 200) {
      commit('GETCODE', result.data)
      return 'ok'
    } else {
      return Promise.reject(new Error('failed'))
    }
  },
  async userRegister({ commit }, user) {
    let result = await reqRegister(user);
    console.log(result);
    if (result.code == 200) {
      return 'ok'
    } else {
      return Promise.reject(new Error('failed'))

    }
  },
  async Login({ commit }, user) {
    let result = await reqLogin(user);
    console.log(result);
    if (result.code == 200) {
      commit('USERLOGIN', result.data.token)
      setToken(result.data.token)
      return 'ok'
    } else {
      return Promise.reject(new Error('failed'))
    }
  },
  async getUserInfo({ commit }) {
    let result = await reqUserInfo();
    if (result.code == 200) {
      commit('GETUSERINFO', result.data);
      return 'ok'
    } else {
      console.log(result)
      return Promise.reject(new Error('failed'))
    }
  },
  async userLogout({ commit }) {
    let result = await reqLogout();
    if (result.code == 200) {
      commit('CLEAR');
      return 'ok'
    } else {
      return Promise.reject(new Error('failed'))
    }
  }
};

export default {
  actions,
  state,
  getters,
  mutations
}
