<template>
	
<div>
	
<mt-swipe :auto="4000">
      <mt-swipe-item v-for="item in lunbotuList" :key="item.src">
<img :src="item.img" alt="" :class="{full:isfull}">
  </mt-swipe-item>
</mt-swipe>
</div>



</template>




<script type="text/javascript">
	
export default{
	props:['lunbotuList','isfull']
};


</script>


<style lang='scss' scoped="" type=''>
.mint-swipe {
/*overflow: hidden;*/
    height:200px;

.mint-swipe-item{
/*&:nth-child(1){
	background-color: red;
}
&:nth-child(2){
	background-color: blue;
}
&:nth-child(3){
	background-color: green;
}*/
text-align: center;
img {

	height:100%;
}
}
}
.full{
		width: 100%;
}
</style>