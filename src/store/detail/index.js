import { reqGoodInfo ,reqAddToCart} from "@/api";

import { getUUID } from "@/utils/uuid_token.js";

const state = {
    goodInfo: {},
    uuid_token:getUUID()
};
const mutations = {
    GETGOODINFO(state, goodInfo) {
        state.goodInfo = goodInfo
    }
};
const getters = {
    categoryView(state) {
        return state.goodInfo.categoryView||{};
    },
    skuInfo(state) {
        return state.goodInfo.skuInfo||{};
    },
    spuSaleAttrList(state) {
        return state.goodInfo.spuSaleAttrList||[];
    },
};
const actions = {
    async getGoodInfo({ commit }, skuId) {
        let result = await reqGoodInfo(skuId);
        if (result.code == 200) {
            commit('GETGOODINFO', result.data)
        }
    },
    async addOrUpdateShopCart({commit},{skuId,skuNum}){
        let result=await reqAddToCart(skuId,skuNum)
        if(result.code==200){
            return 'ok'
        }
        else{
            return Promise.reject(new Error('faile'));
        }
    //    if(result.code==200){
    //     console.log('123')
    //    }

     }
};


export default {
    actions,
    state,
    getters,
    mutations
}
