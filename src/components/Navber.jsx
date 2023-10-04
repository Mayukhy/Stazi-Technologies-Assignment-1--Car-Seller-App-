import { Paper } from '@mui/material'
import React, { useState } from 'react'
import SearchIcon from '@mui/icons-material/Search';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setCategoryName, setPage, setSearchTerm } from '../Redux/carSlice';
import SelectBrand from './SelectBrand';
export default function Navber() {
  const [input, setInput] = useState('')
  const dispatch = useDispatch()
  const navigate = useNavigate()

  //submit quary with enter btn
  const handelEnter = (e) => {
    if (e.key === "Enter") {
      if (input !== '') {
        dispatch(setSearchTerm(input))
        navigate('/searchFeed')
      }
      setInput('')
    }
  }
  return (
    <div className=' px-4 pb-3 bg-[#e6e4ed] flex justify-center '>
      <Paper sx={{ bgcolor: '#e6e4ed', display: 'flex', justifyContent: 'space-between', borderRadius: '20px', maxWidth: '1200px', width: { md: '785px', lg: '1150px', xl: '1200px', xs: '100%' }, pr: 2 }} elevation={3}>
        <div className=' flex gap-2 py-4 px-5'>
          <img onClick={() => {
            dispatch(setPage(1))
            navigate('/')
          }} className='md:w-[40px] object-cover w-[48px] rounded-xl md:rounded-full h-[40px] hover:animate-[spin_1.5s] transition-all duration-200 cursor-pointer' src="https://living.qa.acg.aaa.com/content/dam/aaa-living/auto/Why-You-Should-Rent-a-Car-for-Vacation/rent-a-car-vacation-hero-1.gif" alt="" />
          <Paper sx={{ borderRadius: { md: '17px', xs: '10px' }, display: 'flex', justifyContent: "space-between", gap: 1, py: 1, px: 2, width: { md: '400px', xs: '210px' }, border: 'none', boxShadow: 'none' }}>
            <input onKeyUp={handelEnter} value={input} onChange={(e) => {
              setInput(e.target.value)
            }} placeholder='Search...' type="text" className='py-0.5 pl-1 w-full border-none outline-none bg-transparent text-sm' />

            <SearchIcon onClick={() => {
              if (input !== '') {
                dispatch(setSearchTerm(input))
                navigate('/searchFeed')
              }
              setInput('')
            }} className=' text-gray-600 hover:animate-[spin_1s] cursor-pointer' />
          </Paper>
        </div>
        <div className=' my-auto'>
          <SelectBrand />
        </div>
      </Paper>
    </div>
  )
}
