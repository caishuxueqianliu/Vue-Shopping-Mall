import VueRouter from 'vue-router'

// 导入 Account 组件
import home from './main/home.vue'
import message from './main/message.vue'

// 导入Account的两个子组件
import shopcar from './main/shopcar.vue'
import search from './main/search.vue'
import  NewsList from './news/NewsList.vue'
import  Newsinfo from './news/Newsinfo.vue'
import  photoList from './photos/photoList.vue'
import  photoinfo from './photos/photoinfo.vue'
import  goodsList from './goods/goodsList.vue'
import  goodsinfo from './goods/goodsinfo.vue'
import  goodsdesc from './goods/goodsdesc.vue'
import  goodscomment from './goods/goodscomment.vue'
// 3. 创建路由对象


var router = new VueRouter({
  routes: [
         {path:'/',redirect:'/home'},
     { path: '/home', component: home },
        { path: '/message', component: message },
           { path: '/shopcar', component: shopcar },
              { path: '/search', component: search },
                { path: '/home/NewsList', component: NewsList},
                 { path: '/home/photoList', component:photoList},
                { path: '/home/goodsList', component:goodsList},
                   { path: '/home/goodsdesc/:id', component:goodsdesc,name:"goodsdesc"},
                      { path: '/home/goodscomment/:id', component:goodscomment,name:"goodscomment"},
                { path: '/home/goodsinfo/:id', component:goodsinfo,name:'goodsinfo'},
                 { path: '/home/photoinfo/:id', component:photoinfo},
                 { path: '/home/Newsinfo/:id', component:Newsinfo}
  ],
 
  linkActiveClass: 'mui-active' 
})

// 把路由对象暴露出去
export default router