import React from 'react'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Layout from './components/Layout'
import HostLayout from './components/HostLayout'
import Home from './pages/Home'
import About from './pages/About'
import Houses from './pages/houses/Houses'
import HouseDetail from './pages/houses/HouseDetail'
import Dashboard from './pages/host/Dashboard'
import Income from './pages/host/Income'
import HostHouses from './pages/host/HostHouses'
import Reviews from './pages/host/Reviews'

export default function App () {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />}/>
            <Route path="about" element={<About />}/>
            <Route path="houses" element={<Houses />}/>
            <Route path="houses/:id" element={<HouseDetail />}/>
          
            <Route path="host" element={<HostLayout />}>
              <Route index element={<Dashboard />} />
              <Route path="income" element={<Income />} />
              <Route path="houses" element={<HostHouses />} />
              <Route path="reviews" element={<Reviews />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}