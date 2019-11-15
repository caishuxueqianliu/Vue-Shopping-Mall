import Vue from 'vue'

import App from './App.vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
// 
import Vueresource from 'vue-resource'
Vue.use(Vueresource)
import Vuex from 'vuex'
Vue.use(Vuex)
Vue.http.options.root='http://www.liulongbin.top:3005';

Vue.http.options.emulateJSON=true;  //设置返回的数据格式为JSON
import router from './router.js'

import 'mint-ui/lib/style.css'
 import  MintUI from 'mint-ui';
// 安装 图片预览插件
import VuePreview from 'vue-preview'
Vue.use(VuePreview)
 Vue.use(MintUI);
// Vue.component(Header.name, Header)
// import { Header } from 'mint-ui'
// import { Swipe, SwipeItem } from 'mint-ui';

// Vue.component(Swipe.name, Swipe);
// Vue.component(SwipeItem.name, SwipeItem);

import moment from 'moment'
// import { Header, Swipe, SwipeItem } from 'mint-ui'
// Vue.component(Header.name, Header)
// Vue.component(Swipe.name, Swipe)
// Vue.component(SwipeItem.name, SwipeItem)

// import {Button} from 'mint-ui';

// Vue.component(Button.name, Button);
 Vue.filter('dateFormat', function(dataStr,pattern="YYYY-MM-DD HH:mm:ss"){

 	return moment(dataStr).format(pattern);
 })
 import './lib/mui/css/mui.min.css'
 import './lib/golbal.css'

 // 导入扩展图标样式
import './lib/mui/css/icons-extra.css'

// import { Lazyload } from 'mint-ui';

// Vue.use(Lazyload);

// 每次刚进入 网站，肯定会 调用 main.js 在刚调用的时候，先从本地存储中，把 购物车的数据读出来，放到 store 中
var car = JSON.parse(localStorage.getItem('car') || '[]')

var store=new Vuex.Store({
state:{
	car:car
},
mutations:{

   addToCar(state, goodsinfo) {
      // 点击加入购物车，把商品信息，保存到 store 中的 car 上
      // 分析：
      // 1. 如果购物车中，之前就已经有这个对应的商品了，那么，只需要更新数量
      // 2. 如果没有，则直接把 商品数据，push 到 car 中即可

      // 假设 在购物车中，没有找到对应的商品
      var flag = false

      state.car.some(item => {
        if (item.id == goodsinfo.id) {
          item.count += parseInt(goodsinfo.count)
          flag = true
          return true
        }
      })

      // 如果最终，循环完毕，得到的 flag 还是 false，则把商品数据直接 push 到 购物车中
      if (!flag) {
        state.car.push(goodsinfo)
      }

      // 当 更新 car 之后，把 car 数组，存储到 本地的 localStorage 中
      localStorage.setItem('car', JSON.stringify(state.car))
    },
    removeFormCar(state, id) {
      // 根据Id，从store 中的购物车中删除对应的那条商品数据
      state.car.some((item, i) => {
        if (item.id == id) {
          state.car.splice(i, 1)
          return true;
        }
      })
      // 将删除完毕后的，最新的购物车数据，同步到 本地存储中
      localStorage.setItem('car', JSON.stringify(state.car))
    },
    updateGoodsinfo(state,goodsinfo){
 state.car.some((item, i) => {
        if (item.id == goodsinfo.id) {
        item.count=parseInt(goodsinfo.count)
          return true;
        }
          
})
   localStorage.setItem('car', JSON.stringify(state.car))

    },
    updateGoodsSelected(state, info) {
      state.car.some(item => {
        if (item.id == info.id) {
          item.selected = info.selected
        }
      })
      // 把最新的 所有购物车商品的状态保存到 store 中去
      localStorage.setItem('car', JSON.stringify(state.car))
    }
  },
 getters:{
 // 相当于 计算属性，也相当于 filters
    getAllCount(state) {
      var c = 0;
      state.car.forEach(item => {
        c += item.count
      })
      return c;
            

 },
    getGoodsCount(state) {
      var o = {}
      state.car.forEach(item => {
        o[item.id] = item.count
      })
      return o
    },
    getGoodsSelected(state) {
      var o = {}
      state.car.forEach(item => {
        o[item.id] = item.selected
      })
      return o
    },
    getGoodsCountAndAmount(state) {
      var o = {
        count: 0, // 勾选的数量
        amount: 0 // 勾选的总价
      }
      state.car.forEach(item => {
        if (item.selected) {
          o.count += item.count
          o.amount += item.price * item.count
        }
      })
      return o
    }
  }
})



new Vue({
	el:'#app',
  render: c => c(App),
  router,
  store

})

/*new Vue({

render:function(createElements){


	return createElements(App)
}

}).$mount('#app')

*/
