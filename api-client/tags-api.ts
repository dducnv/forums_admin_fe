import axiosConfig from '@/api-client/axios-config'

export const tagsApi = {
    getList(){
        return axiosConfig.get('tags')
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