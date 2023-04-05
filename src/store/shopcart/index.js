import { reqShopCartList, reqDeleteGoods, reqUpdateChecked } from "@/api";
const state = {
    shopcartList: []
};
const mutations = {
    GETSHOPCARTLIST(state, shopcartList) {
        state.shopcartList = shopcartList;

    }
};
const getters = {
    cartList(state) {
        return state.shopcartList[0] || {};
    }
};
const actions = {
    async getShopCartList({ commit }) {
        let result = await reqShopCartList();
        if (result.code == 200) {
            commit('GETSHOPCARTLIST', result.data)
        }
    },
    async deleteGoods({ commit }, skuId) {
        let result = await reqDeleteGoods(skuId);
        if (result.code == 200) {
            return 'ok'
        } else {
            return Promise.reject(new Error('failed'))
        }
    },
    async updateChecked({ commit }, { skuId, isChecked }) {
        let result = await reqUpdateChecked(skuId, isChecked);
        if (result.code == 200) {
            return 'ok'
        } else {
            return Promise.reject(new Error('xxx'))
        }
    },
    deleteChosenGoods({ dispatch, getters }) {
        let promiseAll = [];
        getters.cartList.cartInfoList.forEach(element => {
            let promise = element.isChecked == 1 ? dispatch('deleteGoods', element.skuId) : '';
            promiseAll.push(promise)
        });
        return Promise.all(promiseAll)
    },
    allChecked({ dispatch, getters }, isChecked) {
        let promiseAll = [];
        getters.cartList.cartInfoList.forEach(element => {
            let promise = dispatch('updateChecked', { skuId: element.skuId, isChecked: isChecked });
            promiseAll.push(promise);
        })
        return Promise.all(promiseAll);
    }
};


export default {
    actions,
    state,
    getters,
    mutations
}
