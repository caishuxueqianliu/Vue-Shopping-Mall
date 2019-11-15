<template>
  <div>
    <ul class="mui-table-view">
        <li class="mui-table-view-cell mui-media" v-for="item in newsList" :key="item.id">
     <router-link :to="'/home/Newsinfo/' + item.id">  
            <img class="mui-media-object mui-pull-left" :src="item.img_url">
            <div class="mui-media-body">
               <h1>{{ item.title }}</h1>
              <p class='mui-ellipsis'><span>发表时间：{{ item.add_time| dateFormat('YYYY-MM-DD HH:mm:ss')}}</span>
              <span>点击：{{item.click}}次</span></p>
            </div>
             </router-link>
        </li>
     

      </ul>
   


  </div>
</template>
<script>
  import { Toast } from 'mint-ui'
export default {
  data() {
    return {
      newsList: [] ,

    };
  },
  created() {
    this.getnews();
  },
  methods: {
    getnews() {
      // 获取轮播图数据的方法
      this.$http.get("http://www.liulongbin.top:3005/api/getnewslist").then(result => {
        // console.log(result.body);
        if (result.body.status === 0) {
          // 成功了
          this.newsList = result.body.message;
        } else {
          // 失败的
          Toast("加载失败。。。");
        }
      });
    }
  }
};




</script>

<style lang="scss" type="">
.mui-table-view{
    li{
      h1{ 
      font-size: 14px;
    }
 
.mui-ellipsis{
  font-size: 12px;
  color: blue;
  display: flex;
  justify-content: space-between;
}



     }   


}
</style>
