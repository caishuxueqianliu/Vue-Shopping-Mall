<template>
	<div>      
<swiper :lunbotuList='lunbotuList' :isfull='true'></swiper>

 <ul class="mui-table-view mui-grid-view mui-grid-9">

      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="./home/NewsList">
              <img src="../images/menu1.png" alt="">
              <div class="mui-media-body">新闻资讯</div></router-link></li>

      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="./home/photoList">
              <img src="../images/menu2.png" alt="">
              <div class="mui-media-body">图片分享</div></router-link></li>

      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="./home/goodsList">
              <img src="../images/menu3.png" alt="">
              <div class="mui-media-body">商品购买</div></router-link></li>

      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="#">
              <img src="../images/menu4.png" alt="">
              <div class="mui-media-body">留言反馈</div></router-link></li>

      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="#">
              <img src="../images/menu5.png" alt="">
              <div class="mui-media-body">视频专区</div></router-link></li>

      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="#">
              <img src="../images/menu6.png" alt="">
              <div class="mui-media-body">联系我们</div></router-link></li>
  </ul> 









     </div>
</template>


<script>

import { Toast } from 'mint-ui'

import swiper from '../subcomponents/swiper.vue'
/*export default{
      data:function(){
      	return {
      		lunbotuList:[]
      	};
      },
      created(){
      	this.getlbt();
      },
      methods:{
      	getlbt(){
      		this.$http.get("http://www.liulongbin.top:3005/api/getlunbo").then(result=>
            {
     if(result.body.status===0){
	this.lunbotuList=result.body.message;
}
else{
	Toast('error');
}
      		});
      	}
      }


}

*/
export default {
  data() {
    return {
      lunbotuList: [] // 保存轮播图的数组
    };
  },
  created() {
    this.getLunbotu();
  },
  methods: {
    getLunbotu() {
      // 获取轮播图数据的方法
      this.$http.get("api/getlunbo").then(result => {
        // console.log(result.body);
        if (result.body.status === 0) {
          // 成功了
          this.lunbotuList = result.body.message;
        } else {
          // 失败的
          Toast("加载轮播图失败。。。");
        }
      });
    }
  },
  components:{
    swiper
  }
};


</script>



<style lang="scss" scoped="" type="text/css">
	


.mui-grid-view.mui-grid-9{
  background-color: white;
  border:none;
  img {
    width: 60px;
    height: 60px;
  }

  .mui-media-body{
    font-size: 13px;
  }
}
.mui-grid-view.mui-grid-9.mui-table-view-cell{



  border: none;
}

.banquan{
  position: relative;
 top:40px;
  color: red;
  font-size: 30px;
}


</style>