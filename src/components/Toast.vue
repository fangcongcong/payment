<template>
    <div class="toast" v-if='isShow'>
        <div class="toast-div">{{text}}</div>
    </div>
</template>

<script>
export default {
  data () {
    return {
      text: '',
      isShow: true,
      duration: 1500
    }
  }
}
</script>

<style lang='less'>
*{
  margin: 0px;
  padding: 0px;
}
.toast{
  position: fixed;
  left: 50%;
  top: 43%;
  transform: translate(-50%, 0);
  background: rgba(0,0,0,0.6);
  color:#FFFFFF;
  padding: 0.2rem 0.2rem;
  border-radius: 0.1rem;
  z-index: 100;
}
.toast-div{
  font-size: 0.28rem;
}
</style>
