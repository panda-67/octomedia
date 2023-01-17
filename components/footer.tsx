import Logo from "./logo";

export default function Footer() {
   return (
      <div className="h-44 flex flex-col items-center justify-center gap-y-4">
         <Logo size={120}/>
         <span>Copyright &copy; {new Date().getFullYear()} Rampagoe</span>
      </div>
   )
}