'use client'
import React from 'react'
import Image from 'next/image'
import { GraduationCap, Hand, LayoutIcon, Paperclip, Settings } from 'lucide-react'
import { auth, db } from '@/app/lib/firebase/config'
import { onAuthStateChanged } from 'firebase/auth'
import { doc, getDoc } from 'firebase/firestore'
import Link from 'next/link'
import { toast } from 'react-toastify'

export default function Sidebar() {
    const menuList = [
        {
            id: 1,
            name: 'Dashboard',
            icon: LayoutIcon,
            path: '/dashboard'
        },
        {
            id: 2,
            name: 'Student',
            icon: GraduationCap,
            path: '/dashboard/students'
        },
        {
            id: 3,
            name: 'Attendance',
            icon: Hand,
            path: '/dashboard/attendance'
        },
        {
            id: 4,
            name: 'Exams',
            icon: Paperclip,
            path: '/dashboard/exams'
        },
        {
            id: 5,
            name: 'Settings',
            icon: Settings,
            path: '/dashboard/settings'
        }
    ]

      onAuthStateChanged(auth, async () => {
    const local = localStorage.getItem("User");
    if (local) {
      const docRef = doc(db, "teachers", local);
      const docSnap = await getDoc(docRef);
      try{
          if (docSnap.exists()) {
              const userData = docSnap.data();
              document.getElementById("email").innerText = userData.email;
              document.getElementById("fname").innerText = userData.fname;
            }
        }catch(error){
        toast.error("Error Finding Data")
        }

    }
  });

    return (
        <>
            <div className='border shadow-md h-screen p-5'>
                <Image src={'/logo.svg'} width={120} height={50} alt='/'/>
                <hr className='my-6'></hr>
                {menuList.map((menu, index) =>
                    <div key={index}>
                        <Link href={menu.path}>
                        <h2 className='flex items-center gap-3 text-md p-2
                          text-slate-500
                          hover:bg-purple-700
                          hover:text-white
                          rounded-lg
                          my-2
                          '>
                            <menu.icon/>
                            {menu.name}
                        </h2>
                            </Link>
                    </div>
                )}
                <div className='flex items-center gap-1 bottom-5 fixed'>
                 <Image src={"/"} alt='/' width={35} height={35} className='rounded-full'/>
                 <div>
                 <h2 id='fname' className='text-sm font-semibold'></h2>
                 <h2 id='email' className='text-xs text-slate-400'></h2>
                 </div>
                </div>
            </div>
        </>
    )
}
