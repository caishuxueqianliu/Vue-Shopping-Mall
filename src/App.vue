<template>
  <div class="app-container">



<mt-header fixed title="半成品" style='font-size: 12px'>
  <span slot='left' @click='back' v-show='flag'>
  <mt-button icon='back' style='color: white'>返回</mt-button>
</span>
</mt-header>
  <transition>
      <router-view></router-view>
    </transition>


 

   <nav class="mui-bar mui-bar-tab">
      <router-link class="mui-tab-item" to="/home">
        <span class="mui-icon mui-icon-home"></span>
        <span class="mui-tab-label">首页</span>
      </router-link>
      <router-link class="mui-tab-item" to="/member">
        <span class="mui-icon mui-icon-contact"></span>
        <span class="mui-tab-label">会员</span>
      </router-link>

      <router-link class="mui-tab-item" to="/shopcar">
        <span class="mui-icon mui-icon-extra mui-icon-extra-cart">
          <span class="mui-badge" id='badge'>{{$store.getters.getAllCount}}</span>
        </span>
        <span class="mui-tab-label">购物车</span>
      </router-link>
      
      <router-link class="mui-tab-item" to="/search">
        <span class="mui-icon mui-icon-search"></span>
        <span class="mui-tab-label">搜索</span>
      </router-link>
    </nav>



  </div>
</template>

<script>


export default {
  name: 'app',

  data:function(){

    return {
      selected:'0',
      flag:true
            }
  },
  created(){
this.flag=this.$route.path==='/home'?false:true
   },
  methods:{
    back(){
            this.$router.go(-1)
           

    }
  },
  watch:{
    '$route.path':function(newVal){

      if(newVal==='/home'){
        this.flag=false;
      }
      else {
        this.flag=true;
      }
      // body... 
    }
  }
}
</script>

<style lang="scss" scoped="" type="text/css">
.mint-header{
  background-color: black;
  z-index:999;
}
.v-enter {
  opacity: 0;
  transform: translateX(100%);

}

.v-leave-to {
  opacity: 0;
  transform: translateX(-100%);
    position: absolute;
}

.v-enter-active,
.v-leave-active {
  transition: all 0.5s ease;
}



.app-container {
  padding-top: 40px;
  overflow-x: hidden;
  padding-bottom: 50px;
}
</style>
