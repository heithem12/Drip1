import Driplogo from "../../public/assets/Driplogo.png"
import Image from "next/image"
export default function Navbar(){
    return(
        <div className="flex justify-center -z-3">
        <div className=" rounded-xl place-content-center fixed bg-amber-50 inset-shadow-sm ">
            <ul className="ml-20">
                <Image className="display: inline  mr-100" src={Driplogo} alt="logo" width="64" height="64"  />
                <li className="display: inline p-10 cursor-pointer">Home</li>
                <li className="display: inline p-10 cursor-pointer">Shop</li>
                <li className="display: inline p-10 cursor-pointer">Blog</li>
                <li className="display: inline p-10 cursor-pointer">Pages</li>
                <li className="display: inline p-10 cursor-pointer">Contact</li>
            </ul>
        </div>
        </div>
    )
}