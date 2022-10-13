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
type Props = {}

const Addpost = (props: Props) => {
  const [age, setAge] = React.useState('')

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value)
  }
  return (
    <Card variant='outlined' sx={{ maxWidth: 1000 }}>
      <div>
        <CardContent
          component='form'
          sx={{
            '& > :not(style)': { m: 2, width: '50ch' },
          }}
          noValidate
          autoComplete='off'>
          <TextField
            id='tenbaiviet'
            type={'text'}
            label='Tên Bài Viết Quang '
            variant='outlined'
          />
          <FormControl sx={{ m: 1, minWidth: 120 }}>
            <InputLabel id='demo-simple-select-helper-label'>Java</InputLabel>
            <Select
              labelId='demo-simple-select-helper-label'
              id='demo-simple-select-helper'
              value={age}
              label='Age'
              onChange={handleChange}>
              {/* <MenuItem value=''>
              </MenuItem> */}
              <MenuItem value={1}>Java</MenuItem>
              <MenuItem value={2}>C</MenuItem>
              <MenuItem value={3}>C++</MenuItem>
              <MenuItem value={4}>C#</MenuItem>
              <MenuItem value={5}>PHP</MenuItem>
              <MenuItem value={6}>SQL</MenuItem>
              <MenuItem value={7}>CSS</MenuItem>
              <MenuItem value={8}>HTML</MenuItem>
            </Select>
          </FormControl>
          <TextareaAutosize
            aria-label='empty textarea'
            placeholder='Mô Tả'
            style={{ width: 900, height: 100 }}
          />
          <Stack direction='row' alignItems='center' spacing={2}>
            <Button variant='contained' component='label'>
              Upload
              <input hidden accept='image/*' multiple type='file' />
            </Button>
            <IconButton
              color='primary'
              aria-label='upload picture'
              component='label'>
              <input hidden accept='image/*' type='file' />
              <PhotoCamera />
            </IconButton>
          </Stack>
        </CardContent>
        <Stack
          spacing={5}
          direction='row'
          sx={{
            '& > :not(style)': { m: 4, width: '50ch' },
          }}>
          <Button variant='contained'>TẠO BÀI VIẾT</Button>
        </Stack>
      </div>
    </Card>
  )
}

export default Addpost
