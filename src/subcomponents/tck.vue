<template>

<div>


<div class="login" >
    <div id="title" class="login-title">登录会员
        <span><a id="closeBtn" href="javascript:void(0);" class="close-login">关闭</a></span>
    </div>
    <div class="login-input-content">
        <div class="login-input">
            <label>用户名：</label>
            <input type="text" placeholder="请输入用户名" name="info[username]" id="username" class="list-input">
        </div>
        <div class="login-input">
            <label>登录密码：</label>
            <input type="password" placeholder="请输入登录密码" name="info[password]" id="password" class="list-input">
        </div>
    </div>
    <div id="loginBtn" class="login-button"><a href="javascript:void(0);" id="login-button-submit">登录会员</a></div>
</div>

<div id="bg" class="login-bg" ></div> 
</div>
</template>

<script>
  

// // 3 拖拽
// var title=document.getElementById('title');
// title.onmousedown=function(e){

//  var x = e.pageX - login.offsetLeft;
//     var y=e.pageY-login.offsetTop;

//    document.onmousemove = function (e) {

//  var loginX = e.pageX - x;
//       var loginY = e.pageY - y;
//       login.style.left = loginX+256 + 'px';
//       login.style.top = loginY -140+ 'px';
// }

//  document.onmouseup = function () {
//     document.onmousemove = null;
//   }


// }




export default {

  data:function(){

    return {
      
            }
  },
  created(){

   },
  methods:{
    
           

    
  },
  watch:{
    
      }
  
  
}
</script>

<style>

 
  
    .login {
            width: 512px;
            height: 280px;
            position: absolute;
            border: #ebebeb solid 1px;
            left: 50%;
            right: 50%;
            background: #ffffff;
            box-shadow: 0px 0px 20px #ddd;
    
       position: absolute;
    
        }
     

</style>
