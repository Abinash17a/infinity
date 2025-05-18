"use client"

import React, { useState } from 'react'
import { Modal } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '@/app/redux/store'
import { closeLogInModal, closeSignUpModal, openLogInModal, openSignUpModal } from '@/app/redux/slices/modalSlice'
import { EyeIcon, EyeSlashIcon, PhoneXMarkIcon, XMarkIcon } from '@heroicons/react/24/outline'


export default function LogInModal() {
    const [showPassword, setshowPassword] = useState(false)

    const isOpen = useSelector((state: RootState) => state.modals.logInModalOpen)

    const dispatch: AppDispatch = useDispatch()

    return (
        <>
            <button className="w-full h-[48px] md:w-[88px] md:h-[40px] text-md md:text-sm border border-2 border-gray-100 rounded-full text-white font-bold hover:bg-white hover:bg-opacity-25 transition" onClick={()=> dispatch(openLogInModal())}>Login</button>
            <Modal
                open={isOpen}
                onClose={() => dispatch(closeLogInModal())}
                className='flex justify-center items-center'
            >
                <div className='w-full h-full sm:w-[600px] sm:h-fit bg-white sm:rounded-xl '>
                    <XMarkIcon className='w-7 mt-7 ms-5 text-gray-400 cursor-pointer'
                        onClick={() => dispatch(closeLogInModal())} />
                    <form action="" className='pt-10 pb-20 px-4 sm:px-20'>

                        <h1 className='text-3xl font-bold mb-10 '>Log in here</h1>
                        <div className='w-full space-y-5 mb-10'>
                            <input type="email" className='w-full h-[54px] border border-gray-200 outline-none ps-3 rounded-[4px] focus:border-[#F4AF01] transition'
                                placeholder='E-mail' />
                            <div className='w-full h-[54px] border border-gray-200 outline-none  rounded-[4px] focus-within:border-[#F4AF01] transition flex items-center overflow-hidden pr-3'>
                                <input type={showPassword ? 'text' : 'password'}
                                    placeholder='Password' className='w-full h-full ps-3 outline-none' />
                                <div className='w-7 h-7 text-gray-400 cursor-pointer' onClick={() => setshowPassword(!showPassword)}>
                                    {showPassword ? <EyeSlashIcon /> : <EyeIcon />}
                                </div>
                            </div>
                             <button className=' bg-[#F4AF01] text-white w-full h-[48px] rounded-full font-bold text-sm hover:bg-[#F4AF01]/80 transition duration-200'>
                                LogIn
                            </button>
                            <span className='mb-5 text-sm text-center block'> Or </span>
                            <button className=' bg-[#F4AF01] text-white w-full h-[48px] rounded-full font-bold text-sm hover:bg-[#F4AF01]/80 transition duration-200'>
                                LogIn as a guest
                            </button>
                        </div>

                    </form>
                </div>
            </Modal>
        </>
    )
}
