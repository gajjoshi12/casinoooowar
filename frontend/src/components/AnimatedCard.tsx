'use client'

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

interface AnimatedCardProps {
    card: string
    size?: 'small' | 'medium' | 'large'
    index?: number // To add staggered delay if needed
    delay?: number // Explicit delay in seconds
}

export default function AnimatedCard({
    card,
    size = 'medium',
    index = 0,
    delay
}: AnimatedCardProps) {
    if (!card) return null

    const rank = card[0]
    const suit = card[1]

    const sizeClasses = {
        small: 'w-16 h-24 text-base',
        medium: 'w-24 h-32 text-lg',
        large: 'w-32 h-44 text-xl'
    }

    return (
        <motion.div
            initial={{ x: 500, opacity: 0, scale: 0.8, rotate: 10 }}
            animate={{ x: 0, opacity: 1, scale: 1, rotate: 0 }}
            transition={{
                type: 'spring',
                damping: 20,
                stiffness: 100,
                delay: delay !== undefined ? delay : index * 0.1
            }}
            className={`${sizeClasses[size]} relative rounded-lg shadow-2xl overflow-hidden bg-white`}
        >
            <Image
                src={`/cards/${rank}${suit}.png`}
                alt={`${rank} of ${suit}`}
                fill
                className='object-cover rounded-lg'
                sizes='(max-width: 640px) 64px, (max-width: 768px) 80px, 96px'
                priority
            />
        </motion.div>
    )
}
