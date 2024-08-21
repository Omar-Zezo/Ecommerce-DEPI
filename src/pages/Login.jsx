import { useForm } from "react-hook-form"
import { useDispatch, useSelector } from "react-redux"
import { authUser } from "../redux/actions/authactions"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { toast } from 'react-toastify';
import Notify from '../utils/Notify'

const Login = () => {

    const loginData = useSelector(state=> state.authReducer.auth)
    const dispatch = useDispatch()

    const navigate = useNavigate()

    const {register, handleSubmit, formState: {errors}} = useForm({
        mode: "onTouched"
    })


    const onSubmit = (data) => {
        dispatch(authUser(JSON.stringify(data)))
    }

    const errorMsg = (msg) => toast.error(msg);

    useEffect(()=>{
        if(loginData){
            if(loginData.status === 200){
                if(loginData.data){
                    localStorage.setItem("token", loginData.data.token)
                    navigate('/admin')
                }
            }else{
                errorMsg(loginData.data?.message)
            }
        }
    },[loginData])

  return (
    <div className="min-h-screen w-[95%] py-10 mx-auto">
        <h1 className='text-3xl text-center mb-10 font-semibold text-sky-950'>Login</h1>
        <form className='xl:w-1/2 mx-auto bg-white p-10 shadow-lg rounded-lg w-full flex flex-col gap-5' onSubmit={handleSubmit(onSubmit)}>
            <div className='flex flex-col gap-2'>
                <label className='capitalize flex items-center gap-1 text-base font-semibold text-zinc-800' htmlFor='username'>
                username
                <span className='text-red-600 text-lg'>*</span>
                </label>
                <input type='text' id='username' className={`border ${errors.username?.message ? 'border-red-600' : 'border-gray-300'} p-3 rounded-md outline-none`} placeholder='Enter Username'
                {...register("username", {required: "This Field is Required"})}
                />
                <span className="text-red-600 text-base">{errors.username?.message}</span>
            </div>
            <div className='flex flex-col gap-2'>
                <label className='capitalize flex items-center gap-1 text-base font-semibold text-zinc-800' htmlFor='password'>
                password
                <span className='text-red-600 text-lg'>*</span>
                </label>
                <input type='password' id='password' className={`border ${errors.password?.message ? 'border-red-600' : 'border-gray-300'} p-3 rounded-md outline-none`} placeholder='Enter Username'
                {...register("password", {required: "This Field is Required"})}
                />
                <span className="text-red-600 text-base">{errors.password?.message}</span>
            </div>
            <div className='flex flex-col gap-2'>
                <input type='submit' className='bg-sky-950 hover:bg-sky-900 duration-300 font-semibold cursor-pointer text-white p-3 rounded-md outline-none' value={"Login"}/>
            </div>
        </form>
        <Notify/>
    </div>
  )
}

export default Login