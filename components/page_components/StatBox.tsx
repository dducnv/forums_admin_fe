import { Box, Typography, useTheme } from '@mui/material'
import { tokens } from '../../pages/theme'
import ProgressCircle from './ProgressCircle'

const StatBox = ({ title, increase, icon, data_count }: any) => {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)

  return (
    <>
      <div className='w-full rounded-md border border-gray-300 shadow-md bg-white'>
        <div className='flex items-center px-5 py-5'>
          <div>
            <div className='bg-indigo-400 rounded-md h-14 w-14 flex justify-center items-center text-white'>{icon}</div>
          </div>
          <div className='ml-4'>
            <div className='text-lg font-semibold text-gray-700'>{title}</div>
            <div className='text-3xl font-bold'>{data_count}</div>
          </div>
        </div>
        <div className='w-full border-t px-5 py-3 bg-gray-50'>
          <span>Xem thêm</span>
        </div>
      </div>
    </>
  )
}

export default StatBox
