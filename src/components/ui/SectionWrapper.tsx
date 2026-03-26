'use client';

import { motion, useInView, Variants } from 'framer-motion';
import { ReactNode, useRef } from 'react';

type AnimationType = 'fadeUp' | 'fadeLeft' | 'fadeRight' | 'scale' | 'blur';

interface SectionWrapperProps {
    children: ReactNode;
    className?: string;
    animation?: AnimationType;
    delay?: number;
    duration?: number;
    once?: boolean;
}

const animations: Record<AnimationType, Variants> = {
    fadeUp: {
        hidden: { 
            opacity: 0, 
            y: 60,
            filter: 'blur(10px)'
        },
        visible: { 
            opacity: 1, 
            y: 0,
            filter: 'blur(0px)'
        },
    },
    fadeLeft: {
        hidden: { 
            opacity: 0, 
            x: -60,
            filter: 'blur(10px)'
        },
        visible: { 
            opacity: 1, 
            x: 0,
            filter: 'blur(0px)'
        },
    },
    fadeRight: {
        hidden: { 
            opacity: 0, 
            x: 60,
            filter: 'blur(10px)'
        },
        visible: { 
            opacity: 1, 
            x: 0,
            filter: 'blur(0px)'
        },
    },
    scale: {
        hidden: { 
            opacity: 0, 
            scale: 0.9,
            filter: 'blur(10px)'
        },
        visible: { 
            opacity: 1, 
            scale: 1,
            filter: 'blur(0px)'
        },
    },
    blur: {
        hidden: { 
            opacity: 0,
            filter: 'blur(20px)'
        },
        visible: { 
            opacity: 1,
            filter: 'blur(0px)'
        },
    },
};

export const SectionWrapper = ({
    children,
    className = '',
    animation = 'fadeUp',
    delay = 0,
    duration = 0.8,
    once = true,
}: SectionWrapperProps) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { 
        once, 
        margin: '-80px',
        amount: 0.1
    });

    return (
        <motion.div
            ref={ref}
            variants={animations[animation]}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            transition={{
                duration,
                delay,
                ease: [0.25, 0.46, 0.45, 0.94],
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
};
