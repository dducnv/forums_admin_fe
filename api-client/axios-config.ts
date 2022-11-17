import axios from 'axios'
const axiosConfig = axios.create({
  baseURL: 'https://appcuaduc.as.r.appspot.com/api',
  headers: {
    'content-type': 'application/json',
  },
})
axiosConfig.interceptors.request.use(async (config) => {
  // Handle token here ...
  return config
})
axiosConfig.interceptors.response.use(
  (response: any) => {
    if (response && response.data) {
      return response.data
    }
    return response
  },
  (error) => {
    // Handle errors
    throw error
  }
)
export default axiosConfig
