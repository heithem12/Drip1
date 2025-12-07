import Driplogo from "../../public/assets/Driplogo.png"
import Image from "next/image"
export default function Navbar(){
    return(
        <div className="bg-gray 300">
            <ul className="ml-20">
                <Image className="display: inline mr-100" src={Driplogo} alt="logo" width="64" height="64"  />
                <li className="display: inline p-10">Home</li>
                <li className="display: inline p-10">Shop</li>
                <li className="display: inline p-10">Blog</li>
                <li className="display: inline p-10">Pages</li>
                <li className="display: inline p-10">Contact</li>
            </ul>
        </div>
    )
}