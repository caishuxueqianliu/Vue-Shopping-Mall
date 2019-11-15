<template>
	
<!-- 问题： 我们不知道什么时候能够拿到 max 值，但是，总归有一刻，会得到一个真正的 max 值 -->
<!-- 我们可以 使用 watch 属性监听，来 监听 父组件传递过来的 max 值，不管 watch 会被触发几次，但是，最后一次，肯定是一个 合法的 max 数值 -->
  <div class="mui-numbox">
    <button class="mui-btn mui-btn-numbox-minus" @click='subnum' type="button">-</button>
    <input id="test" class="mui-input-numbox" :value='num' type="number" @change='countChanged'ref="numbox" />
    <button class="mui-btn mui-btn-numbox-plus" @click='addnum' type="button">+</button>
  </div>

  <!-- 分析： 子组件什么时候把 数据传递给父组件 -->
  <!--  -->



</template>


<script type="text/javascript">
	//import mui from '../lib/mui/js/mui.min.js'
export default{
  data(){
    return{
      num:1
    };
  },
    mounted(){

    mui('.mui-numbox').numbox()
//初始化
    },
methods:{

  countChanged(){
             //          console.log(this.num)
 console.log(this.$refs.numbox.value)
 this.num=this.$refs.numbox.value;
   this.$emit('getcount',parseInt(this.num));
             // this.$emit('getcount',parseInt(this.$refs.numbox.value));
             // console.log(this.$refs.numbox.value)
  },
  subnum(){
    if(this.num>0)
    this.num--;
  this.$emit('getcount',parseInt(this.num));
 // console.log(this.num)
  },
   addnum(){
        if(this.num<this.max){
   this.num++;
 this.$emit('getcount',parseInt(this.num));
 
}
       // console.log(this.num)
  }
 
},
props:
  ['max']


}

</script>