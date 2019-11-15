<template>
	

<div class='cmt-container'>
	<h3> 发表评论</h3>
	<hr>

<textarea placeholder="请输入内容（最多120字）" maxlength="120" v-model='msg'></textarea>

             <mt-button size='large' type='primary' @click='postComment'>发表评论</mt-button>
<div class='cmt-list'>
  
<div class='cmt-item' v-for='(item,i) in comments' v-bind:key="item.add_time">
  
<div class='cmt-title'>
  
第{{i+1}}楼&nbsp;&nbsp;用户：{{item.user_name}}&nbsp;&nbsp;发表时间：{{item.add_time|dateFormat('YYYY-MM-DD HH:mm:ss')}}

</div>
<div class='cmt-body'>{{ item.content === 'undefined' ? '此用户很懒，什么都没说' :item.content }}</div>
</div>


</div>
<mt-button size='large' type='danger' plain  @click="getMore">加载更多</mt-button>
</div>

</template>

<script type="text/javascript">
  import { Toast } from 'mint-ui'
export default {
  data() {
    return {
 pageIndex:1,
       comments:[],
       msg:''
    };
  },
  created() {
    this.getComments();

  },
	methods:{
 getComments(){// 获取评论
this.$http.get('api/getcomments/' + this.$route.params.id + '?pageindex=' + this.pageIndex).then(result => {
      if (result.body.status === 0) {

  this.comments = this.comments.concat(result.body.message);
   }else {
Toast('获取评论失败');
  }
 });
 },
  getMore() {
      // 加载更多
      this.pageIndex++;
      this.getComments();
              },
              postComment(){
if(this.msg.trim().length===0){
	return Toast("评论不能为空");
}
                       this.$http.post('api/postcomment/' + this.id,{content:this.msg.trim()}).then(result => {
      if (result.body.status === 0) {


             var cmt={
             user_name:" 匿名用户",
             add_time:Date.now(),
             content:this.msg.trim()
         };
  this.comments.unshift(cmt);
  this.msg='';
   }else {
Toast('评论失败');
  }
})

              }
},
 props: ["id"]

}

</script>



<style lang='scss' type="">
	

	.cmt-container{
		h3{
			font-size: 18px;
  
		}
		textarea{
			font-size: 14px;
			height: 85px;
			margin: 5px 0;
		}

		.cmt-list{
                
			.cmt-item{
              font-size: 13px;

              .cmt-title{
            background-color:  #ccc;
           
 line-height: 30px;
              }
 .cmt-body{
               text-indent: 2em;
line-height: 35px;
              }
			}
		}
	}
</style>