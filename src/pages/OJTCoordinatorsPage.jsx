import React from 'react'
import Navbar from '../components/Navbar'
import OJTCoordinators  from '../components/OJTCoordinators'
import HomeNavbar from '../components/HomeNavbar'

export default function OJTCoordinatorsPage() {
  return (
    <div className="font-montserrat overflow-auto">
        <Navbar />
        <OJTCoordinators />
        <HomeNavbar />
    </div>
  )
}
