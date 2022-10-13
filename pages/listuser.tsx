import React from 'react'
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'username', headerName: 'Tên tài khoản', width: 300 },
  { field: 'role', headerName: 'Vai trò', width: 130 },
  { field: 'fullname', headerName: 'Họ và tên', width: 130 },
  { field: 'phone', headerName: 'Số điện thoại', width: 130 },
  { field: 'time', headerName: 'Thời gian tạo', width: 130 },
  { field: 'status', headerName: 'Trạng thái', width: 130 },
  { field: 'action', headerName: 'Hoạt động', width: 130 },
];

const rows = [
  { id: 1, username: 'quanglangthang@gmail.com', role: 'người sử dụng' ,fullname:'Quang béo',phone:'0966186860',time:'30/5/2022',status:'đang hoạt động',action:'sửa xóa'},
  { id: 2, username: 'quanglangthang@gmail.com', role: 'người sử dụng' ,fullname:'Quang béo',phone:'0966186860',time:'30/5/2022',status:'đang hoạt động',action:'sửa xóa'},
  { id: 3, username: 'quanglangthang@gmail.com', role: 'người sử dụng' ,fullname:'Quang béo',phone:'0966186860',time:'30/5/2022',status:'đang hoạt động',action:'sửa xóa'},
  { id: 4, username: 'quanglangthang@gmail.com', role: 'người sử dụng' ,fullname:'Quang béo',phone:'0966186860',time:'30/5/2022',status:'đang hoạt động',action:'sửa xóa'},
  { id: 5, username: 'quanglangthang@gmail.com', role: 'người sử dụng' ,fullname:'Quang béo',phone:'0966186860',time:'30/5/2022',status:'đang hoạt động',action:'sửa xóa'},
  { id: 6, username: 'quanglangthang@gmail.com', role: 'người sử dụng' ,fullname:'Quang béo',phone:'0966186860',time:'30/5/2022',status:'đang hoạt động',action:'sửa xóa'},
  { id: 7, username: 'quanglangthang@gmail.com', role: 'người sử dụng' ,fullname:'Quang béo',phone:'0966186860',time:'30/5/2022',status:'đang hoạt động',action:'sửa xóa'},
  { id: 8, username: 'quanglangthang@gmail.com', role: 'người sử dụng' ,fullname:'Quang béo',phone:'0966186860',time:'30/5/2022',status:'đang hoạt động',action:'sửa xóa'},
];

type Props = {}

const Listuser = (props: Props) => {
  return (
    <div style={{ height: 400, width: '100%' }}>
        <h2>List User</h2>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  )
}

export default Listuser