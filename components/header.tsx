import Image from "next/image";
import Logo from "@/public/header/logo.svg"
import Link from "next/link";

export default function Header(){
    return(
        <header style={{
            display:"flex",
            alignItems:"center",
            justifyContent:"space-between",
            marginLeft: 50,
            marginRight: 50,
        }} >
           <Image
               src={Logo}
               alt="Logo"
               width={80}
               height={80}
           />

           <div >
               <Link href={""}>
                   Accueil
               </Link>

               <Link href={""} style={{
                   marginRight: 20,
                   marginLeft: 60,
               }}>
                   A propos
               </Link>
           </div>
        </header>
    )
}