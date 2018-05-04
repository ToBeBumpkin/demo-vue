const state = {
  idCard: '/(^\\d{15}$)|(^\\d{17}([0-9]|X)$)/',
  phoneNo: '/^\\d{11}$/',
  name: '/^[\u4e00-\u9fa5]+(·[\u4e00-\u9fa5]+)*$/',
  email: '/^.+@.+$/',
  password: '/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,16}$/'
}

export default {
  state
}
