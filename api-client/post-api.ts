import axiosConfig from '@/api-client/axios-config'

export const postApi = {
    getList(){
        return axiosConfig.get('/admin/posts')
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
    },
    deleteAllPost(data:any){
        console.log(data)
        return axiosConfig.post('/admin/post/delete-all',data)
    }
    
}