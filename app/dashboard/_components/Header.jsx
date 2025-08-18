"use client"
import Image from 'next/image'
import React from 'react'

export default function Header() {
  return (
    <div className='p-4 shadow-sm border flex justify-between'>
      <div>
        
      </div>
      <div>
        <Image src="/" alt="/" width={35} height={35} className='rounded-full'/>
      </div>
     </div>
  )
}
