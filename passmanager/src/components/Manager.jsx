import React, { useEffect, useRef, useState } from 'react'
import { v4 as uuidv4 } from "uuid";

const Manager = () => {
  const [form, setForm] = useState({ site: "", username: "", password: "" });
  const [passwordArray, setPasswordArray] = useState([]);
  const ref = useRef();

  useEffect(() => {
    let passwords = localStorage.getItem("passwords");
    if (passwords) {
      setPasswordArray(JSON.parse(passwords));
    }
    else {
      setPasswordArray([]);
    }

  }, [])


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
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  const savePassword = () => {
    if (form.site.length > 3 && form.password.length >3 && form.username.length > 3) {
      // add password to local storage
      setPasswordArray([...passwordArray, { ...form, id: uuidv4() }]);
      localStorage.setItem("passwords", JSON.stringify([...passwordArray, { ...form, id: uuidv4() }]));
      setForm({ site: "", username: "", password: "" });
      console.log([...passwordArray, form]);
    }

  }

  const deletePassword = (id) => {
    
    const newPassword = passwordArray.filter((item) => item.id !== id)
    setPasswordArray(newPassword);
    localStorage.setItem("passwords", JSON.stringify(passwordArray.filter(item => item.id !== id)));
  }

  const editPassword = (id) => {
    setForm(passwordArray.filter((item) => item.id === id)[0])
    setPasswordArray(passwordArray.filter((item) => item.id !== id));
    localStorage.setItem("passwords", JSON.stringify(passwordArray.filter((item) => item.id !== id)));
  }




  const copyText = (text) => {
    navigator.clipboard.writeText(text);
  }





  return (
    <div className='h-full w-full flex justify-center items-center'>
      <div className="md:container h-[75vh] w-full md:w-[80vw] rounded-3xl p-5 bg-blue-200 flex flex-col overflow-hidden">

        <div className="logo text-2xl font-bold text-center ">
          <span className='text-green-500'> &lt;</span>
          <span>Pass</span><span className='text-green-500'>OP/&gt;</span>
          <div className='text-sm'>Your own Password Manager</div>
        </div>

        <div className="inputs my-5 mx-2 flex flex-col">
          <input name="site" value={form.site} onChange={handleChange} className='bg-white px-3 rounded-3xl' type="text " placeholder='Enter Website URL' />
          <div className="usernamepass my-5 flex gap-5 ">
            <input name="username" value={form.username} onChange={handleChange} className='bg-white px-3 rounded-3xl w-full' type="text" placeholder='Enter Username' />
            <div className="show relative">
              <input name="password" value={form.password} onChange={handleChange} className='bg-white px-3 rounded-3xl' type="text" placeholder='Enter Password' />
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


        <div className="passwords flex-1 min-h-0 flex flex-col">
          <h2 className='font-bold text-xl text-center py-2'>Your Passwords</h2>
          <div className="flex-1 min-h-0 overflow-auto rounded-2xl">
            <table className='w-full bg-blue-300 text-center'>
              <thead className='sticky top-0 z-50'>
                <tr className='bg-blue-400'>
                  <th className='px-2 py-1'>Site</th>
                  <th className='px-2 py-1'>Username</th>
                  <th className='px-2 py-1'>Password</th>
                  <th className='px-2 py-1'>Actions</th>
                </tr>
              </thead>
              <tbody>
                {passwordArray.length === 0 && <tr><td colSpan={4} className='text-center p-3'>No passwords found</td></tr>}
                {passwordArray.map((item, index) => {
                  return (
                    <tr key={index} >
                      <td className='px-2 py-1 border border-blue-200 '>
                        <div className='flex justify-center items-center gap-1'>
                          <a href={item.site} target="blank" className='truncate  block' title={item.site}>{item.site}</a>
                          <div className='copy shrink-0' onClick={() => copyText(item.site)}>
                            <lord-icon
                              style={{ "width": "25px", "height": "25px", "paddingTop": "3px", "paddingLeft": "3px" }}
                              src="https://cdn.lordicon.com/iykgtsbt.json"
                              trigger="hover" >
                            </lord-icon>
                          </div>
                        </div>
                      </td>
                      <td className='px-2 py-1 border border-blue-200 '>
                        <div className='flex justify-center items-center gap-1'>
                          <span className='truncate  block' title={item.username}>{item.username}</span>
                          <div className='copy shrink-0' onClick={() => copyText(item.username)}>
                            <lord-icon
                              style={{ "width": "25px", "height": "25px", "paddingTop": "3px", "paddingLeft": "3px" }}
                              src="https://cdn.lordicon.com/iykgtsbt.json"
                              trigger="hover" >
                            </lord-icon>
                          </div>
                        </div>
                      </td>
                      <td className='px-2 py-1 border border-blue-200 '>
                        <div className='flex justify-center items-center gap-1'>
                          <span className='truncate  block' title={item.password}>{item.password}</span>
                          <div className='copy shrink-0' onClick={() => copyText(item.password)}>
                            <lord-icon
                              style={{ "width": "25px", "height": "25px", "paddingTop": "3px", "paddingLeft": "3px" }}
                              src="https://cdn.lordicon.com/iykgtsbt.json"
                              trigger="hover" >
                            </lord-icon>
                          </div>
                        </div>
                      </td>
                      <td className='px-2 py-1 border border-blue-200 '>
                        <span onClick={() => editPassword(item.id)} className=' edit mx-1 cursor-pointer'>
                          <lord-icon
                            src="https://cdn.lordicon.com/gwlusjdu.json"
                            trigger="hover"
                            style={{ "width": "25px", "height": "25px" }}>
                          </lord-icon>
                        </span>
                        <span onClick={() => deletePassword(item.id)} className='delete mx-1 cursor-pointer'> <lord-icon
                          src="https://cdn.lordicon.com/skkahier.json"
                          trigger="hover"
                          style={{ "width": "25px", "height": "25px" }}>
                        </lord-icon>
                        </span>
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>


        </div>


      </div>
    </div>

  )
}

export default Manager