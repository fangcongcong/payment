<template>
  <div>
    <div class="header-box">
      作业没完成被妈妈扔路边，杭州7岁女孩向警察哭诉：这题太难了！
    </div>
    <div class="name-box">
      <span class="item" v-if="shopImg">
        <img class="shop-img" :src="shopImg"/>
        <div class="name">{{ shopName }}</div>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'homeHeader',
  props: {
    shopName: String,
    shopImg: String
  }
}
</script>

<style scoped lang='less'>
@size12px:0.24rem;
@size14px:0.28rem;
@size16px:0.32rem;
@size18px:0.36rem;
@width10px:0.2rem;
@wdith15px:0.3rem;
@width20px:0.4rem;
@width30px:0.6rem;
.header-box{
  padding: @width10px @wdith15px;
  overflow:hidden;
  color: #A7956B;
  background: #fffbe5;
  font-size: @size12px;
}
.name-box{
  padding: @width10px @wdith15px;
  .item{
    display: flex;
    align-items: center;
    justify-content: center;
    .shop-img{
      width: @width30px;
      height: @width30px;
      display: inline-block;
      border-radius: 50%;
    }
    .name{
      font-size: @size16px;
      color: #000;
      display: inline-block;
      margin-left: 0.18rem;
    }
  }
}
</style>
