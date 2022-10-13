import React from 'react'
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'tile',
    headerName: 'Tiêu dề',
    width: 100,
    editable: true,
  },
  {
    field: 'category',
    headerName: 'Loại',
    width: 200,
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
  { id: 122, tile: 'Chủ đề', category: 'java', creator:'Quang Lang Thang', image:'...',datetime:'20/12/2022', active:'sửa xóa' },
  { id: 223, tile: 'Chủ đề', category: 'java', creator:'Quang Lang Thang', image:'...',datetime:'20/12/2022', active:'sửa xóa' },
  { id: 233, tile: 'Chủ đề', category: 'java', creator:'Quang Lang Thang', image:'...',datetime:'20/12/2022', active:'sửa xóa' },
  { id: 423, tile: 'Chủ đề', category: 'java', creator:'Quang Lang Thang', image:'...',datetime:'20/12/2022', active:'sửa xóa' },
  { id: 533, tile: 'Chủ đề', category: 'java', creator:'Quang Lang Thang', image:'...',datetime:'20/12/2022', active:'sửa xóa' },
  { id: 644, tile: 'Chủ đề', category: 'java', creator:'Quang Lang Thang', image:'...',datetime:'20/12/2022', active:'sửa xóa' },
  { id: 722, tile: 'Chủ đề', category: 'java', creator:'Quang Lang Thang', image:'...',datetime:'20/12/2022', active:'sửa xóa' },
  { id: 811, tile: 'Chủ đề', category: 'java', creator:'Quang Lang Thang', image:'...',datetime:'20/12/2022', active:'sửa xóa' },
  { id: 922, tile: 'Chủ đề', category: 'java', creator:'Quang Lang Thang', image:'...',datetime:'20/12/2022', active:'sửa xóa' },
  { id: 1022, tile: 'Chủ đề', category: 'java', creator:'Quang Lang Thang', image:'...',datetime:'20/12/2022', active:'sửa xóa' },
  { id: 112, tile: 'Chủ đề', category: 'java', creator:'Quang Lang Thang', image:'...',datetime:'20/12/2022', active:'sửa xóa' },

];
type Props = {}

const Allpost = (props: Props) => {
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
  )
}

export default Allpost