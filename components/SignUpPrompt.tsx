"use client"

import React from 'react'
import SignUpModal from './modals/SignUpModal'
import LogInModal from './modals/LoginModal'

export default function SignUpPrompt() {
  return (
    <div className='fixed w-full h-[80px] bg-[#F4AF01] bottom-0 flex justify-center items-center space-x-5 lg:justify-between lg:px-20 xl:px-40 2xl:px-80'>
      <div className='hidden md:flex flex-col text-white'>
        <span className='text-xl font-bold'>okaay bruh u can sign up in this place</span>
        <span>okaay bruh u can sign up in this place yeah the above part</span>
      </div>

      <div className='flex space-x-2 w-full md:w-fit p-3'>
        <LogInModal/>
        <SignUpModal />
      </div>
    </div>
  )
}
