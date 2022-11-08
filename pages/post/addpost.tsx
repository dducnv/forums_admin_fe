import React from 'react'
import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select, { SelectChangeEvent } from '@mui/material/Select'
import TextareaAutosize from '@mui/material/TextareaAutosize'
import IconButton from '@mui/material/IconButton'
import PhotoCamera from '@mui/icons-material/PhotoCamera'
import { useEffect, useState } from 'react'
import { postApi } from '@/api-client/post-api'
import { ValidationGroup } from 'mui-validate'
import Box from '@mui/material/Box'
type Props = {}

const Addpost = (props: Props) => {
  const [currency, setCurrency] = React.useState('EUR')

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCurrency(event.target.value)
  }

  const [age, setAge] = React.useState('')

  // const handleChange = (event: SelectChangeEvent) => {
  //   setAge(event.target.value)
  // }
  const [posts, setPosts] = useState([])
  useEffect(() => {
    const getPosts = async () => {
      const data: any = await postApi.getList()
      console.log(data)
      setPosts(data)
    }
    getPosts()
  }, [])

  const [title, settitle] = useState('')
  const [content, setcontent] = useState('')

  // const addPost =  async () => {
  //   const post ={name: 'Quang Moc',salary: '3222000.00'}
  //   await axios.post(apiEndPoint, post);
  //   setPosts([post,...posts]);
  // };

  const validate = () => {}

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

  return (
    <div style={{ height: 600, width: '100%' }}>
      <h2>Tạo Bài Viết</h2>
      <Card variant='outlined' sx={{ maxWidth: 1000 }}>
        <>
          <CardContent
            component='form'
            sx={{
              '& > :not(style)': { m: 2, width: '50ch' },
            }}
            noValidate
            autoComplete='off'>
            <TextField
              id='tenbaiviet'
              name='title'
              type={'text'}
              label='Tiêu đề'
              variant='outlined'
              onChange={(e) => settitle(e.target.value)}
              value={title}
              error
              helperText='Nhập tiêu đề vào'
            />

            <TextField
              id='outlined-select-currency'
              select
              label='Select'
              value={currency}
              onChange={handleChange}
              error
              helperText='Vui lòng nhập thể loại Tag'>
              {currencies.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>

            <TextField
              multiline
              rows={2}
              maxRows={4}
              aria-label='empty textarea'
              placeholder='Mô Tả'
              style={{ width: 900, height: 100 }}
              onChange={(e) => setcontent(e.target.value)}
              value={content}
              error
              helperText='Nhập nội dung mô tả bài viết'
            />
          </CardContent>
          <Stack
            spacing={5}
            direction='row'
            sx={{
              '& > :not(style)': { m: 4, width: '50ch' },
            }}>
            <Button variant='contained'>TẠO BÀI VIẾT</Button>
          </Stack>
        </>
      </Card>
    </div>
  )
}

export default Addpost
