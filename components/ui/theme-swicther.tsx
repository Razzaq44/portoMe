"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import Button from '@mui/material/Button';

export function ModeToggle() {
    const { setTheme } = useTheme()

    const handleClick = () => {
        setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
    };

    return (
        <Button variant="text" onClick={handleClick} className="hover:bg-transparent" disableRipple>
            <Sun className="h-fit w-fit rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-fit w-fit rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
        </Button>
    )
}