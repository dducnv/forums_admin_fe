import React from 'react'
import { useEffect, useState } from 'react'
import { tagsApi } from '@/api-client/tags-api'
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Modal from '@mui/material/Modal'
import TextField from '@mui/material/TextField'
import MenuItem from '@mui/material/MenuItem'
import toast from 'react-hot-toast';
const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 100 },
  { field: 'name', headerName: 'Tiêu Đề', width: 400 },
  {
    field: 'icon',
    headerName: 'Icon',
    width: 300,
    renderCell: (param: any) => (
      <img
        src={param?.value}
        className='w-6 h-6 object-contain overflow-hidden'
      />
    ),
  },
  { field: 'desc', headerName: 'Mô Tả', width: 400 },
]

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 550,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
}

const rows = []

type Props = {}

const Tags = (props: Props) => {
  const [currency, setCurrency] = React.useState<any>(false)
  const [loading, setLoading] = useState(true)
  const [loadWhenCreate, setLoadWhenCreate] = useState(false)
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCurrency(event.target.value)
  }
  const [open, setOpen] = React.useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)
  const [tags, setTags] = useState([])
  useEffect(() => {
    
    fetchDataTags()
  }, [])
  const fetchDataTags = async () => {
    const data: any = await tagsApi.getList()
    setTags(data)
    setLoading(false)
  }
  const important:any = [
    {
      id:1,
      value: true,
      label: 'Nổi bật',
      selected:false
    },
    {
      id:2,
      value: false,
      label: 'Không nổi bật',
      selected:true
    }
  ]
  const handleSubmit = async (event:any) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    let dataSend:any = JSON.stringify({
      "icon":data.get('icon'),
      "name":data.get('name'),
      "important": data.get('important'),
      "color_bg":data.get('color_bg'),
      "description":data.get('description')
  })
  setLoadWhenCreate(true);
  await tagsApi.createTag(dataSend).then((res)=>{
    setLoadWhenCreate(false)
    fetchDataTags()
    toast.success('Thêm tag thành công.')
  }).catch(()=>{
    toast.error("Tag đã được thêm.")
    setLoadWhenCreate(false)
  })
  };

  // const Allpost = (props: Props) => {
  return (
    <div style={{ height: 400, width: '100%' }}>
      <h2>Danh Sách Tags</h2>
      <div className='flex justify-end'>
        <button
          onClick={handleOpen}
          className='px-3 py-2 mb-3 bg-blue-600 text-white border-none text-lg rounded-sm hover:bg-blue-500 hover:cursor-pointer'>
          Tạo Hashtag
        </button>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'>
        <Box sx={style}>
          <Typography id='modal-modal-title' variant='h6' marginBottom='10px' component='h2'>
            Nhập thông tin
          </Typography>
          <Box
          onSubmit={handleSubmit}
              component='form'
              sx={{
                '& > :not(style)': { mb:3, width: '100%' },
              }}
              noValidate
              autoComplete='off'>
              <TextField
              required
                id='name'
                label='Tên tag'
                name="name"
              />
              <TextField
                id='Icon url'
                label='Icon'
                type='url'
                name='icon'
              />
              <TextField
                id='color_bg'
                label='Màu tag'
                type='text'
                name='color_bg'
              />
              <TextField
                id='tags'
                required
                select
                name='important'
                label='Nổi bật'
                value={currency}
                onChange={handleChange}
                >
                {important.map((option:any) => (
                  <MenuItem key={option?.id} selected={option?.selected} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
              <textarea required className='w-full p-3 rounded-sm border' placeholder='Mô tả' name='description' rows={2}></textarea>
              <Button disabled={loadWhenCreate} variant='contained' type='submit'>Tạo</Button>
            </Box>
        </Box>
      </Modal>
      <div className='bg-white h-[70vh]'>
        <DataGrid
          rows={tags}
          loading={loading}
          columns={columns}
          pageSize={10}
          checkboxSelection
          disableSelectionOnClick
          rowsPerPageOptions={[5]}
        />
      </div>
    </div>
  )
}

export default Tags
