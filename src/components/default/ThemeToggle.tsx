'use client';

import * as React from 'react';
import { Laptop2Icon, Moon, MoonIcon, Sun, SunIcon } from 'lucide-react';
import { useTheme } from 'next-themes';

import { Button } from '@/components/ui/button';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

type Props = {
    positionTop?: string;
    positionBottom?: string;
    positionRight?: string;
    positionLeft?: string;
};

export function ThemeToggle({
    positionTop,
    positionBottom,
    positionLeft,
    positionRight,
}: Props) {
    const { setTheme } = useTheme();

    return (
        <div
            style={{
                position: 'fixed',
                top: `${positionTop ? `${positionTop}px` : ''}`,
                bottom: `${positionBottom ? `${positionBottom}px` : ''}`,
                left: `${positionLeft ? `${positionLeft}px` : ''}`,
                right: `${positionRight ? `${positionRight}px` : ''}`,
                zIndex: 50,
            }}
        >
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button
                        variant="outline"
                        size="icon"
                        className="rounded-full  text-black dark:text-white"
                    >
                        <Sun
                            style={{ width: '20px', height: '20px' }}
                            className="rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
                        />
                        <Moon
                            style={{ width: '20px', height: '20px' }}
                            className="absolute rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
                        />
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                    align="end"
                    className="border-none bg-gray-200 dark:bg-primary-foreground"
                >
                    <DropdownMenuItem onClick={() => setTheme('light')}>
                        <div className="flex items-center gap-2">
                            <SunIcon className="h-[1.2rem] w-[1.2rem]" />
                            Claro
                        </div>
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => setTheme('dark')}>
                        <div className="flex items-center gap-2">
                            <MoonIcon className="h-[1.2rem] w-[1.2rem]" />
                            Escuro
                        </div>
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => setTheme('system')}>
                        <div className="flex items-center gap-2">
                            <Laptop2Icon className="h-[1.2rem] w-[1.2rem]" />
                            Sistema
                        </div>
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    );
}
