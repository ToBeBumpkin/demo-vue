<template>
  <div class="hello">
    <span @click="testfnn">欢迎来到活动页</span>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';
import icons from '../assets/icons/index'
export default {
  name: 'HelloWorld',
  data () {
    return {
      icons:icons,
      msg: 'Welcome to Your Vue.js App'
    }
  },
  computed: {
    ...mapGetters([

    ])
  },
  created() {
  },
  activated() { // keep-alive组件激活

  },
  methods: {
    async testfnn(){
      let res = await getAccount({
        loginName:"111111",
        id:"999999999",
        password:"222222"
      })
      console.log(res)
    },
    ...mapMutations({
    })
  },
  watch: {

  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
