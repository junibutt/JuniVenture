import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Topage from './Topage'
import Deals from './Deals'
import Howitworks from './Howitworks'
import Nextpg from './Nextpg'
import PopularDestinations from './PopularDestinations'
import Savings from './Savings'
import Info from './Info'
import Footer from './Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Topage/>
        <Deals/>
        < Howitworks/>
        <Nextpg/>
        <PopularDestinations/>
        <Savings/>
        <Info/>
        <Footer/>
      </div>
     
    </>
  )
}

export default App
