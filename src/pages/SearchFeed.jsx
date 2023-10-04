import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import carData from '../cars.json'
import CarCard from '../components/CarCard'
import { useNavigate } from 'react-router-dom'
import { setsearchPage } from '../Redux/carSlice'
import { Paper, Pagination, Box } from '@mui/material'

export default function SearchFeed() {
  const carsRef = useRef()
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { searchTerm, searchPage } = useSelector(state => state?.car)
  console.log('searchterm', searchTerm)


  //Search Funtion
  const searchCars = (data) => {
    return data?.filter((car) =>
      car?.title.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase()) ||
      car?.fuel.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase()) ||
      car?.people_No.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase()) ||
      car?.handling.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase()) ||
      car?.start_production?.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase()) ||
      car?.emi?.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase()) ||
      car?.mileage?.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())
    )
  }
  const searchedData = searchCars(carData)

  //when page no is changed the url will also change
  useEffect(() => {
    if (searchPage === 1) {
      navigate('/searchFeed')
    }
    else
      navigate(`/searchFeed/page/${searchPage}`)
  }, [searchPage])

  console.log('Page no', searchPage)
  const handleChange = (event, value) => {
    dispatch(setsearchPage(value))
    carsRef.current.scrollIntoView({ behavior: "smooth" })
  }

  console.log("data", searchedData)
  return (
    <div className=' bg-[#e6e4ed] pt-4 px-4 overflow-y-auto h-[calc(100vh-85px)]'>
      {searchedData?.length > 0 ?
        <Box ref={carsRef} sx={{ maxWidth: '1200px', width: { md: '785px', lg: '1145px', xl: '1200px', xs: '100%' } }} className=' mx-auto animate-[slideup_0.6s]'>
          {searchTerm && <p className=' mt-[-15px] font-semibold text-2xl mb-2.5 flex'>Search Results For : <p className=' ml-1 font-bold text-2xl text-indigo-600'> " {searchTerm} "</p> </p>}
          <Box sx={{ gap: { lg: 2, md: 1, xs: 1 } }} className='flex flex-wrap'>
            {searchedData.slice(searchPage * 6 - 6, searchPage * 6)?.map((car) => (
              <CarCard car={car} />
            ))}
          </Box>
        </Box> :
        <p className=' font-bold text-xl text-center my-10 animate-[slideup_0.6s] text-slate-700'>
          No Cars are Available for this Search
          <img className=' w-[300px] h-auto rounded-xl mx-auto my-5 cursor-pointer animate-[slidedown_0.7s]' src="https://img.freepik.com/premium-vector/no-data-concept-illustration_86047-488.jpg" alt="" />
        </p>}
      <br />
      <br />

      {/* pagination */}
      {searchedData?.length > 0 && <div className=' flex justify-center'>
        <Paper sx={{ p: 2, border: 'none', width: { md: '785px', lg: '1150px', xl: '1200px', xs: '100%' }, bgcolor: '#e6e4ed', borderRadius: '20px', maxWidth: '1200px', display: 'flex', flexWrap: 'wrap', gap: 1, justifyContent: 'space-between' }}>
          {searchedData?.length > 6 ? <p className=' font-semibold my-auto ml-1'>{searchPage} from {Math.round(searchedData?.length / 6)}</p> : <p className='font-semibold my-auto ml-1'>Only 1 Page</p>}
          <Pagination onChange={handleChange} count={Math.round(searchedData?.length / 6)} variant="outlined" shape="rounded" />
        </Paper>
      </div>}
      <br />
    </div>
  )
}
