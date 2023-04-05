import axios from "axios";
import nProgress from "nprogress";
import 'nprogress/nprogress.css';
import store from "@/store";
const requests=axios.create({
    baseURL:'/api',
    timeout:5000
});
requests.interceptors.request.use(config=>{
    nProgress.start();
    if(store.state.detail.uuid_token){
        config.headers.userTempId=store.state.detail.uuid_token
    };
    if(localStorage.getItem('token')){
        config.headers.token=localStorage.getItem('token');
    }
    return config;
    //config是一个配置对象，里面有一个header请求头
}) 
requests.interceptors.response.use((res)=>{
    nProgress.done();
   return res.data
},(err)=>{
    return Promise.reject(new Error('faile'));
})
export default requests;