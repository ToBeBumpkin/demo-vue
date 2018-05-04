<template>
  <div class="pages march-active">
    <router-view></router-view>
    <div class="footer">
      <img :src="icons.logoWhiteIcon" />
      <p>*知了背调拥有此次活动最终解释权*</p>
    </div>
  </div>
</template>

<script>
  import icons from '../../assets/icons/MarchActive/index'
  export default {
    name: "index",
    data () {
      return{
        icons:icons
      }
    }
  }
</script>

<style scoped>

</style>
