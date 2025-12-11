import Navbar from "./navbar";
import Image from 'next/image'
import mountains from "../../public/assets/images.jpeg"
export default function Home1(){
    return(
        <div className="">
            <Navbar/>
            <Image
      alt="Mountains"
      src={mountains}
      placeholder="blur"
      quality={100}
      fill
      sizes="100vw"
      style={{
        objectFit: 'cover',
      }}
      className="-z-10"
    />
        </div>
    )
}