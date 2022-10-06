import axiosConfig from '@/api-client/axios-config'

export const authApi = {
  logout() {
    return axiosConfig.post('/logout')
  },
}
