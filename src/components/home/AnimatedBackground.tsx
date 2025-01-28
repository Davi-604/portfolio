'use client';

import { skills } from '@/data/skills';
import React from 'react';

export const AnimatedBackground = ({ children }: { children: React.ReactNode }) => {
    const rows = 5;
    const icons = [...skills, ...skills];

    return (
        <div className="relative w-full h-full lg:h-[calc(100vh-90px)] bg-blue-400 dark:bg-slate-950 overflow-hidden">
            <div className="absolute inset-0">
                {Array.from({ length: rows }).map((_, rowIndex) => (
                    <div key={rowIndex}>
                        <div
                            className={`absolute flex gap-32 items-center py-10 ${
                                rowIndex % 2 === 0 ? 'mr-[3900px]' : 'ml-[3900px]'
                            }`}
                            style={{
                                top: `${(rowIndex / rows) * 100}%`,
                                animation: `scroll-${
                                    rowIndex % 2 === 0 ? 'normal' : 'reverse'
                                } 20s linear infinite`,
                            }}
                        >
                            {icons
                                .filter(
                                    (skill) =>
                                        skill.role === 'backend' ||
                                        skill.role === 'frontend'
                                )
                                .map((skill, index) => (
                                    <div
                                        key={`row-${rowIndex}-icon-${index}`}
                                        className="text-6xl opacity-40"
                                    >
                                        {skill.Icon && <skill.Icon />}
                                    </div>
                                ))}
                        </div>

                        <div
                            className={`absolute flex gap-32 items-center py-10 ${
                                rowIndex % 2 === 0
                                    ? 'left-[1000%] '
                                    : 'left-[-1000%] md:left-[-200%] lg:left-[-100%]'
                            }`}
                            style={{
                                top: `${(rowIndex / rows) * 100}%`,
                                animation: `scroll-${
                                    rowIndex % 2 === 0 ? 'normal' : 'reverse'
                                } 20s linear infinite`,
                            }}
                        >
                            {icons
                                .filter(
                                    (skill) =>
                                        skill.role === 'backend' ||
                                        skill.role === 'frontend'
                                )
                                .map((skill, index) => (
                                    <div
                                        key={`dup-row-${rowIndex}-icon-${index}`}
                                        className="text-6xl opacity-40"
                                    >
                                        {skill.Icon && <skill.Icon />}
                                    </div>
                                ))}
                        </div>
                    </div>
                ))}
            </div>
            <div className="relative z-10">{children}</div>
        </div>
    );
};
