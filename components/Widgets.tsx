import { EllipsisHorizontalIcon, MagnifyingGlassCircleIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'
import React from 'react'

export default function Widgets() {
  return (
    <div className='p-3 hidden lg:flex flex-col space-y-4 w-[400px]'>
      <div className=' bg-gray-300 text-[#89959D] h-[44px] items-center space-x-3 rounded-full pl-5  flex'>
        <MagnifyingGlassIcon className='w-[20px] h-[20px] cursor-pointer' />
        <input type="text" placeholder="Search infinity "
          className='bg-transparent outline-none' />
      </div>

      <div className='bg-[#EFF3F4] rounded-xl p-3'>
        <h1>wHATS HAPPENING</h1>
        <div className='flex flex-col text-sm py-3'>
          <div className='flex justify-between text-[#536471] text-[13px]'>
            <span> Trending in Australia</span>
            <EllipsisHorizontalIcon className='w-[20px]' />
          </div>
          <span className='font-bold text-md'>#ReactJs</span>
          <span className='text-[#536471] text-xs'>240k Infinity</span>
        </div>
        <div className='flex flex-col text-sm py-3 space-y-0.3'>
          <div className='flex justify-between text-[#536471] text-[13px]'>
            <span> Trending in Australia</span>
            <EllipsisHorizontalIcon className='w-[20px]' />
          </div>
          <span className='font-bold text-md'>#ReactJs</span>
          <span className='text-[#536471] text-xs'>240k Infinity</span>
        </div>
        <div className='flex flex-col text-sm py-3 space-y-0.3'>
          <div className='flex justify-between text-[#536471] text-[13px]'>
            <span> Trending in Australia</span>
            <EllipsisHorizontalIcon className='w-[20px]' />
          </div>
          <span className='font-bold text-md'>#ReactJs</span>
          <span className='text-[#536471] text-xs'>240k Infinity</span>
        </div>
        <div className='flex flex-col text-sm py-3 space-y-0.3'>
          <div className='flex justify-between text-[#536471] text-[13px]'>
            <span> Trending in Australia</span>
            <EllipsisHorizontalIcon className='w-[20px]' />
          </div>
          <span className='font-bold text-md'>#ReactJs</span>
          <span className='text-[#536471] text-xs'>240k Infinity</span>
        </div>

      </div>
      <div className='bg-[#EFF3F4] rounded-xl p-3'>
        <h1 className='text-xl font-bold mb-2'>Who to follow</h1>

        <div className='flex justify-between items-center p-3'>
          <div className='flex items-center space-x-3'>
            <Image
              src={'/assets/infinitylogo.png'}
              width={56}
              height={56}
              alt="profile picture of the guy"
              className='w-14 h-14 rounded-full'
            />
            <div className='flex flex-col text-sm' >
              <span className='font-bold'>Iman Musa</span>
              <span>@imancodes</span>
            </div>
          </div>
          <button className='bg-[#0F1419] text-white w-[72px] h-[40px] rounded-full text-sm'>
            Follow
          </button>
        </div>

        <div className='flex justify-between items-center p-3'>
          <div className='flex items-center space-x-3'>
            <Image
              src={'/assets/infinitylogo.png'}
              width={56}
              height={56}
              alt="profile picture of the guy"
              className='w-14 h-14 rounded-full'
            />
            <div className='flex flex-col text-sm' >
              <span className='font-bold'>Iman Musa</span>
              <span>@imancodes</span>
            </div>
          </div>
          <button className='bg-[#0F1419] text-white w-[72px] h-[40px] rounded-full text-sm'>
            Follow
          </button>
        </div>

        <div className='flex justify-between items-center p-3'>
          <div className='flex items-center space-x-3'>
            <Image
              src={'/assets/infinitylogo.png'}
              width={56}
              height={56}
              alt="profile picture of the guy"
              className='w-14 h-14 rounded-full'
            />
            <div className='flex flex-col text-sm' >
              <span className='font-bold'>Iman Musa</span>
              <span>@imancodes</span>
            </div>
          </div>
          <button className='bg-[#0F1419] text-white w-[72px] h-[40px] rounded-full text-sm'>
            Follow
          </button>
        </div>

      </div>
    </div>
  )
}
