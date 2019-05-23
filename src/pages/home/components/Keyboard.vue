<template>
    <div class="keyboard-box">
     <ul class="keyboard-ul">
       <li @click="getNumder('1')">1</li>
       <li @click="getNumder('2')">2</li>
       <li @click="getNumder('3')">3</li>
       <li class="delete" @click="deleteMoney"></li>
       <li @click="getNumder('4')">4</li>
       <li @click="getNumder('5')">5</li>
       <li @click="getNumder('6')">6</li>
       <li></li>
       <li @click="getNumder('7')">7</li>
       <li @click="getNumder('8')">8</li>
       <li @click="getNumder('9')">9</li>
       <li></li>
       <li></li>
       <li @click="getNumder('0')">0</li>
       <li @click="getNumder('.')">.</li>
     </ul>
      <div class="payBtn" @click="goPay">
       <span>确认<br/>支付</span>
      </div>
    </div>
</template>

<script>
import Vue from 'vue'
import toast from '@/components/js/toast' // 引入toast函数
Vue.prototype.$toast = toast // 给Vue对象添加$toast方法

export default{
  name: 'homeKeyboard',
  props: {
    money: String
  },
  data () {
    return {
      updateMoney: ''
    }
  },
  mounted () {
    console.log('keyboard')
  },
  methods: {
    getNumder (val) {
      // 不能以.开头，小数点后可以是0.0但是不能是0.00可以是 0.01，只能出现一次小数点，不能出现02，02.01 第一位0第二位必须是小数点
      var temp = /^\d+\.?\d{0,2}$/
      this.updateMoney = this.updateMoney += val
      if (temp.test(this.updateMoney)) {
        if (this.updateMoney === '00') {
          this.updateMoney = '0'
        }
        if (this.updateMoney === '0.00') {
          this.updateMoney = '0.0'
        }
        if (this.updateMoney[0] === '0') {
          if (this.updateMoney[1] >= 0) {
            this.updateMoney = '0'
          }
        }
        this.$emit('changeMoney', this.updateMoney)
      } else {
        this.updateMoney = this.updateMoney.substring(0, this.updateMoney.length - 1) //  删除金额最后一位
      }
    },
    deleteMoney () {
      if (this.updateMoney.length > 0) {
        this.updateMoney = this.updateMoney.substring(0, this.updateMoney.length - 1) //  删除金额最后一位
        this.$emit('changeMoney', this.updateMoney) // 删除后,更新金额
      }
    },
    goPay () {
      if (/(^[1-9]([0-9]+)?(\.[0-9]{1,2})?$)|(^(0){1}$)|(^[0-9]\.[0-9]([0-9])?$)/.test(this.updateMoney)) {
        if (this.updateMoney <= 0 || this.updateMoney === '0.0' || this.updateMoney === '0.00' || this.updateMoney === '') {
          this.$toast('请输入正确的消费金额！', 1800)
          return false
        } else if (this.updateMoney >= 10000) {
          this.$toast('抱歉，单笔消费金额不能大于1万元，您可分次完成支付！', 1800)
          return false
        } else {
          console.log('可以去支付了...')
        }
      } else {
        this.$toast('请输入正确的金额！', 1800)
      }
    }
  }
}
</script>

<style scoped lang='less'>
  .keyboard-box{
    position: fixed;
    bottom: 0rem;
    left: 0rem;
    right: 0rem;
    z-index: 99;
    .keyboard-ul{
      margin: 0px;
      padding: 0px;
      overflow: hidden;
      list-style: none;
      border: none;
      background: #ffffff;
      border-top: 1px solid #F6F5F5;
      li{
        width: 25%;
        height: 1.2rem;
        line-height: 1.2rem;
        color: #333;
        font-size: .36rem;
        font-weight: bold;
        text-align: center;
        float: left;
        border-bottom: 1px solid #F6F5F5;
        border-right: 1px solid #F6F5F5;
        box-sizing: border-box;
      }
      li.delete{
          background: url(../../../assets/delete.png) no-repeat center center;
          background-size: 0.5rem;
        }
    }
    .payBtn{
      width: 25%;
      height: 3.6rem;
      color: #ffffff;
      background: #FD8F27;
      position: absolute;
      top: 25%;
      right: 0rem;
      z-index: 2;
      font-size: .36rem;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
</style>
