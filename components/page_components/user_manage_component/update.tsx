import { usersApi } from '@/api-client/user-api'
import { PencilIcon } from '@heroicons/react/24/solid'
import {
  Button,
  Modal,
  Box,
  Typography,
  TextField,
  MenuItem,
} from '@mui/material'
import { useEffect, useState } from 'react'
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
export function UpdateUser({ oldData }: any) {
  var dataJson = JSON.parse(oldData)
  const [open, setOpen] = useState(false)
  const [status, setStatus] = useState<any>()
  const [role, setRole] = useState<any>()
  useEffect(() => {
    setRole(dataJson?.role)
    setStatus(dataJson?.statusEnum)
  }, [])
  const roleData: any = [
    {
      id: 1,
      value: 'ADMIN',
      label: 'Admin',
    },
    {
      id: 2,
      value: 'USER',
      label: 'User',
    },
  ]
  const statusData: any = [
    {
      id: 1,
      value: "ACTIVE",
      label: 'Active',
    },
    {
      id: 2,
      value: "BLOCKED",
      label: 'Blocked',
    },
  ]
  const handleSubmit = async (event: any) => {
    event.preventDefault()
    let dataSend = JSON.stringify({
      status: status,
      role: role,
    })
    await usersApi.updateUser(dataJson?.id, dataSend).then((res) => {
      setOpen(false)
    })
  }

  return (
    <>
      <Button onClick={() => setOpen(true)}>
        <PencilIcon className='h-6 w-6' />
      </Button>
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'>
        <Box sx={style}>
          <Box
            component='form'
            onSubmit={handleSubmit}
            sx={{
              '& > :not(style)': { mb: 3, width: '100%' },
            }}
            noValidate
            autoComplete='off'>
            <TextField
              id='role'
              required
              select
              name='role'
              label='Role'
              value={role}
              onChange={(event) => setRole(event.target.value)}>
              {roleData.map((option: any) => (
                <MenuItem key={option?.id} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
            <TextField
              id='status'
              required
              select
              name='statusEnum'
              label='Status'
              value={status}
              onChange={(event) => setStatus(event.target.value)}>
              {statusData.map((option: any) => (
                <MenuItem key={option?.id} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
            <Button variant='contained' type='submit'>
              Cập nhật
            </Button>
          </Box>
        </Box>
      </Modal>
    </>
  )
}
