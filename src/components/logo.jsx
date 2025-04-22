import React from 'react'
import { Braces } from 'lucide-react';

const Logo = () => {
  return (
    <div className='flex justify-center mt-5'>
        <div className='flex gap-2'>
            <Braces size={32} strokeWidth={3} />
            <h1 className='text-2xl font-bold'>
                DevCamp
            </h1>
        </div>
    </div>
  )
}

export default Logo