"use client"
import { Login, Navbar } from '@/components'
import FormLogin from '@/components/organisms/form/FormLogin'
import { AuthProvider } from '@/context/AuthContext'
import React, { useState } from 'react'

const page = () => {
  const [isShowModal, setIsShowModal] = useState<boolean>(false);

  return (
    <AuthProvider>
      {/* <div className="w-full flex justify-center items-center">
        <Navbar setIsShowModal={setIsShowModal} isShowModal={isShowModal} />
      </div> */}
       <Login/>
  
       </AuthProvider>
  )
}

export default page