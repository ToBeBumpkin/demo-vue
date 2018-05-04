import axios from 'axios'
import fatch from "./fatch"


//注册
export const postRegister = async(params) => {
  const url = `/gw-member/member/enterprise/V1/register`
  const method = "POST"
  const data = {
    loginName : params.loginName,
    password : params.password || '',
    epName : params.epName || '',
    name : params.name || '',
    email : params.email || '',
    registOrigin : params.registOrigin || 'H5',
    registClient : params.registClient || '01',
  }
  try {
    return await fatch(url,method,data)
  } catch (err) {
    return err
  }
}

//获取验证码
export const getValidateCode = async(params) => {
  const url = `/gw-member/validateCode/V1/getValidateCode`
  const method = "POST"
  const data = {
    phoneNo : params.phoneNo,
    imgValidateCode : params.imgValidateCode || '',
    sessionId : params.sessionId || '',
    scenes : params.scenes || 1,
  }
  try {
    return await fatch(url,method,data)
  } catch (err) {
    return err
  }
}

//校验验证码
export const checkValidateCode = async(params) => {
  const url = `/gw-member/validateCode/V1/validateCheckCode`
  const method = "POST"
  const data = {
    phoneNo : params.phoneNo,
    validateCode : params.validateCode,
  }
  try {
    return await fatch(url,method,data)
  } catch (err) {
    return err
  }
}

//校验用户名
export const checkLoginName = async(params) => {
  const url = `/gw-member/member/V1/existLoginName`
  const method = "POST"
  const data = {
    loginName : params.loginName,
    memberType : 2,
  }
  try {
    return await fatch(url,method,data)
  } catch (err) {
    return err
  }
}
