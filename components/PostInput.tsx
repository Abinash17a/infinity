import { CalendarIcon, ChartBarIcon, FaceSmileIcon, MapPinIcon, PhotoIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'
import React from 'react'

export default function PostInput() {
    return (
        <div className='flex space-x-5 p-3'>
            <Image
                src={"/assets/infinitylogo.png"}
                width={44}
                height={44}
                alt='logo'
                className='w-11 h-11'
            />
            <div className='w-full'>
                <textarea className='resize-none outline-none w-full min-h-[50px] text-lg'
                    placeholder='whats up?' />

                <div className='flex justify-between items-center pt-5 '>
                    <div className='flex space-x-1.5'>
                    <PhotoIcon className='h-[22px] w-[22px] text-[#F4AF01]' />
                    <ChartBarIcon className='h-[22px] w-[22px] text-[#F4AF01]' />
                    <FaceSmileIcon className='h-[22px] w-[22px] text-[#F4AF01]' />
                    <CalendarIcon className='h-[22px] w-[22px] text-[#F4AF01]' />
                    <MapPinIcon className='h-[22px] w-[22px] text-[#F4AF01]' />
                    </div>
                    <button className='bg-emerald-800 text-white w-[80px] h-[36px] rounded-full text-sm cursor-pointer'>Infinity</button>
                </div>
            </div>
        </div>
    )
}
