<template>
  <div>
    <div class="header">
      <div class="text">
        <strong>知了背调助力招聘季</strong>
        <p>最高可领取316元背调大礼包</p>
      </div>
      <img :src="icons.headerRightIcon" />
    </div>
    <ul class="account">
      <li>
        <span class="circle-top"></span>
        <span class="circle-bottom"></span>
        <div class="account-left">
          <span>￥</span>
          <strong>92</strong>
        </div>
        <div class="account-right">
          <strong>自查券</strong>
          <p>企业认证前可用于自己背调自己一次</p>
        </div>
      </li>
      <li>
        <span class="circle-top"></span>
        <span class="circle-bottom"></span>
        <div class="account-left">
          <span>￥</span>
          <strong>92</strong>
        </div>
        <div class="account-right">
          <strong>新手体验券</strong>
          <p>身份信息、高等教育、工作经历、违法犯罪</p>
        </div>
      </li>
      <li>
        <span class="circle-top"></span>
        <span class="circle-bottom"></span>
        <div class="account-left">
          <span>￥</span>
          <strong>20</strong>
        </div>
        <div class="account-right">
          <strong>现金抵扣券</strong>
          <p>可用于抵扣线下服务项目费用</p>
        </div>
      </li>
    </ul>
    <div class="from-wrap">
      <div class="title">
        <div>请完善您的相关信息</div>
      </div>
      <ul class="form">
        <li>
          <div class="icon">
            <img :src="icons.phoneIcon" />
          </div>
          <input type="text" v-model="form.phoneNo" placeholder="手机号码">
        </li>
        <li>
          <div class="icon">
            <img :src="icons.newIcon" />
          </div>
          <input type="text" v-model="form.code" placeholder="短信验证码">
          <button :disabled="getCodeDisabled" :class="{'is-disabled':getCodeDisabled}" v-on:click="readyGetValidateCode">{{time ? time + 's' : "获取验证码"}}</button>
        </li>
        <li>
          <div class="icon">
            <img :src="icons.companyIcon" />
          </div>
          <input type="text" v-model="form.company" placeholder="公司名称">
        </li>
        <li>
          <div class="icon">
            <img :src="icons.nameIcon" />
          </div>
          <input type="text" v-model="form.name" placeholder="真实姓名">
        </li>
        <li>
          <input type="button" :disabled="postRegisterDisabled" v-on:click="readyPostRegister" class="submit-btn" :class="{disabled:postRegisterDisabled}" value="立即领取">
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
    import {mapState, mapGetters, mapActions, mapMutations} from 'vuex'
    import icons from '../../assets/icons/MarchActive/index'
    import { postRegister,getValidateCode,checkValidateCode,checkLoginName } from '../../api/Auth';
    export default {
      name: "home",
      data () {
          return{
            icons:icons,
            codeText:"获取验证码",
            time:0,
            form:{
              phoneNo:null,
              code:null,
              company:null,
              name:null
            }
          }
      },
      computed:{
        getCodeDisabled(){
          return !this.form.phoneNo || this.time > 0
        },
        postRegisterDisabled(){
          return !this.form.code || !this.form.phoneNo || !this.form.company || !this.form.name
        }
      },
      methods:{
        async readyGetValidateCode(){
          if(!eval(this.$store.state.RegString.phoneNo).test(this.form.phoneNo)){
            alert("请输入正确的手机号码")
            return
          }

          let resCheckLogin = await checkLoginName({
            loginName:this.form.phoneNo
          })

          if (resCheckLogin.data.errcode !== "0000") {
            alert(resCheckLogin.data.errmsg)
            return;
          }

          let resGetValidateCode = await getValidateCode({
            phoneNo:this.form.phoneNo
          })

          if (resGetValidateCode.data.errcode !== "0000") {
            alert(resGetValidateCode.data.errmsg)
            return;
          }

          this.time = 10
        },
        async readyPostRegister(){
          if(!eval(this.$store.state.RegString.phoneNo).test(this.form.phoneNo)){
            alert("请输入正确的手机号码")
            return
          }

          let resCheckValidateCode = await checkValidateCode({
            phoneNo:this.form.phoneNo,
            validateCode:this.form.code,
          })

          if (resCheckValidateCode.data.errcode !== "0000") {
            alert(resCheckValidateCode.data.errmsg)
            return;
          }

          let resPostRegister = await postRegister({
            loginName : this.form.loginName,
            epName : this.form.company,
            name : this.form.name,
          })

          if (resPostRegister.data.errcode !== "0000") {
            alert(resPostRegister.data.errmsg)
            return;
          }

          this.$router.push({path:'/marchactive/success'})
        }
      },
      watch:{
        time(val, oldVal) {
          val > 0 && setTimeout(() => this.time -= 1, 1000)
        },
      }
    }
</script>

<style scoped>

</style>
