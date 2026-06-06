import React from 'react'
import { useRef, useState } from 'react';

const Manager = () => {
  const [form, setForm] = useState({site: "", username: "", password: ""});

  const ref = useRef();

  const showPassword = () => {
    if (ref.current.src.includes("icons/eye.png")) {
      ref.current.src = "icons/eyecross.png"
      // passwordRef.current.type = "text"
    }
    else {
      ref.current.src = "icons/eye.png"
      // passwordRef.current.type = "password"
    }
  }

  const handleChange = (e) => {
    setForm({...form, [e.target.name]: e.target.value})
  }

  const savePassword = () => {
    
  }






  return (
    <div className='h-[80vh] flex justify-center items-center  bg-white'>
      <div className="container w-3/5 rounded-3xl p-5 bg-blue-200 flex flex-col ">

        <div className="logo text-2xl font-bold text-center ">
          <span className='text-green-500'> &lt;</span>
          <span>Pass</span><span className='text-green-500'>OP/&gt;</span>
          <div className='text-sm'>Your own Password Manager</div>
        </div>

        <div className="inputs my-5 mx-2 flex flex-col">
          <input name = "site" value = {form.site} onChange={handleChange} className='bg-white px-3 rounded-3xl' type="text " placeholder='Enter Website URL' />
          <div className="usernamepass my-5 flex gap-5 ">   
            <input name = "username" value = {form.username} onChange={handleChange} className='bg-white px-3 rounded-3xl w-full' type="text" placeholder='Enter Username' />
            <div className="show relative">
             <input name = "password" value = {form.password} onChange={handleChange} className='bg-white px-3 rounded-3xl' type="text" placeholder='Enter Password' />
             <span className='absolute right-2 cursor-pointer'> 
              <img ref={ref} onClick={showPassword} className='p-1' width={26} src="icons/eye.png" alt="eye" />
             </span>
            </div>
          </div>
        </div>

        <div className="button flex justify-center">
          <button onClick={savePassword} className='flex justify-center items-center gap-2  bg-green-400 hover:bg-green-300 rounded-full px-8 py-2 w-fit border border-green-900'>
            <lord-icon
              src="https://cdn.lordicon.com/jgnvfzqg.json"
              trigger="hover" >
            </lord-icon>Save</button>
        </div>


      </div>
    </div>

  )
}

export default Manager