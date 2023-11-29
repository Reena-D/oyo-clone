'use client'

import Image from 'next/image'
import Block from './Block'
import Link from 'next/link'
import Cookies from 'js-cookie';
import {useRouter} from 'next/router'
import {useEffect, useState} from "react"

const Header1 = () => {
  const [auth, setAuth] = useState(false);
  
  useEffect(()=>{
    const key = Cookies.get("user");
    if(key){
    setAuth(true);
    return;
  }
  setAuth(false);
  },[auth]);

 const router = useRouter();

  const handleLogout = () => {
    Cookies.remove("user");
    setAuth(false);
    router.push('/login');
  }  
  
  return (
    <div className= 'flex justify-between border-b-2 border-gray-300 items-center h-24 px-10'>
        <Image src={'/logo.png'} alt='logo' width={100} height={100} classname ='w-24 h-24'/>
    <div className=' h-full flex'>
        <Block title={'Become a Member'} para={'Additional 10% off on stays'} img={'/a_0.webp'}/>
        <Block title={'OYO for Business'} para={'Trusted by 5000 Corporates'} img={'/bc.jpg'}/>
        <Block title={'List your Property'} para={'Start earning in 30 mins'} img={'/building.jpg'}/>
        <Block title={'0124-6201611'} para={'Call us to Book now'} img={'/images (1).png'} />
<div className=' flex items-center'>
<Image src={'/3607444.png'} alt='demo' width={30} height={30} classname="w-10 h-10 rounded-full mr-5" />   
{
  auth ? (
    
  <h3 className="font-bold cursor-pointer" onClick={handleLogout}>Logout</h3>

  ) : (
<Link href={'/login'}>
  <h3 className="font-bold">Login / Signup</h3>
</Link>

)}
</div>
    </div>
    </div>
  )
}

export default Header1
