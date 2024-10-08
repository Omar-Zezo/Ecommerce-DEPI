import React from 'react'
import { footerLinks, socialMedia } from '../constants'
import { LogoWhite } from '../images/imgs'
import { copyrightSign } from '../images/svg'
import { Link } from 'react-router-dom'
import Navigation from './Navigation'

const Footer = ({openSearch}) => {
  return (
    <footer className='bg-sky-950 padding-x padding-t pb-8 xl:p-10 py-10 px-5'>
        <div className='flex justify-between items-start gap-20 flex-wrap max-lg:flex-col'>
          <div className='flex flex-col items-start'>
            <a href='/'>
            <img src={LogoWhite} alt='footer-logo' width={150} height={46}/>
            </a>
            <p className='mt-6 text-base text-white-400 leading-7 text-white font-montserrat sm:max-w-sm'>
            Get shoes ready for the new term at your nearest Nike store. Find Your perfect Size In Store. Get Rewards
            </p>
            <div className='flex items-center gap-5 mt-8'>
              {
                socialMedia.map((icon)=>(
                  <div key={icon.alt} className='flex justify-center items-center bg-white w-12 h-12 rounded-full'>
                    <img src={icon.src} alt={icon.alt} width={24} height={24}/>
                  </div>
                ))
              }
            </div>
          </div>
          <div className='flex flex-1 justify-between lg:gap-10 gap-20 flex-wrap'>
              {
                footerLinks.map((section, index)=>(
                  <div key={index} className=''>
                    <h4 className='text-white font-montserrat text-2xl leading-normal font-medium mb-6'>{section.title}</h4>
                    <ul>
                      {
                        section.links.map((link)=>(
                          <li key={link.name} className='mt-3 text-white-400 font-montserrat text-base leading-normal hover:text-slate-gray'>
                            <Link to={link.link} className='text-white capitalize hover:text-orange-500 duration-300'>{link.name}</Link>
                          </li>
                        ))
                      }
                    </ul>
                  </div>
                ))
              }
          </div>
        </div>
        <div className='flex justify-between text-white-400 mt-24 max-sm:flex-col max-sm:items-center'>
              <div className='flex flex-1 justify-start items-center gap-2 font-montserrat cursor-pointer'>
              <img src={copyrightSign} alt='copyright' width={20} height={20} className='rounded-full m-0'/>
              <p className='text-white text-center'>
              Copyright. All rights reserved.
              </p>
              </div>
              <p className='font-montserrat text-lg cursor-pointer text-white'>Terms & Conditions</p>
              <Navigation openSearch= {openSearch}/>
        </div>
    </footer>
  )
}

export default Footer