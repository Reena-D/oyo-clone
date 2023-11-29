'use client'
import Link from 'next/link'
import {useState} from "react";


const Header3 = () => {
  const [city, setCity] = useState('');
  return (
    <div className =' bg-red-600 h-60'>
      <div className='mx-10 p-5'>
        <h2 className=' text-3xl text-white text-center font-bold'>
            Over 157,000 hotels and homes across 35 countries
      </h2>
      <div className='flex justify-center rounded-2xl my-5 mx-20'>
      <input type='text' placeholder='Search...' className='w-6/12 h-16 outline-none px-3 text-lg border-r-2 rounded-lg border-gray-400' onChange={(e)=>{setCity(e.target.value)}}/>
      {/* <input type='date' placeholder='Search..' className=' h-16 outline-none px-3 text-lg border-r-2 border-gray-400 col-span-1' />
      <input type='date' placeholder='Search..' className=' h-16 outline-none px-3 text-lgborder-r-2 border-gray-400 col-span-1'/> */}
      <button type ='submit' className='w-72 h-16 px-3 py-2 bg-green-500 hover:cursor-pointer hover:bg-green-600 rounded-lg font-bold text-white mr-5'>
        <Link className='text-xl' href={`/hotels?city=${city}`}>Search</Link>
      </button>
      </div>
      <div className="flex mx-20 my-5 font-bold">
      <button type ='submit' className=' h-16 px-3 py-2 col-span-1 hover:cursor-pointer text-white text-xl mr-5'>Continue your search</button>
      <button type ='submit' className=' h-16 px-3 py-2 col-span-1 hover:cursor-pointer border-2 border-white text-white mr-5 hover:bg-gray-500 rounded-2xl'>Home stays in India hotels</button>

      </div>
      </div>
    </div>
  )
}

export default Header3
