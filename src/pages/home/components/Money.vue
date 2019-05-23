<template>
    <div class="money-input-box">
        <div class="money-item">
          <span class="title">消费金额</span>
          <span class="money">￥{{money}}</span>
        </div>
    </div>
</template>

<script>
export default{
  name: 'homeMoney',
  props: {
    money: String
  }
}
</script>

<style scoped lang='less'>
.money-input-box{
  padding: 0.2rem 0.3rem;
  overflow: hidden;
  .money-item{
    display: flex;
    padding: 0.2rem 0rem;
    overflow: hidden;
    font-size: 0;
    border-bottom: 1px solid #F6F5F5;
    .title{
      min-width: 2rem;
      height: 0.8rem;
      line-height: 0.8rem;
      font-size: 0.32rem;
      color: #333;
    }
    .money{
      flex: 1;
      line-height: 0.8rem;
      font-size: 0.48rem;
      color: #000;
      font-weight: 600;
      text-align: right;
      position: relative;
      margin-right: .2rem;
      &:after{
        content: "";
        width:1px;
        height: 0.5rem;
        background:#ffe8d2;
        position: absolute;
        right: -.1rem;
        top: 50%;
        transform: translate(0%,-50%);
        animation: flash 1s 0s infinite;
      }
    }
    @keyframes flash {
      from {
        background:#ffe8d2;
      }
      to {
        background:rgb(255,154,18);
      }
    }
  }
}
</style>
