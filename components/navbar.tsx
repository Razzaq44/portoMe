"use client"
import React, { useEffect, useState } from 'react'
import { ModeToggle } from './ui/theme-swicther'
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    const handleClickOutside = (event: MouseEvent) => {
        const target = event.target as HTMLElement;
        if (!target.closest('#navbar-sticky') && isOpen) {
            setIsOpen(false);
        }
    };

    const handleItemClick = () => {
        setIsOpen(false);
    };

    useEffect(() => {
        document.addEventListener('click', handleClickOutside);
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isOpen]);

    return (
        <>
            <nav className="sticky top-0 w-full z-50 backdrop-blur-sm items-center py-2 lg:mb-20 px-12 sm:px-24 lg:px-48">
                <div className="flex flex-wrap items-center justify-between m-auto">
                    <Link href={``} className='flex gap-2'>
                        <Image src={'/logo-light.png'} alt={''} width={50} height={50} />
                    </Link>
                    <div className="flex item-center md:order-last">
                        <div className="my-auto"><ModeToggle></ModeToggle></div>
                        <button data-collapse-toggle="navbar-sticky" type="button" onClick={toggleNavbar} className="flex items-center justify-center text-sm rounded-lg md:hidden my-auto" aria-controls="navbar-sticky" aria-expanded={isOpen}>
                            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                            </svg>
                        </button>
                    </div>
                    <div className={`items-center justify-between ${isOpen ? 'block' : 'hidden'} w-full md:flex md:w-auto md:order-1`} id="navbar-sticky">
                        <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
                            <Link href={`#home`} className='p-2 hover:bg-primary rounded-md px-4 hover:text-background' onClick={handleItemClick}>Home</Link>
                            <Link href={`#myProject`} className='p-2 hover:bg-primary rounded-md px-4 hover:text-background' onClick={handleItemClick}>My Project</Link>
                            <Link href={`#aboutMe`} className='p-2 hover:bg-primary rounded-md px-4 hover:text-background' onClick={handleItemClick}>About Me</Link>
                            <Link href={`#contact`} className='p-2 hover:bg-primary rounded-md px-4 hover:text-background' onClick={handleItemClick}>Contact</Link>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar