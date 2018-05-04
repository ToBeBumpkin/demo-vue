import axios from "axios";

export default async (url,method,data) => {
  let requestUrl = url
  let requestMethod = method || 'GET'
  let requestHeaders = {
    "Content-type": "application/json",
    "Accept": "application/json",
  }
  // let token = sessionStorage.getItem('accessToken')
  // token && (requestHeaders.authorization = token)
  let requestBody = JSON.stringify(data)
  let res = await axios({
    method: requestMethod,
    url: requestUrl,
    headers: requestHeaders,
    data: requestBody
  })
  return res
}
