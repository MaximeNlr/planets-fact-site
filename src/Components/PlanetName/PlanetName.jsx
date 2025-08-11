import { AnimatePresence, motion } from "motion/react";

export default function PlanetName({ planetName, planetData }) {
    return (
        <div className="pt-20 md:pt-16 ">
            <AnimatePresence mode="wait">
                <motion.h1
                    key={planetName}
                    initial={{ opacity: 0, y: 20, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -20, scale: 0.95 }}
                    transition={{
                        duration: 0.4,
                        ease: "easeInOut"
                    }}
                    className="font-antonio text-5xl text-center md:text-start lg:text-8xl"
                >
                    {planetData.name}
                </motion.h1>
            </AnimatePresence>
        </div >
    )
}