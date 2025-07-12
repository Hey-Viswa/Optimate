'use client'
import React, { useRef } from 'react'
import { useScroll, useTransform, motion } from 'framer-motion'
import Image from 'next/image'

export const ContainerScroll = ({
    titleComponent,
}: {
    titleComponent: string | React.ReactNode
}) => {
    const containerRef = useRef<any>(null)
    const { scrollYProgress } = useScroll({
        target: containerRef,
    })
    const [isMobile, setIsMobile] = React.useState(false)

    React.useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth <= 768)
        }
        checkMobile()
        window.addEventListener('resize', checkMobile)
        return () => {
            window.removeEventListener('resize', checkMobile)
        }
    }, [])

    const scaleDimensions = () => {
        return isMobile ? [0.7, 0.9] : [1.05, 1]
    }

    const rotate = useTransform(scrollYProgress, [0, 1], [20, 0])
    const scale = useTransform(scrollYProgress, [0, 1], scaleDimensions())
    const translate = useTransform(scrollYProgress, [0, 1], [0, -100])

    return (
        <div
            className="h-[60rem] sm:h-[70rem] lg:h-[80rem] flex items-center justify-center relative p-4 sm:p-8 lg:p-20"
            ref={containerRef}
        >
            <div
                className="py-20 sm:py-32 lg:py-40 w-full relative"
                style={{
                    perspective: '1000px',
                }}
            >
                <Header
                    translate={translate}
                    titleComponent={titleComponent}
                />
                <Card
                    rotate={rotate}
                    translate={translate}
                    scale={scale}
                />
            </div>
        </div>
    )
}

export const Header = ({ translate, titleComponent }: any) => {
    return (
        <motion.div
            style={{
                translateY: translate,
            }}
            className="max-w-6xl mx-auto text-center px-10 sm:px-20 lg:px-12"
        >
            {titleComponent}
        </motion.div>
    )
}

export const Card = ({
    rotate,
    scale,
    translate,
}: {
    rotate: any
    scale: any
    translate: any
}) => {
    return (
        <motion.div
            style={{
                rotateX: rotate, // rotate in X-axis
                scale,
                boxShadow:
                    '0 0 #0000004d, 0 9px 20px #0000004a, 0 37px 37px #00000042, 0 84px 50px #00000026, 0 149px 60px #0000000a, 0 233px 65px #00000003',
            }}
            className="max-w-5xl -mt-8 sm:-mt-12 mx-auto h-[20rem] sm:h-[25rem] md:h-[30rem] lg:h-[35rem] xl:h-[40rem] w-full p-3 sm:p-4 lg:p-6 bg-[#222222] rounded-[20px] sm:rounded-[25px] lg:rounded-[30px] shadow-2xl"
        >
            <div className="bg-[#222222] h-full w-full rounded-xl sm:rounded-1xl gap-4 overflow-hidden p-1 sm:p-2 transition-all relative">
                <Image
                    src="/temp-banner.png"
                    fill
                    alt="bannerImage"
                    className="object-cover border border-neutral-700 sm:border-2 rounded-xl sm:rounded-2xl"
                />
            </div>
        </motion.div>
    )
}