<template>
  <div class='newsinfo-container' >
<h3 class='title'>{{getlist.title}}</h3>    
<p class='subtitle'>
	
	<span>发表时间：{{getlist.add_time|dateFormat('YYYY-MM-DD HH:mm:ss')}}</span>
		<span>点击:{{getlist.click}}次</span>
</p>
<hr>
<div class="content" v-html="getlist.content">


</div>


     <comment-box v-bind:id='this.id'></comment-box>

  </div>


</template>

<script>
  import { Toast } from 'mint-ui'
export default {
  data() {
    return {
    id:this.$route.params.id,
    getlist: {} // 新闻对象
    };
  },
  created() {
    this.getNewsInfo();
  },
 methods:{
 getNewsInfo(){

 this.$http.get("api/getnew/"+this.id).then(result => {
        // console.log(result.body);
        if (result.body.status === 0) {
          // 成功了
          this.getlist = result.body.message[0];
 
        } else {
          // 失败的
          Toast("加载失败。。。");
        }
      });
    }
  },
  components:{
    "comment-box":comment
  }
};

import comment from '../subcomponents/comment.vue'

</script>

<style lang="scss" type="">
.newsinfo-container{
padding: 0 4px;
.title{
	font-size: 16px;
	text-align: center;
	margin: 15px 0;
	color: red;
}
.subtitle{

	font-size: 13px;
	color:blue;
	display: flex;
	justify-content: space-between;
}
}

.content{
  padding-left: 5px;
  padding-right: 5px;
}
</style>
