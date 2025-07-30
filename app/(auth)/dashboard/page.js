'use client'
import { Button } from '@/app/components/ui/button'
import { useRouter } from 'next/navigation'
import React from 'react'

function Dashboard() {
  const router = useRouter()
  const handleSignout = ()=>{
  router.push("/login")
  }
  return (
    <div>
      Dashboard
      <Button onClick={handleSignout}>
        SignOut
      </Button>
    </div>
  )
}

export default Dashboard
