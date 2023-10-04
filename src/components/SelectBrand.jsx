import * as React from 'react';
import Select, { selectClasses } from '@mui/joy/Select';
import Option from '@mui/joy/Option';
import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown';
import { setCategoryName} from '../Redux/carSlice';
import { useDispatch} from 'react-redux';
import { useNavigate } from 'react-router-dom';

export default function SelectBrand() {
  const dispatch = useDispatch()
 const navigate = useNavigate()
  const brandName=[
"Chevrolet",
"Jeep",
"Volkswagen",
"Volvo",
"Lincoln",
"Toyota" ,
"Ford",
"Proton",
"Peugeot",
"Roewe",
"John Deere",
"BMW",
"Lexus",
"DS",
"Dodge",
"Mercedes-Benz",
"Buick Envision",
"Land Rover",
"Lada Vesta",
"Opel Karl",
"Rolls-Royce",
"Bentley Bentayga",
"Aston Martin",
"Cadillac",
"Hyundai",
"Renault",
"MG GS",
"Alpina", 
"Citroën",
"Ashok Leyland",
"Tata",
"Mahindra",
"JMC Yusheng",
"Cadillac XT5",
"Chrysler Pacifica",
"SEAT Ateca",
"Audi",
"Fiat Tipo"
  ]
  const Brands = brandName?.sort()
  return (
    <Select
      placeholder="All brands"
      indicator={<KeyboardArrowDown />}
      sx={{
        width:{ md:135,sx:120,lg:'auto'},
        color:'black',
        fontWeight:{md:600,xs:400}
,        border:'none',
        boxShadow:'none',
        fontSize:{md:'17px',xs:'15px'},
        background:'transparent',
        borderRadius:'10px',
        [`& .${selectClasses.indicator}`]: {
          transition: '0.2s',
          [`&.${selectClasses.expanded}`]: {
            transform: 'rotate(-180deg)',
          },
        },
      }}
    >
      {Brands?.map((brand)=>(
     <Option
     value={brand}
     onClick={()=>{
      dispatch(setCategoryName(brand))
      navigate('/category')
    }} >{brand}</Option>
      ))}
    </Select>
  );
}