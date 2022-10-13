import React from 'react'
import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import FormGroup from '@mui/material/FormGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'
type Props = {}

const Adduser = (props: Props) => {
  return (
    <Card variant='outlined' sx={{ maxWidth: 1000 }}>
      <h2>Thêm tài khoản</h2>
      <div>
        <CardContent
          component='form'
          sx={{
            '& > :not(style)': { m: 2, width: '100ch' },
          }}
          noValidate
          autoComplete='off'>
          <TextField
            id='email'
            name='email'
            type={'email'}
            label='Email'
            variant='outlined'
          />
          <TextField
            id='phone'
            type={'number'}
            label='Số điện thoại'
            variant='outlined'
          />
          <TextField
            id='fullname'
            type={'text'}
            label='Họ và Tên'
            variant='outlined'
          />
          <TextField
            id='password'
            type={'password'}
            label='Mật Khẩu'
            variant='outlined'
          />
          <TextField
            id='confirmpassword'
            name='password'
            type={'password'}
            label='Xác Nhận Mật Khẩu'
            variant='outlined'
          />
          <FormGroup>
            <FormControlLabel
              control={<Checkbox defaultChecked />}
              label='Đồng ý'
            />
          </FormGroup>
        </CardContent>

        <Stack
          spacing={5}
          direction='row'
          sx={{
            '& > :not(style)': { m: 4, width: '50ch' },
          }}>
          <Button variant='contained'>THÊM MỚI</Button>
        </Stack>
      </div>
    </Card>
  )
}

export default Adduser
