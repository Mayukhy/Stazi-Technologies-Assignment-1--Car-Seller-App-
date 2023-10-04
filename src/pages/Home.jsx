import React, { useEffect, useRef, useState } from 'react'
import carData from '../cars.json'
import {Box, Pagination, Paper } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { setPage } from '../Redux/carSlice'
import { useNavigate } from 'react-router-dom'
import CarCard from '../components/CarCard'
export default function Home() {
  const carsRef = useRef()
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { page } = useSelector(state => state?.car)
  useEffect(() => {
    if (page === 1) {
      setPage(1)
      navigate('/')
    }
    else
      navigate(`/page/${page}`)
  }, [page])



  console.log('Page no', page)
  const handleChange = (event, value) => {
    dispatch(setPage(value))
    carsRef.current.scrollIntoView({behavior: "smooth"})
  }

  return (
    <div className='bg-[#e6e4ed] px-4 pt-4 overflow-y-auto h-[calc(100vh-85px)] '>


      <Box ref={carsRef} sx={{ maxWidth: '1200px', width: { md: '785px', lg: '1145px', xl: '1200px', xs: '100%' }}} className=' mx-auto animate-[slideup_0.6s]'>
         <Box sx={{gap:{lg:2,md:1,xs:1}}} className='flex flex-wrap'>
        {carData?.slice(page * 6 - 6, page * 6)?.map((car) => (
          <CarCard car={car} />
        ))}
        </Box>
      </Box>
      <br />
      <br />

      {/* pagination */}
      <div className=' flex justify-center'>
        <Paper sx={{ p: 2, border: 'none', width: { md: '785px', lg: '1150px', xl: '1200px', xs: '100%' }, bgcolor: '#e6e4ed', borderRadius: '20px', maxWidth: '1200px', display: 'flex', flexWrap: 'wrap', gap: 1, justifyContent: 'space-between' }}>
          <p className=' font-semibold my-auto ml-1'>{page} from 10</p>
          <Pagination onChange={handleChange} count={Math.round(carData?.length / 6)} variant="outlined" shape="rounded" />
        </Paper>
      </div>

      <br />
    </div>
  )
}
