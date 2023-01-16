import Image from "next/image"
import image from '/public/img/welcome.jpg'

export default function Card({ children }: { children: any }) {
   return (
      <div className="card w-44 h-12 md:w-32 lg:w-60 lg:h-24 bg-gradient-to-bl from-emerald-900 to-emerald-100 shadow-xl hover:shadow-emerald-800 image-full">
         <figure><Image alt="Card" src={image} /></figure>
         <div className="card-body">
            <div className="card-actions justify-end">
               <button className="btn btn-primary">{children}</button>
            </div>
         </div>
      </div>
   )
}