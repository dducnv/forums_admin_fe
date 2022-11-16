import axiosConfig from '@/api-client/axios-config'
export const dashboardApi = {
     countTotal(){
          return axiosConfig.get('/admin/dashboard/total')
      },
      topTags(){
          return axiosConfig.get('/tags/popular')
      },
      topPosts(){
          return axiosConfig.get('/posts/popular')
      },
      topUser(){
          return axiosConfig.get('/users/famous')
      }
}