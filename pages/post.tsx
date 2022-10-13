import * as React from 'react';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'tile',
    headerName: 'Tiêu dề',
    width: 300,
    editable: true,
  },
  {
    field: 'category',
    headerName: 'Loại',
    width: 100,
    editable: true,
  },
  {
    field: 'creator',
    headerName: 'Người sáng tạo',
    width: 150,
    editable: true,
  },
  {
    field: 'image',
    headerName: 'Hình ảnh',
    type: 'image',
    width: 200,
    editable: true,
  },
  {
    field: 'datetime',
    headerName: 'Thời gian tạo',
    type: 'datetime',
    width: 200,
    editable: true,
  },
  {
    field: 'active',
    headerName: 'Hoạt Động',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 200,
  },
];

const rows = [
  { id: 1, tile: 'Chủ đề', category: 'java', creator:'Quang Lang Thang', image:'...',datetime:'20/12/2022', active:'sửa xóa' },
  { id: 2, tile: 'Chủ đề', category: 'java', creator:'Quang Lang Thang', image:'...',datetime:'20/12/2022', active:'sửa xóa' },
  { id: 3, tile: 'Chủ đề', category: 'java', creator:'Quang Lang Thang', image:'...',datetime:'20/12/2022', active:'sửa xóa' },
  { id: 4, tile: 'Chủ đề', category: 'java', creator:'Quang Lang Thang', image:'...',datetime:'20/12/2022', active:'sửa xóa' },
  { id: 5, tile: 'Chủ đề', category: 'java', creator:'Quang Lang Thang', image:'...',datetime:'20/12/2022', active:'sửa xóa' },
  { id: 6, tile: 'Chủ đề', category: 'java', creator:'Quang Lang Thang', image:'...',datetime:'20/12/2022', active:'sửa xóa' },
  { id: 7, tile: 'Chủ đề', category: 'java', creator:'Quang Lang Thang', image:'...',datetime:'20/12/2022', active:'sửa xóa' },
  { id: 8, tile: 'Chủ đề', category: 'java', creator:'Quang Lang Thang', image:'...',datetime:'20/12/2022', active:'sửa xóa' },
  { id: 9, tile: 'Chủ đề', category: 'java', creator:'Quang Lang Thang', image:'...',datetime:'20/12/2022', active:'sửa xóa' },
  { id: 10, tile: 'Chủ đề', category: 'java', creator:'Quang Lang Thang', image:'...',datetime:'20/12/2022', active:'sửa xóa' },
  { id: 11, tile: 'Chủ đề', category: 'java', creator:'Quang Lang Thang', image:'...',datetime:'20/12/2022', active:'sửa xóa' },

];
type Props = {}

const Post = (props: Props) => {
  return (
    <div style={{ height: 400, width: '100%' }}>
      <h2>Post List</h2>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        checkboxSelection
        disableSelectionOnClick
      />
    </div>
  );
}

export default Post