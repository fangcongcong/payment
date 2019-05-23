<template>
  <div>
    <home-header :shopName='shopInfo.suppliers_name' :shopImg='shopImg'></home-header>
    <home-money :money='money'></home-money>
    <home-keyboard @changeMoney="updateMoney" :money='money'></home-keyboard>
  </div>
</template>

<script>
import homeHeader from './components/Header'
import homeMoney from './components/Money'
import homeKeyboard from './components/Keyboard'
import qs from 'qs'

export default {
  name: 'Home',
  components: {
    homeHeader,
    homeMoney,
    homeKeyboard
  },
  data () {
    return {
      money: '',
      shopInfo: [],
      shopImg: ''
    }
  },
  mounted () {
    this.$axios.post('api/wx/wxpay_api.php', qs.stringify({
      act: 'get_stores_info',
      id: '8563',
      user_id: '2578096'
    })).then(res => {
      console.log(res)
      if (res.data.error === 0) {
        this.shopInfo = res.data.data
        this.shopImg = `https://www.shctp.com/${res.data.data.major_pic}`
      }
    }).catch(error => {
      console.log(error)
    })
  },
  methods: {
    updateMoney (money) {
      console.log(money)
      this.money = money
    }
  }
}
</script>

<style scoped lang="less">

</style>
