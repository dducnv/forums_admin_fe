import React from 'react'
import { DataGrid, GridColDef, GridToolbar } from '@mui/x-data-grid'
import { useEffect, useState } from 'react'
import { usersApi } from '@/api-client/user-api'
import { Button } from '@mui/material'
import { UpdateUser } from '@/components/page_components/user_manage_component'

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
  { field: 'name', headerName: 'Tên hiển thị', width: 200 },
  { field: 'email', headerName: 'Email', width: 200 },
  { field: 'username', headerName: 'Tên tài khoản', width: 200 },
  { field: 'createdAt', headerName: 'Ngày Tạo', width: 200 },
  { field: 'role', headerName: 'Quyền', width: 200 },
  { field: 'tag_flowing_count', headerName: 'Xác thực Email', width: 200 },
  { field: 'post_count', headerName: 'Bài Đăng', width: 100 },
  { field: 'statusEnum', headerName: 'Trạng thái', width: 200 },
  {
    field: 'github_username',
    headerName: 'Chức năng',
    width: 100,
    renderCell: (param: any) => (
      <>
        <UpdateUser oldData={param?.id} />
      </>
    ),
  },
]

const rows = []

type Props = {}

const ListUser = (props: Props) => {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)
  const [selectedValue, setSelectedValue] = useState([])
  useEffect(() => {
    const getPosts = async () => {
      const data: any = await usersApi.getList().then((res: any) => {
        console.log(res)
        setUsers(res)
        setLoading(false)
      })
    }
    getPosts()
  }, [])

  const handleDeleteMultiple = () => {
    console.log(selectedValue)
  }
  return (
    <div style={{ height: 600, width: '100%' }}>
      <h2> Danh Sách Người Dùng </h2>
      <div className='mb-3'>
        <Button
          disabled={selectedValue.length == 0}
          onClick={() => handleDeleteMultiple()}
          variant='contained'
          color='warning'>
          {selectedValue.length <= 1 ? 'Delete' : 'Delete All'}
        </Button>
      </div>
      <div className='bg-white h-[70vh]'>
        <DataGrid
          components={{ Toolbar: GridToolbar }}
          loading={loading}
          rows={users}
          columns={columns}
          pageSize={100}
          getRowId={(rows) =>
            JSON.stringify({
              id: rows.id,
              role: rows.role,
              statusEnum: rows.statusEnum,
            })
          }
          checkboxSelection
          disableSelectionOnClick
          className='w-full'
          rowsPerPageOptions={[5]}
          onSelectionModelChange={(value: any) => {
            setSelectedValue(value)
          }}
        />
      </div>
    </div>
  )
}

export default ListUser
