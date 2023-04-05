import requests from "./ajax";
import mockRequests from './mockAjax'

export const reqCategoryList=()=>requests({url:'/product/getBaseCategoryList',method:'get'});
export const reqBannerList=()=>mockRequests({url:'/banner',method:'get'});
export const reqFloorList=()=>mockRequests({url:'/floor',method:'get'});
export const reqGetSearchInfo=(data)=>requests({url:'/list',method:'post',data:data});
export const reqGoodInfo=(skuId)=>requests({url:`/item/${skuId}`,method:'get'});
export const reqAddToCart=(skuId,skuNum)=>requests({url:`/cart/addToCart/${ skuId }/${ skuNum }`,method:'post'});
export const reqShopCartList=()=>requests({url:"/cart/cartList",method:'get'});
export const reqDeleteGoods=(skuId)=>requests({url:`/cart/deleteCart/${skuId}`,method:'delete'});
export const reqUpdateChecked=(skuId,isChecked)=>requests({url:`/cart/checkCart/${skuId}/${isChecked}`,method:'get'});
export const reqSendCode=(phone)=>requests({url:`/user/passport/sendCode/${phone}`,method:'get'});
export const reqRegister=(data)=>requests({url:`/user/passport/register`,method:'post',data});
export const reqLogin=(data)=>requests({url:`/user/passport/login`,method:'post',data});
//api/user/passport/auth/getuserinfo
export const reqUserInfo=()=>requests({url:'user/passport/auth/getUserInfo',method:'get'});
export const reqLogout=()=>requests({url:'/user/passport/logout',method:'get'});
export const reqAddressInfo=()=>requests({url:'/user/userAddress/auth/findUserAddressList',method:'get'});
export const reqOrderInfo=()=>requests({url:'/order/auth/trade',method:'get'});
export const reqSubmitOrder=(tradeNo,data)=>requests({url:`/order/auth/submitOrder?tradeNo=${tradeNo}`,method:'post',data});
