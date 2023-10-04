
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Home from './pages/Home'
import SearchFeed from './pages/SearchFeed'
import Navber from './components/Navber'
import CategoryFeed from './pages/CategoryFeed'

function App() {

  return (
<BrowserRouter>
<Navber/>
<Routes>
<Route path='/' element={<Home/>}/>
<Route path='/page/:pageId' element={<Home/>}/>
<Route path='/Searchfeed' element={<SearchFeed/>}/>
<Route path='/Searchfeed/page/:pageId' element={<SearchFeed/>}/>
<Route path='/category' element={<CategoryFeed/>}/>
<Route path='/category/page/:pageId' element={<CategoryFeed/>}/>

</Routes>

</BrowserRouter>
  )
}

export default App
