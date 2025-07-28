import { AnimatePresence, motion } from "motion/react";

export default function PlanetData({ planetName, planetData }) {
    return (
        <div className="flex flex-col md:flex-row lg:pt-32 pb-10 gap-2.5 lg:gap-5 w-full text-white whitespace-nowrap">
            <div className="flex flex-row md:flex-col md:w-full  items-center md:items-baseline justify-between md:justify-normal border-2 border-white/20 px-5 py-5">
                <p className="text-[12px] opacity-50">ROTATION TIME</p>
                <AnimatePresence mode="wait">
                    <motion.p
                        key={planetName}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="font-antonio text-2xl"
                    >
                        {planetData.rotation.toUpperCase()}
                    </motion.p>
                </AnimatePresence>
            </div>
            <div className="flex flex-row md:flex-col md:w-full items-center md:items-baseline justify-between md:justify border-2 border-white/20 px-5 py-5">
                <p className="text-[12px] opacity-50">REVOLUTION TIME</p>
                <AnimatePresence mode="wait">
                    <motion.p
                        key={planetName}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="font-antonio text-2xl"
                    >
                        {planetData.revolution.toUpperCase()}
                    </motion.p>
                </AnimatePresence>
            </div>
            <div className="flex flex-row md:flex-col md:w-full items-center md:items-baseline justify-between md:justify-normal border-2 border-white/20 px-5 py-5">
                <p className="text-[12px] opacity-50">RADIUS</p>
                <AnimatePresence mode="wait">
                    <motion.p
                        key={planetName}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="font-antonio text-2xl"
                    >
                        {planetData.radius.toUpperCase()}
                    </motion.p>
                </AnimatePresence>
            </div>
            <div className="flex flex-row md:flex-col md:w-full items-center md:items-baseline justify-between md:justify-normal border-2 border-white/20 px-5 py-5">
                <p className="text-[12px] opacity-50">AVERAGE TEMP.</p>
                <AnimatePresence mode="wait">
                    <motion.p
                        key={planetName}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="font-antonio text-2xl"
                    >
                        {planetData.temperature.toUpperCase()}
                    </motion.p>
                </AnimatePresence>
            </div>
        </div>
    )
}