import Image from "next/image"
import NavButton from "./nav-button"

export default function Card({ children, src }: { children: any, src: any }) {
   return (
      <div className="relative rounded-lg w-44 h-20 md:w-32 lg:w-60 lg:h-28 hover:shadow-2xl hover:shadow-amber-700 image-full">
         <figure><Image alt="Card" src={src} width={800} height={0} className="rounded-lg w-full h-full absolute"/></figure>
         <div className="absolute bottom-4 right-4">
            <div className="">
               <NavButton href="#" className="bg-emerald-600 opacity-90 text-amber-200 font-semibold">{children}</NavButton>
            </div>
         </div>
      </div>
   )
}