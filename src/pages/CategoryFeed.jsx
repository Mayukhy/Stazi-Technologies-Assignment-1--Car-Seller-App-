import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import carData from '../cars.json'
import CarCard from '../components/CarCard'
import { useNavigate } from 'react-router-dom'
import { setCategoryPage } from '../Redux/carSlice'
import { Paper, Pagination, Box } from '@mui/material'

export default function CategoryFeed() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { categoryName, catePage } = useSelector(state => state?.car)
  console.log('Category Name is', categoryName)


  //Select category function
  const categoryCar = (data) => {
    return data?.filter((car) =>
      car?.title?.toLocaleLowerCase()?.includes(categoryName.toLocaleLowerCase()))
  }


  //the array of those cars which are selected by the users
  const categoryCarsdata = categoryCar(carData)

  useEffect(() => {
    if (catePage === 1) {
      navigate('/category')
    }
    else
      navigate(`/category/page/${catePage}`)
  }, [catePage, categoryName])

  console.log('Page no', catePage)
  const handleChange = (event, value) => {
    dispatch(setCategoryPage(value))
  }

  return (
    <div className=' bg-[#e6e4ed] px-4 pt-4 overflow-y-auto h-[calc(100vh-85px)]'>
      <Box sx={{ maxWidth: '1200px', width: { md: '785px', lg: '1145px', xl: '1200px', xs: '100%' } }} className=' mx-auto animate-[slideup_0.6s]'>
        <Box sx={{ gap: { lg: 2, md: 1, xs: 1 } }} className='flex flex-wrap'>
          {categoryCarsdata.slice(catePage * 6 - 6, catePage * 6)?.map((car) => (
            <CarCard car={car} />
          ))}
        </Box>
      </Box>
      <br />
      <br />
      {/* pagination */}
      <div className=' flex justify-center'>
        <Paper sx={{ p: 2, border: 'none', width: { md: '785px', lg: '1150px', xl: '1200px', xs: '100%' }, bgcolor: '#e6e4ed', borderRadius: '20px', maxWidth: '1200px', display: 'flex', flexWrap: 'wrap', gap: 1, justifyContent: 'space-between' }}>
          {categoryCarsdata?.length > 6 ? <p className=' font-semibold my-auto ml-1'>{catePage} from {Math.round(categoryCarsdata?.length / 6)}</p> : <p className=' font-semibold ml-1'>Only 1 Page</p>}
          {categoryCarsdata?.length > 6 && <Pagination onChange={handleChange} count={Math.round(categoryCarsdata?.length / 6)} variant="outlined" shape="rounded" />}
        </Paper>
      </div>
      <br />
    </div>
  )
}
