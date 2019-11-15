<template>
	
<div class='photoinfo-container'>

<h3>{{imagelist.title}}</h3>
<p class='subtitle'>
	
<span>发表时间:{{imagelist.add_time| dateFormat('YYYY-MM-DD HH:mm:ss')}}</span>
<span>点击次数:{{imagelist.click}}次</span>
</p>

<hr>
<div class="thumbs">
    <!--   <img class="preview-img" v-for="(item, index) in list" :src="item.src" height="100" @click="$preview.open(index, list)" :key="item.src"> -->
      <vue-preview :slides="list"></vue-preview>
   </div>
<div class='content' v-html="imagelist.content"></div>
  <comment :id="id"></comment>



</div>
</template>



<script type="text/javascript">
	import comment from "../subcomponents/comment.vue";
import { Toast } from 'mint-ui'
export default{
           data(){
           return{
           	list:[],
id:this.$route.params.id,
imagelist:{}
};
},
created(){
this.getphotoinfo();    
 this.getThumbs();
            },
 methods:{
getphotoinfo(){
this.$http.get("api/getimageInfo/"+this.id).then(result => {

if(result.body.status === 0) {

 this.imagelist = result.body.message[0];

        } else {
          // 失败的
          Toast("加载失败。。。");

        }
      });
    },
     getThumbs() {
      // 获取缩略图
    this.$http.get("api/getthumimages/" + this.id).then(result => {
        if (result.body.status === 0) {
          // 循环每个图片数据，补全图片的宽和高
       result.body.message.forEach(item => {
            item.w = 600;
            item.h = 400;
            item.msrc=item.src
          });
          // 把完整的数据保存到 list 中
          this.list = result.body.message;
        }
      });
    }
             

            },

components: {
    // 注册 评论子组件
     comment
  }





	}

</script>

<style lang="scss" type="">
.photoinfo-container {
  padding: 3px;
  h3 {
    color: #26a2ff;
    font-size: 15px;
    text-align: center;
    margin: 15px 0;
  }
  .subtitle {
    display: flex;
    justify-content: space-between;
    font-size: 13px;
  }

  .content {
    font-size: 13px;
    line-height: 30px;
  }

  .thumbs{
    img{
      margin: 10px;
      box-shadow: 0 0 8px #999;
    }
  }
}
</style>