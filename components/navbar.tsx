import React from 'react'
import { ModeToggle } from './ui/theme-swicther'
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
    return (
        <>
            <div className="px-32 py-4 flex justify-between">
                <div className="">
                    <Image src={'/logo-light.png'} alt={''} width={50} height={50} />
                </div>
                <div className="list-none flex my-auto gap-8">
                    <Link href={``}>About</Link>
                    <Link href={``}>About</Link>
                    <Link href={``}>About</Link>
                </div>
                <ModeToggle></ModeToggle>
            </div>
        </>
    )
}

export default Navbar