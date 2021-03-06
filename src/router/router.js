//引入vue
import Vue from 'vue'
//引入vue-router
import VueRouter from 'vue-router'
//第三方库需要use一下才能用
Vue.use(VueRouter)
//引用页面
import login from '../components/login.vue'
//引用页面
import aceEditor from '../components/ace-editor.vue'
import register from '../components/register.vue'
import findBackPwd from '../components/findBackPassword.vue'
import userHub from '../components/user-hub.vue'
import noteList from '../components/noteList.vue'
import comment from '../components/comment.vue'
import welcome from '../components/welcome.vue'

//定义routes路由的集合，数组类型
const routes = [
    //单个路由均为对象类型，path代表的是路径，component代表组件
    {path:'/login',name:'login',component:login},
    {path:'/editor/:noteName',name:'editorWithParams',component:aceEditor},
    {path:'/editor',name:'editorWithoutParams',component:aceEditor},
    {path:'',name:'home',redirect:"/welcome"},
    {path:'/register',name:'register',component:register},
    {path:'/findBackPwd',name:'findBackPwd',component:findBackPwd},
    {path:'/user-hub',name:'uerHub',component:userHub},
    {path:'/noteList',name:'noteList',component:noteList},
    {path:'/comments',name:'comments',component:comment},
    {path:'/welcome',name:'welcome',component:welcome}
]

//实例化VueRouter并将routes添加进去
const router = new VueRouter({
//ES6简写，等于routes：routes
    routes
});

//抛出这个这个实例对象方便外部读取以及访问
export default router