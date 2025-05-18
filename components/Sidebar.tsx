import React from 'react'
import {HomeIcon,HashtagIcon ,BellIcon,InboxIcon,BookmarkIcon,UserIcon,EllipsisHorizontalCircleIcon} from '@heroicons/react/24/outline'
import Image from 'next/image';

const Sidebar = () => {
    return (
        <nav className='h-screen hidden sm:flex flex-col sticky top-0 p-3 xl:ml-20 xl:mr-10'>
            <div className='relative h-full'>
            <div className='py-3'>
                <Image src={"/assets/infinitylogo.png"} alt="Infinity Logo" width={48} height={48}/>
            </div>
            <ul>
                <SidebarLink text="Home" Icon={HomeIcon}/>
                <SidebarLink text="Explore" Icon={HashtagIcon}/>
                <SidebarLink text="Notifications"  Icon={BellIcon}/>
                <SidebarLink text="Messages"  Icon={InboxIcon}/>
                <SidebarLink text="Messages"  Icon={InboxIcon}/>
                <SidebarLink text="Bookmarks"  Icon={BookmarkIcon}/>
                <SidebarLink text="Profile"  Icon={UserIcon}/>
                <SidebarLink text="Lists"  Icon={EllipsisHorizontalCircleIcon}/>
                <button className='hidden xl:block bg-[#f4AF01] w-[200px] h-[52px] rounded-full text-white font-medium cursor-pointer shadow-md mt-2'>
                    Infinity
                </button>
            </ul>
            <div className='absolute bottom-0'>User Info</div>
            </div>
        </nav>
    )
}

interface SidebarLinkProps{
    text:string,
    Icon:React.ForwardRefExoticComponent<Omit<React.SVGProps<SVGSVGElement>, "ref"> & {
        title?: string;
        titleId?: string;
    } & React.RefAttributes<SVGSVGElement>>
}

function  SidebarLink({text,Icon}: SidebarLinkProps){
    return <li className='flex items-center text-xl mb-2 space-x-3 p-2.5'>
        <Icon className='h-6 w-6'/>
        <span className='hidden xl:block'>{text}</span></li>;
}

export default Sidebar