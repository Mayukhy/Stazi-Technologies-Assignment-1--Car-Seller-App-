import { Box, Button, Card, CardContent, CardMedia, Divider } from '@mui/material'
import React from 'react'
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import LocalGasStationIcon from '@mui/icons-material/LocalGasStation';
import SpeedIcon from '@mui/icons-material/Speed';
import DriveEtaIcon from '@mui/icons-material/DriveEta';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import { IconButton } from '@mui/joy';
export default function CarCard({ car }) {
  return (
    //Most reusable component
    <Box
      sx={{
        perspective: '1000px',
        transition: 'transform 0.4s',
        '& > div, & > div > div': {
          transition: 'inherit',
        },
        '&:hover': {
          '& > div': {
            transform: 'rotateY(25deg)',
            '& > div:nth-child(3)': {
              transform: 'translate3d(45px, 50px, 40px)',
            },
          },
        },
      }}
    >
      <Card
        sx={{
          minHeight: '280px',
          width: { lg: 370, xl: 388, md: 388, xs: '95vw' },
          backgroundColor: '#fff',
          borderColor: '#000',
          borderRadius: '10px',
          bgcolor: '#ecebf0',
          cursor: 'pointer'
        }}>
        <CardMedia sx={{ width: { xs: '95%', md: 360, lg: 345, xl: 360 }, height: { md: 200, sm: 350, xs: 250 }, m: 'auto', mt: 1.5, borderRadius: '10px' }} title="" image={car?.image || 'https://c4.wallpaperflare.com/wallpaper/969/287/741/5bd1c0678801e-wallpaper-preview.jpg'} />
        <CardContent sx={{
          w: 360,
          backdropFilter: 'blur(1px)',

        }}>

          {/* name and year */}
          <div className=' flex justify-between'>
            <p className='font-semibold text-lg'>{car?.title}</p>
            <p className='border border-blue-400 border-dashed rounded-xl px-2 font-semibold  '>{car?.start_production || 2023}</p>
          </div>
          <br />
          {/* people & fuel */}
          <div className=' flex gap-24'>
            <div className=' flex gap-1 cursor-pointer'>
              <PeopleOutlineIcon className=' text-blue-500' />
              <p className='text-sm mt-[1.5px]'>{car?.people_No} People</p>
            </div>
            <div className=' flex gap-1 cursor-pointer'>
              <LocalGasStationIcon className=' text-blue-500' />
              <p className='text-sm mt-[1.5px]'>{car?.fuel}</p>
            </div>
          </div>
          {/* mileage & handling */}
          <div className=' flex gap-[61px] mt-3'>
            <div className=' flex gap-1 cursor-pointer'>
              <SpeedIcon className=' text-blue-500' />
              <p className='text-sm mt-[1.5px]'>{car?.mileage}</p>
            </div>
            <div className=' flex gap-1 cursor-pointer'>
              <DriveEtaIcon className=' text-blue-500' />
              <p className='text-sm mt-[1.5px]'>{car?.handling}</p>
            </div>
          </div>
          <Divider sx={{ my: 2 }} />

          {/* EMI and btn */}
          <div className=' flex justify-between'>
            <div className=' flex gap-1 my-auto'>
              <p className='text-xl font-semibold mt-[1.5px]'>{car?.emi}</p>
              <span className='text-sm font-semibold mt-[6.5px]'> / month</span>
            </div>

            <div className=' flex gap-3 cursor-pointer'>
              <IconButton className='transition-all duration-200' sx={{ mr: 'auto', bgcolor: '#dadeed', borderRadius: '10px' }}>
                <FavoriteBorder className=' text-blue-500 p-[2px] hover:text-rose-500 transition-all duration-200' />
              </IconButton>
              <Button variant="contained" size='small' color="primary" sx={{ borderRadius: '10px', boxShadow: 'none', bgcolor: '#668cde' }}>
                Rent now
              </Button>
            </div>
          </div>


        </CardContent>
      </Card>

    </Box>
  )
}
