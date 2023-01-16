import Link from "next/link"
import { useRouter } from "next/router";
import { useEffect, useState } from "react"

export default function Navbar({ desain }: { desain: string }) {
   const routes = useRouter().asPath
   const [navbarOpen, setNavbarOpen] = useState(false)
   const handleToggle = () => {setNavbarOpen(!navbarOpen)}
   useEffect(() => setNavbarOpen(false), [routes])

   return (
      <div className={`navbar px-6 ${desain}`}>
         <div className="navbar-start ">
            <div className="dropdown">
               <label className="btn btn-sm btn-ghost btn-square" onClick={handleToggle}>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
               </label>
               <ul className={`${navbarOpen ? '-translate-x-2 duration-300 ease-out' : '-translate-x-28 duration-300 ease-in'} menu menu-compact absolute z-50 left-2 mt-1 py-2 px-1 shadow rounded-box w-max`}>
                  <li><Link href="/">Home</Link></li>
                  <li><Link href="/about">About</Link></li>
               </ul>
            </div>
         </div>
         <div className="navbar-center">
            <Link href='/' className="btn btn-sm btn-ghost normal-case text-xl">
               OctoMedia
            </Link>
         </div>
         <div className="navbar-end">
            <button className="btn btn-sm btn-ghost">
               <Link href="/about">
                  <svg xlinkTitle="About" fill="currentColor" width="20px" height="20px" viewBox="0 0 24 24"><path d="M12,1A11,11,0,1,0,23,12,11.013,11.013,0,0,0,12,1Zm0,20a9,9,0,1,1,9-9A9.011,9.011,0,0,1,12,21ZM13,8H11V6h2Zm0,10H11V10h2Z" /></svg>
               </Link>
            </button>
            {/* <button className="btn btn-ghost btn-circle">
               <div className="indicator">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
                  <span className="badge badge-xs badge-primary indicator-item"></span>
               </div>
            </button> */}
         </div>
      </div>
   )
}