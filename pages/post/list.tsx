import * as React from 'react';
import { DataGrid, GridColDef, GridToolbar } from '@mui/x-data-grid';
import { useEffect, useState } from "react";
import { postApi } from '@/api-client/post-api'
import { Button } from '@mui/material'
import _ from 'lodash';
import { StackedBarChart } from '@/components/page_components/charts';


const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'title',
    headerName: 'Tiêu dề',
    width: 600,
    editable: true,
  },
  {
    field: 'account',
    headerName: 'Tác Giả',
    sortable: false,
    width: 300,
    valueGetter: (params) => {
    return  params?.value?.name
    }
  },
  {
    field: 'voteCount',
    headerName: 'Số lượng Vote',
    sortable: false,
    width: 200,
  },
  {
    field: 'createdAt',
    headerName: 'Ngày tạo bài',
    sortable: false,
    width: 200,
  },
  {
    field: 'slug',
    headerName: 'Xem chi tiết',
    sortable: false,
    width: 200,
    renderCell: (param: any) => (
      <a target={"_blank"} rel='noreferrer' href={`https://it-forums.vercel.app/bai-dang/${param?.value}`}>Xem chi tiết</a>
    ),

  }
];

const rows = [

];
type Props = {}

const Post = (props: Props) => {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)
  const [loadWhenDelete, setLoadWhenDelete] = useState(false)
  const [selectedValue, setSelectedValue] = useState<any>([])

  useEffect(() => {
    getPosts();
  }, []);
  const getPosts = async () => {
    const data:any  = await postApi.getList(); 
    console.log(data)
    setPosts(data);
    setLoading(false);
  };
  const handleDeleteMultiple =async() => {
    setLoadWhenDelete(true)
    console.log(selectedValue)
    await postApi.deleteAllPost(JSON.stringify(selectedValue)).then(res=>{
      setLoadWhenDelete(false)
    })
  }
  return (
    <div style={{ height: 600, width: '100%' }}>
      <h2>Danh Sách Bài Đăng</h2>
      <div className='mb-3'>
      <Button
        disabled={selectedValue?.length == 0 && !loadWhenDelete }
        onClick={() => handleDeleteMultiple()}
        variant='contained'
        color='warning'>
        {selectedValue.length <= 1?"Delete":"Delete All"}
      </Button>
      </div>
      <div className='h-[70vh] bg-white'>
      <DataGrid
        components={{ Toolbar: GridToolbar }}
        rows={posts}
        columns={columns}
        loading={loading}
        pageSize={10}
        getRowId={(rows:any) =>rows?.id}
        onSelectionModelChange={(value: any) => {
          let data = _.map(value, (item:any)=>({"id":item}))
          setSelectedValue(data)
        }}
        checkboxSelection
        disableSelectionOnClick
      />
      </div>
     
    </div>
  );
}
export default Post