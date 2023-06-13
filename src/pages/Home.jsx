import React from 'react'
import {FiPlay} from 'react-icons/fi'
import {Link} from 'react-router-dom'
export default function Home () {
    return (
        <div className="w-screen h-screen flex flex-col p-[30px] overflow-hidden bg-[#212121] text-blue-400 ">
            <h1 className='text-[36px] font-light'>Hello...</h1>



            <div className='my-8 relative flex flex-col items-center'>
            
                <div className='bg-[url(https://hansenjonatan.netlify.app/assets/images/profile.png)] w-[500px] h-[500px] rounded-full bg-cover bg-center'></div>

                <div className='border-blue-400 border-[6px] rounded-full w-[530px] h-[530px] absolute -top-[15px]'></div>
                
            </div>

            <h1 className='text-[36px] font-light'>Saya <br/> Hansen Jonatan</h1>
            <p className='text-[16px] font-light'>Seorang Web Developer</p>

            <Link  to={'/biodata'} className='w-[80px] h-[80px] bg-blue-400 text-gray-800 rounded-full fixed -bottom-4 -right-4 flex justify-center items-center'>
                <FiPlay className='text-[42px]'/>
            </Link>
            
        </div>
    )
}