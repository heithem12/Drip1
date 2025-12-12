"use client"
import Driplogo from "../../public/assets/Driplogo.png"
import Image from "next/image"
import { IoBag } from "react-icons/io5";
import { IoIosSearch } from "react-icons/io";
import { useState } from "react";
export default function Navbar(){
    const [searshfield,setsearshfield]=useState(false)
    console.log(searshfield)
    return(
        <div className="fixed flex justify-center place-self-center top-3 -z-3 ">
        <div className=" rounded-xl place-content-center bg-white inset-shadow-sm flex justify-center">
            <ul className="m-3 ml-10 grid grid-flow-col grid-rows-1 lg:gap-10 md:gap-6 sm:gap-3 place-items-center">
                <Image className="display: inline lg:mr-60 md:mr-40 sm:mr-20  " src={Driplogo} alt="logo" width="64" height="64"  />
                <li className="display: inline cursor-pointer hover:text-amber-500 ">Home</li>
                <li className="display: inline cursor-pointer hover:text-amber-500  ">Shop</li>
                <li className="display: inline cursor-pointer hover:text-amber-500  ">Blog</li>
                <li className="display: inline cursor-pointer hover:text-amber-500  ">Pages</li>
                <li className="display: inline cursor-pointer hover:text-amber-500  ">Contact</li>
                <button className="bg-green-700 rounded-md cursor-pointer  text-white p-1 hover:bg-green-950">Signup</button>
                <button className="bg-blue-700 rounded-md cursor-pointer text-white p-1 hover:bg-blue-950">Signin</button>
                <IoBag className="display: inline  cursor-pointer  hover:text-amber-500  "/>
                <IoIosSearch className="display: inline  cursor-pointer  hover:text-amber-500 mr-5 " onClick={()=>setsearshfield(!searshfield)}/>
                
            </ul>
            
        </div>
        </div>
    )
}