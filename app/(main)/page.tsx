"use client"
import React from 'react'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'

const page = () => {
  const Router = useRouter()
  return (
    <div>
      <h1 className='text-red-400 text-3xl font-bold'>This is Home Page</h1>
      <Button className='text-gray-700 bg-cyan-100 m-3' onClick={()=>(Router.push('/auth'))}>Login Page</Button>
      
    </div>
  )
}

export default page
