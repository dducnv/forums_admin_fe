import React from 'react'
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid'
import { useEffect, useState } from 'react'
import { usersApi } from '@/api-client/user-api'

const columns: GridColDef[] = [
  { field: 'id', headerName: 'Id', width: 100 },
  {
    field: 'avatar',
    headerName: 'Avatar',
    width: 100,
    renderCell: (param: any) => (
      <img
        src={param?.value}
        className='w-6 h-6 object-contain overflow-hidden'
      />
    ),
  },
  { field: 'name', headerName: 'Tên tài khoản', width: 200 },
  { field: 'email', headerName: 'Email', width: 200 },
  { field: 'username', headerName: 'Tên', width: 200 },
  { field: 'createdAt', headerName: 'Ngày Tạo', width: 200 },
  { field: 'role', headerName: 'Trạng thái', width: 200 },
  { field: 'post_count', headerName: 'Bài Đăng', width: 200 },
]

const rows = []

type Props = {}

const Listuser = (props: Props) => {
  const [users, setUsers] = useState([])
  useEffect(() => {
    const getPosts = async () => {
      const data: any = await usersApi.getList().then((res: any) => {
        console.log(res)
        setUsers(res)
      })
    }
    getPosts()
  }, [])

  return (
    <div style={{ height: 600, width: '100%' }}>
      <h2> Danh Sách Người Dùng </h2>
      <DataGrid
        rows={users}
        columns={columns}
        pageSize={100}
        rowsPerPageOptions={[5]}
      />
    </div>
  )
}

export default Listuser
