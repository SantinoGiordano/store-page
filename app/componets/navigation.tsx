'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";



export default function Navagation(){
    const pathName = usePathname()
    return(
        <nav className="">
            <Link href='/' className={pathName === "/" ? "font-bold mr-4":"mr-4"}>Home</Link>
            <Link href='/about'className={pathName === "/about" ? "font-bold mr-4":"mr-4"}>About</Link>
            <Link href='/products/1' className={pathName === "/products/1" ? "font-bold mr-4":"mr-4"}>Products 1</Link>

        </nav>
    )
}
