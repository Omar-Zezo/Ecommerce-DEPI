import React from 'react'

const Login = () => {
  return (
    <div className="min-h-screen w-[95%] px-5 py-10 mx-auto">
        <h1 className='text-3xl text-center mb-10 font-semibold text-sky-950'>Login</h1>
        <form className='xl:w-1/2 mx-auto bg-white p-10 shadow-lg rounded-lg w-full flex flex-col gap-5'>
            <div className='flex flex-col gap-2'>
                <label className='capitalize flex items-center gap-1 text-base font-semibold text-zinc-800' htmlFor='username'>
                username
                <span className='text-red-600 text-lg'>*</span>
                </label>
                <input type='text' id='username' className='border border-gray-300 p-3 rounded-md outline-none' placeholder='Enter Username'/>
            </div>
            <div className='flex flex-col gap-2'>
                <label className='capitalize flex items-center gap-1 text-base font-semibold text-zinc-800' htmlFor='password'>
                password
                <span className='text-red-600 text-lg'>*</span>
                </label>
                <input type='password' id='username' className='border border-gray-300 p-3 rounded-md outline-none' placeholder='Enter Username'/>
            </div>
            <div className='flex flex-col gap-2'>
                <input type='submit' className='bg-sky-950 hover:bg-sky-900 duration-300 font-semibold cursor-pointer text-white p-3 rounded-md outline-none' value={"Login"}/>
            </div>
        </form>
    </div>
  )
}

export default Login