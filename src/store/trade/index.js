import { reqAddressInfo, reqOrderInfo } from '@/api'
const state = {
    addressInfo: [],
    orderInfo: {},

};
const mutations = {
    GETADDRESS(state, addressInfo) {
        state.addressInfo = addressInfo || {};
    },
    GETORDERINFO(state, orderInfo) {
        state.orderInfo = orderInfo || {};
    }
};
const actions = {
    async getAddressInfo({ commit }) {
        let result = await reqAddressInfo();
        if (result.code == 200) {
            commit('GETADDRESS', result.data)
            return 'ok'
        } else {
            return Promise.reject(new Error('failed'));
        }
    },
    async getOrderInfo({ commit }) {
        let result = await reqOrderInfo();
        if (result.code == 200) {
            commit('GETORDERINFO', result.data)
            return 'ok'
        } else {
            return Promise.reject(new Error('failed'));
        }
    }
};
const getters = {};
export default {
    state,
    mutations,
    actions,
    getters
}