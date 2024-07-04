

import './App.css'

import CustomRoutes from './routes/CustomRoutes'
import { Link } from 'react-router-dom'

function App() {


  return (
    <div className='outer-pokedex'>
      {/* //common content can be written as simple */}
      <h1 id="pokedex-heading">
        <Link to='/'>Poke-dex</Link></h1>
      <CustomRoutes />

    </div>
  )
}

export default App
