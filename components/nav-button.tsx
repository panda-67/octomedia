import Link from "next/link";

type Props = {
   children: any,
   href: string,
   className?: string
}

export default function NavButton({ children, href, className }: Props) {
   return (
      <Link href={href}>
         <div className={`${className} p-2 hover:bg-gradient-to-tr from-amber-400 to-transparent shadow-md hover:shadow-lg hover:shadow-amber-400 rounded-xl inline-flex justify-center`}>
            {children}
         </div>
      </Link>
   )
}