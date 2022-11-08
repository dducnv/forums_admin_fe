import axiosConfig from '@/api-client/axios-config'

export const usersApi = {
    getList(){
        return axiosConfig.get('/admin/accounts')
    },
    createPost(data:any){
        return axiosConfig.post('',data)
    }
    ,
    updatePost(data:any){
        return axiosConfig.put('',data)
    },
    deletePost(data:any){
        return axiosConfig.delete('',data)
    }
    
}