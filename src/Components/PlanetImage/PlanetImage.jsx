import { AnimatePresence, motion } from "motion/react"

export default function PlanetImage({ planetData, selectedTab }) {

    const planetSize = {
        Mercury: 'w-[111px] md:w-[184px] lg:w-[290px]',
        Venus: 'w-[154px] md:w-[253px] lg:w-[400px]',
        Earth: 'w-[173px] md:w-[285px] lg:w-[450px]',
        Mars: 'w-[129px] md:w-[213px] lg:w-[336px]',
        Jupiter: 'w-[224px] md:w-[369px] lg:w-[520px]',
        Saturn: 'w-[256px] md:w-[369px] lg:w-[520px]',
        Uranus: 'w-[176px] md:w-[290px] lg:w-[450px]',
        Neptune: 'w-[173px] md:w-[285px] lg:w-[450px]'
    }

    return (
        <div className="flex justify-center items-center h-[256px] md:h-[369px] md:w-1/2 relative pt-20 md:pt-16 lg:pt-0">
            <AnimatePresence mode="wait">
                <motion.div
                    key={planetData.name}
                    initial={{ opacity: 0, scale: 1.5, rotate: -10 }}
                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                    exit={{ opacity: 0, scale: 0.8, rotate: 10 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="w-full h-full flex justify-center items-center absolute"
                >
                    {selectedTab !== 'geology' ? (
                        <motion.img
                            className={`${planetSize[planetData.name]}`}
                            src={planetData.images[selectedTab]}
                            alt={planetData.name}
                            initial={{ y: 0 }}
                            animate={{ y: [0, -10, 0] }}
                            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                        />
                    ) : (
                        <div className="relative flex justify-center items-center w-full h-full">
                            <motion.img
                                className={`${planetSize[planetData.name]}`}
                                src={planetData.images['planet']}
                                alt={planetData.name}
                                initial={{ y: 0 }}
                                animate={{ y: [0, -10, 0] }}
                                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                            />
                            <motion.img
                                initial={{ opacity: 0, y: -100, scale: 0.5 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                transition={{ duration: 0.4, ease: "easeOut" }}
                                className="w-[100px] lg:w-[150px] absolute bottom-10 lg:bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2"
                                src={planetData.images['geology']}
                                alt={`${planetData.name} geology`}
                            />
                        </div>
                    )}
                </motion.div>
            </AnimatePresence>
        </div>
    )
}