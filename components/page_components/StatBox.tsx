import { Box, Typography, useTheme } from '@mui/material'
import { tokens } from '../../pages/theme'
import ProgressCircle from './ProgressCircle'

const StatBox = ({ title, subtitle, icon, progress, increase }: any) => {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)

  return (
    <Box width='100%' m='0 45px'>
      <Box display='flex' justifyContent='space-between'>
        <Box ml='10px'>
          {icon}
        </Box>
        <Typography variant='h5' sx={{ color: colors.greenAccent[500] }}>
          {subtitle}
        </Typography>
      </Box>
      <Box display='flex' justifyContent='space-between' mt='2px'>
        <Typography
          variant='h4'
          fontStyle='italic'
          sx={{ color: colors.greenAccent[600] }}>
          {increase}
        </Typography>
        
        <Box>
          <Typography
            variant='h4'
            fontWeight='bold'
            sx={{ color: colors.grey[100] }}>
            {title}
          </Typography>
        </Box>
      </Box>
    </Box>
  )
}

export default StatBox
