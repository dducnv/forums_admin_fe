import axiosConfig from '@/api-client/axios-config'

export const usersApi = {
    getList(){
        return axiosConfig.get('/admin/accounts')
    },
    createPost(data:any){
        return axiosConfig.post('',data)
    }
    ,
    updateUser(id:number,data:any){
        return axiosConfig.put(`/admin/accounts/${id}`,data)
    },
    deletePost(data:any){
        return axiosConfig.delete('',data)
    }
    
}