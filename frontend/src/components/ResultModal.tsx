'use client'

import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface ResultModalProps {
    result: 'win' | 'lose' | 'surrender' | 'war' | 'tie' | string
    isVisible: boolean
}

export default function ResultModal({ result, isVisible }: ResultModalProps) {
    const getContent = () => {
        switch (result.toLowerCase()) {
            case 'win':
                return {
                    title: 'VICTORY',
                    emoji: '🎉',
                    color: 'from-yellow-400 via-yellow-200 to-yellow-500',
                    borderColor: 'border-yellow-400',
                    textColor: 'text-yellow-100',
                    glow: 'shadow-[0_0_50px_rgba(234,179,8,0.6)]'
                }
            case 'lose':
                return {
                    title: 'DEFEAT',
                    emoji: '😞',
                    color: 'from-red-600 via-red-500 to-red-700',
                    borderColor: 'border-red-500',
                    textColor: 'text-red-100',
                    glow: 'shadow-[0_0_50px_rgba(220,38,38,0.6)]'
                }
            case 'war':
                return {
                    title: 'WAR',
                    emoji: '⚔️',
                    color: 'from-orange-600 via-orange-500 to-red-600',
                    borderColor: 'border-orange-500',
                    textColor: 'text-orange-100',
                    glow: 'shadow-[0_0_50px_rgba(234,88,12,0.6)]'
                }
            case 'surrender':
                return {
                    title: 'SURRENDER',
                    emoji: '🏳️',
                    color: 'from-gray-600 via-gray-500 to-gray-700',
                    borderColor: 'border-gray-400',
                    textColor: 'text-gray-100',
                    glow: 'shadow-[0_0_50px_rgba(156,163,175,0.4)]'
                }
            case 'tie':
                return {
                    title: 'TIE',
                    emoji: '🤝',
                    color: 'from-blue-600 via-blue-500 to-blue-700',
                    borderColor: 'border-blue-400',
                    textColor: 'text-blue-100',
                    glow: 'shadow-[0_0_50px_rgba(59,130,246,0.6)]'
                }
            default:
                return {
                    title: result.toUpperCase(),
                    emoji: '✨',
                    color: 'from-purple-600 via-purple-500 to-purple-700',
                    borderColor: 'border-purple-400',
                    textColor: 'text-purple-100',
                    glow: 'shadow-[0_0_50px_rgba(147,51,234,0.6)]'
                }
        }
    }

    const content = getContent()

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ opacity: 0, scale: 0.5, y: 50 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.5, y: 50 }}
                    transition={{ type: 'spring', damping: 15, stiffness: 100 }}
                    className='fixed inset-0 z-50 flex items-end justify-center pointer-events-none pb-32'
                >
                    <div className={`
             relative
             bg-gradient-to-br ${content.color}
             border-4 ${content.borderColor}
             px-12 py-8
             rounded-2xl
             flex flex-col items-center justify-center
             ${content.glow}
             backdrop-blur-md
             bg-opacity-80
          `}>
                        {/* Shine effect overlay */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-white/20 to-transparent rounded-xl pointer-events-none" />

                        <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1, rotate: [0, -10, 10, 0] }}
                            transition={{ delay: 0.2, duration: 0.5 }}
                            className="text-6xl mb-4 drop-shadow-lg"
                        >
                            {content.emoji}
                        </motion.div>

                        <h2 className={`
              text-5xl font-black tracking-widest
              ${content.textColor}
              font-[questrial]
              drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]
              uppercase
            `}>
                            {content.title}
                        </h2>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}
