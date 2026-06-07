import React from 'react'

export const Navbar = () => {
  return (
    <div className='bg-slate-800 text-white py-3 px-6'>
        <div className='flex justify-between items-center px-5 h-14'>
            <div className="logo text-2xl font-bold ">
                <span className='text-green-500'> &lt;</span>
                <span>Pass</span><span className='text-green-500'>OP/&gt;</span>
            </div>
            <button className='flex items-center gap-2 bg-green-500  hover:bg-green-600 rounded-3xl px-3 py-1 text-sm font-medium'>
                <img className='invert  w-10 p-1' src="/icons/github.svg" alt="github logo" />
                <span className='font-bold'><a href="https://github.com/Harshal006-rgb" target='blank'>GitHub</a></span>
            </button>
        </div>
    </div>
  )
}
