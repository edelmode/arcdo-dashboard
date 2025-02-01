import React from 'react'
import HomeNavbar from '../components/HomeNavbar'
import Navbar from '../components/Navbar'
import UserAccount from '../components/UserAccount'



export default function UserPage() {
    return (
      <div className="font-montserrat h-auto">
          
          <Navbar />
          <UserAccount/>
          <HomeNavbar />
      </div>
    )
  }
  