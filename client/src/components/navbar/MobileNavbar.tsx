import Logo from '@/assets/logo/logo'
import React from 'react'

const MobileNavbar = () => {
  return (
    <div className='lg:hidden text-white w-full fixed top-10 px-10 md:px-20' >
        <Logo />
    </div>
  )
}

export default MobileNavbar