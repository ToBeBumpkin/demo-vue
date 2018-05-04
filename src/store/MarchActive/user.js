const state = {
  demo: '1111'
}

const actions = {
  demoaction({commit},payload){
    commit(demomutations,payload)
  }
}

const getters = {
  demogetter:state => {
    return "demogetter success"
  }
}

const mutations = {
  demomutations(state,payload){
    state.demo = payload
  }
}

export default {
  state,
  actions,
  getters,
  mutations
}
