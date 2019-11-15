<template>
  <div class="goods-list">
    
<div class="goods-item" v-for='item in goodsList' v-bind:key="item.id"  @click='goDetail(item.id)'>
      <img :src="item.img_url" alt="">
      <h1 class="title">{{item.title}}</h1>
      <div class="info">
        <p class="price">
          <span class="now">￥{{item.sell_price}}</span>
          <span class="old">￥{{item.market_price}}</span>
        </p>
        <p class="sell">
          <span>热卖中</span>
          <span>{{item.stock_quantity}}</span>
        </p>
    
    </div>
  </div >








   <!--  <router-link class="goods-item" v-for='item in goodsList' v-bind:key="item.id" :to="'/home/goodsinfo/'+item.id" tag='div'>
      <img :src="item.img_url" alt="">
      <h1 class="title">{{item.title}}</h1>
      <div class="info">
        <p class="price">
          <span class="now">￥{{item.sell_price}}</span>
          <span class="old">￥{{item.market_price}}</span>
        </p>
        <p class="sell">
          <span>热卖中</span>
          <span>{{item.stock_quantity}}</span>
        </p>
    
    </div>
  </router-link > -->
<mt-button type='danger' size='large' @click='getmore'>加载更多</mt-button>

  </div>
</template>

<script>
  import { Toast } from 'mint-ui'
export default{

  data(){
    return{
goodsList:[],
pageindex:1
};
  },
  created(){
this.getgoodList();
   
},
methods:{
  
getgoodList(){
this.$http.get("api/getgoods?pageindex="+this.pageindex).then(result => {
if(result.body.status === 0) {

 this.goodsList= this.goodsList.concat(result.body.message);
        } else {
          // 失败的
          Toast("加载失败。。。");
        }
      });
    },
    getmore(){
      this.pageindex++;
      this.getgoodList();
    },
    goDetail(id){
                //$route路由参数对象  如params，query都属于他
                //$router路由导航对象
                   // this.$router.push("/home/goodsinfo/"+id);
                   // this.$router.push({path:"/home/goodsinfo/"+id});
                   this.$router.push({name:'goodsinfo',params:{id:id}});

    }


  }
};













</script>

<style lang="scss" type="">
.goods-list{
  display: flex;
  flex-wrap: wrap;
  padding: 7px;
  justify-content: space-between;

  .goods-item{
    width: 49%;
    border: 1px solid #ccc;
    box-shadow: 0 0 8px #ccc;
    margin: 4px 0;
    padding: 2px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: 293px;
     position: relative;

    img{
      width: 100%;

    }
    .title{
      font-size: 14px;
      bottom: 56px;
      position: absolute;
    }

    .info{
      background-color: #eee;
      p{
        margin: 0;
        padding: 5px;
      }
      .price{
        .now{
          color: red;
          font-weight: bold;
          font-size: 16px;
        }
        .old{
          text-decoration: line-through;
          font-size: 12px;
          margin-left: 10px;
        }
      }
      .sell{
        display: flex;
        justify-content: space-between;
        font-size: 13px;
      }
    }
  }
}
</style>
