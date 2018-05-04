<template>
  <div>
    <div class="success-wrap">
      <img :src="icons.succeedIcon" />
      <strong>注册成功！</strong>
      <p>您的316元背调优惠券已放入账户<br/>请在电脑端打开www.17zhiliao.com登录后使用</p>
    </div>
    <ul class="account">
      <li>
        <span class="circle-top"></span>
        <span class="circle-bottom"></span>
        <div class="account-left">
          <span>￥</span>
          <strong>192</strong>
        </div>
        <div class="account-right">
          <strong>线上服务项免单券</strong>
          <p>身份信息、高等教育、技工教育、职业资格</p>
        </div>
      </li>
      <li>
        <span class="circle-top"></span>
        <span class="circle-bottom"></span>
        <div class="account-left">
          <span>￥</span>
          <strong>192</strong>
        </div>
        <div class="account-right">
          <strong>线上服务项免单券</strong>
          <p>身份信息、高等教育、技工教育、职业资格、工作经历、个人工商、网络黑名单、违法犯罪、法院涉法涉诉、法院失信被执行人</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
  import icons from '../../assets/icons/MarchActive/index'
  export default {
    name: "success",
    data () {
      return{
        icons:icons
      }
    }
  }
</script>

<style scoped>

</style>
