import { FaBars } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";
import { AnimatePresence, motion } from "motion/react"
import { useState } from "react";
import { Link } from "react-router-dom";
import data from "../../data/data.json"

export default function MobileHeader() {

    const [isActive, setIsActive] = useState(false);

    const showMenu = () => {
        setIsActive(true);
        if (isActive) {
            setIsActive(false);
        }
    }
    return (
        <header className="fixed w-full shrink-0 md:hidden flex flex-col bg-[var(--dark)] z-50">
            <div className="flex justify-between bg-[var(--dark)] items-center w-full h-16 px-7 py-2 border-b-[1px] border-white/10 z-40">
                <h2 className="font-antonio text-white text-2xl">THE PLANETS</h2>
                <div className="relative">
                    <FaBars
                        onClick={showMenu}
                        className={isActive ? 'cursor-pointer text-[var(--greyColor)] text-2xl' : 'cursor-pointer text-white text-2xl'}
                    />
                </div>
            </div>
            <AnimatePresence>
                {isActive &&
                    <motion.div
                        key={isActive}
                        initial={{ opacity: 1, x: -600 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 1, x: -600 }}
                        transition={{ duration: 0.4 }}
                        className="absolute top-16 bg-[var(--dark)] h-screen w-full text-white z-30 px-4">
                        {data.map((planet) => (
                            <div
                                key={planet.name}
                                className="flex justify-between px-2 py-8 border-b-1 border-[var(--borderColor)]">
                                <div className="flex items-center gap-4 w-full ">
                                    <span
                                        style={{ backgroundColor: planet.color }}
                                        className={`h-5 w-5 rounded-full`}></span>
                                    <Link
                                        to={`/${planet.name.toLowerCase()}`}
                                        onClick={() => setIsActive(false)}
                                        className="w-full flex justify-between"
                                    >
                                        {planet.name.toUpperCase()}
                                        <span><FaAngleRight className="text-sm opacity-40" /></span>
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </motion.div>
                }
            </AnimatePresence>
        </header>
    )
}