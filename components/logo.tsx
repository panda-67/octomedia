import Image from 'next/image'
import picture from '/public/img/rampagoe.png'

export default function Logo({ size }: { size: number }) {
   return (
      <Image alt='Logo' src={picture} width={size} />
   )
}