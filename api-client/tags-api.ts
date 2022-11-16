import axiosConfig from '@/api-client/axios-config'

export const tagsApi = {
    getList(){
        return axiosConfig.get('/admin/tags')
    },
    createTag(data:any){
        return axiosConfig.post('/admin/tags',data)
    }
    ,
    updatePost(data:any,id:number){
        return axiosConfig.put('',data)
    },
    deletePost(data:any,id:number){
        return axiosConfig.delete('',data)
    }
    
}