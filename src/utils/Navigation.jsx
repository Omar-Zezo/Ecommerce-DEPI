import React from 'react'
import { Link } from 'react-router-dom'
import { navigationBar } from '../constants'
import { SearchWhite } from '../images/svg'

const Navigation = ({openSearch}) => {
  
  return (
    <div className='fixed bottom-0 left-0 z-50 w-full py-4 px-3 bg-zinc-900 xl:hidden'>
    <ul className='list-none w-full flex items-center justify-around'>
        {
            navigationBar.map(icon=>(
            <li key={icon.name} className='relative'>
            <Link to={icon.path}><img width={25} height={25} src={icon.icon} alt={icon.name}/></Link>
            </li>
            ))
        }
        <li className='relative' onClick={() => openSearch(true)}>
            <Link to={""}><img width={25} height={25} src={SearchWhite} alt={"search"}/></Link>
        </li>
    </ul>
</div>
  )
}

export default Navigation