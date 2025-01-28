'use client';

import { Code2Icon } from 'lucide-react';

export const Logo = () => {
    return (
        <div className="flex items-center gap-2 md:gap-4">
            <p
                style={{ fontFamily: 'var(--font-ubuntu)' }}
                className="italic text-2xl font-bold md:text-4xl text-gray-200"
            >
                DaviCarvalho
                <span className="text-blue-500 animate-pulse">.dev</span>
            </p>
            <span>
                <Code2Icon className="w-30px h-30px md:size-[50px]" />
            </span>
        </div>
    );
};
