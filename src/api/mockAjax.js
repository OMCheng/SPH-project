import axios from "axios";
import nProgress from "nprogress";
import 'nprogress/nprogress.css';
const requests=axios.create({
    baseURL:'/mock',
    timeout:5000
});
requests.interceptors.request.use(config=>{
    nProgress.start();
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