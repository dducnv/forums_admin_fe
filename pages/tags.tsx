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


const columns: GridColDef[] = [
  { field: 'name', headerName: 'Tiêu Đề', width: 400 },
  {
    field: 'icon',
    headerName: '#Tags',
    width: 300,
    renderCell: (param: any) => (
      <img
        src={param?.value}
        className='w-6 h-6 object-contain overflow-hidden'
      />
    ),
  },
  { field: 'description', headerName: 'Mô Tả', width: 400 },
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
  const [currency, setCurrency] = React.useState('EUR')

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCurrency(event.target.value)
  }
  const [open, setOpen] = React.useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)
  const [tags, setTags] = useState([])
  useEffect(() => {
    const getPosts = async () => {
      const data: any = await tagsApi.getList()
      console.log(data)
      setTags(data)
    }
    getPosts()
  }, [])

  const currencies = [
    {
      value: 'loaiphp',
      label: 'PHP',
    },
    {
      value: 'loaijava',
      label: 'Java',
    },
    {
      value: 'loaic',
      label: 'C',
    },
    {
      value: 'loaic#',
      label: 'C#',
    },
    {
      value: 'loaic++',
      label: 'C++',
    },
    {
      value: 'loaipython',
      label: 'Python',
    },
    {
      value: 'loaihtml',
      label: 'HTML',
    },
    {
      value: 'loaicss',
      label: 'CSS',
    },
  ]

  // const Allpost = (props: Props) => {
  return (
    <div style={{ height: 400, width: '100%' }}>
      <h2>Danh Sách Tags</h2>
      <Button onClick={handleOpen}>Tạo Hashtag</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'>
        <Box sx={style}>
          <Typography id='modal-modal-title' variant='h6' component='h2'>
            Nhập Hashtag
          </Typography>
          <Typography id='modal-modal-description' sx={{ mt: 2 }}>
            <Box
              component='form'
              sx={{
                '& > :not(style)': { m: 1, width: '50ch' },
              }}
              noValidate
              autoComplete='off'>
              <TextField
                helperText='Please enter your name'
                id='name'
                label='Name'
              />
              <TextField
              id='tags'
              select
              label='Select'
              value={currency}
              onChange={handleChange}
              helperText='Vui lòng nhập thể loại Tag'>
              {currencies.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
              <TextField
                helperText='Please enter your name'
                id=''
                label='Name'
              />
              <Button variant='contained'>Tạo</Button>
            </Box>
          </Typography>
        </Box>
      </Modal>
      <DataGrid
        rows={tags}
        columns={columns}
        pageSize={7}
        checkboxSelection
        disableSelectionOnClick
        rowsPerPageOptions={[5]}
      />
    </div>
  )
}

export default Tags
