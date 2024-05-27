"use client"
import { Login } from '@/components'
import { UserProvider } from '@/context/UserContext'
import React from 'react'

const page = () => {
  return (
    <UserProvider> <Login/> </UserProvider>
  )
}

export default page