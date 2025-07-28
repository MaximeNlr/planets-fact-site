import { header } from "motion/react-client"
import { Link } from "react-router"
import { useState } from "react"
import { useParams } from "react-router"
import data from "../../data/data.json"


export default function Header() {

    const { planetName } = useParams();

    const colorClass = {
        mercury: 'bg-[var(--mercuryColor)]',
        earth: 'bg-[var(--earthColor)]',
        jupiter: 'bg-[var(--jupiterColor)]',
        mars: 'bg-[var(--marsColor)]',
        neptune: 'bg-[var(--neptuneColor)]',
        saturn: 'bg-[var(--saturnColor)]',
        uranus: 'bg-[var(--uranusColor)]',
        venus: 'bg-[var(--venusColor)]',
    }[planetName] || 'bg-transparent'

    return (
        <header
            className="hidden md:flex md:h-40 lg:h-[85px] flex-col lg:flex-row lg:items-center lg:justify-between bg-[var(--dark)] text-white md:pt-6 lg:pl-10 lg:pt-0 border-b-[1px] border-[var(--greyColor)]"
        >
            <p className="font-antonio text-3xl text-center font-[var(--customFont)]">THE PLANETS</p>
            <nav className="font-spartan flex flex-row justify-between lg:gap-10 text-[14px] px-10 py-10">
                {data.map((planet) => (
                    <div
                        key={planet.name}
                        className="relative"
                    >
                        <div
                            className={planetName === planet.name.toLowerCase() ? `absolute md:top-14 lg:top-auto lg:bottom-12 h-1 w-full ${colorClass} transition-colors duration-300` :
                                `transition-colors duration-300`}
                        >
                        </div>
                        <Link
                            to={`/${planet.name.toLowerCase()}`}
                        >
                            {planet.name.toUpperCase()}
                        </Link>
                    </div>
                ))}
            </nav>
        </header >
    )
}