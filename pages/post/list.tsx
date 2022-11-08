import * as React from 'react';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import { useEffect, useState } from "react";
import { postApi } from '@/api-client/post-api'


const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'title',
    headerName: 'Tiêu dề',
    width: 200,
    editable: true,
  },
  {
    field: 'author',
    headerName: 'Tác Giả',
    sortable: false,
    width: 300,
    valueGetter: (params) => {
    return  params?.value?.name
    }
  },
  {
    field: 'createdAt',
    headerName: 'Ngày tạo bài',
    sortable: false,
    width: 300,
  },
  {
    field: 'updatedAt',
    headerName: 'Ngày cập nhật',
    sortable: false,
    width: 300,
  },
];

const rows = [

];
type Props = {}

const Post = (props: Props) => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const getPosts = async () => {
      const data:any  = await postApi.getList(); 
      console.log(data)
      setPosts(data);
    };
    getPosts();
  }, []);
  return (
    <div style={{ height: 600, width: '100%' }}>
      <h2>Danh Sách Bài Đăng</h2>
      <DataGrid
        rows={posts}
        columns={columns}
        pageSize={10}
        checkboxSelection
        disableSelectionOnClick
      />
    </div>
  );
}
export default Post