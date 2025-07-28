import { useState } from "react"
import { useParams } from "react-router"

export default function MobileMenu({ setSelectedTab }) {

    const [state, setState] = useState("overview")
    const { planetName } = useParams();

    const colorClass = {
        mercury: 'border-[var(--mercuryColor)]',
        earth: 'border-[var(--earthColor)]',
        jupiter: 'border-[var(--jupiterColor)]',
        mars: 'border-[var(--marsColor)]',
        neptune: 'border-[var(--neptuneColor)]',
        saturn: 'border-[var(--saturnColor)]',
        uranus: 'border-[var(--uranusColor)]',
        venus: 'border-[var(--venusColor)]',
    }[planetName] || 'border-transparent'

    return (
        <div className="z-30 bg-[var(--dark)] fixed w-full flex flex-row md:hidden md:border-none justify-between px-12 mt-16 border-b-[1px] border-white/10 h-[51px] font-extrabold text-[0.7rem] tracking-wider">
            <button
                onClick={() => {
                    setSelectedTab('planet');
                    setState('overview');
                }}
                className={state === `overview` ? `text-white border-b-4 ${colorClass} transition-colors duration-300` : `text-white opacity-20 border-b-4 border-transparent transition-colors duration-300`}
            >
                OVERVIEW
            </button>
            <button
                onClick={() => {
                    setSelectedTab('internal');
                    setState('structure');
                }} className={state === `structure` ? `text-white border-b-4 ${colorClass} transition-colors duration-300` : `text-white opacity-20 border-b-4 border-transparent transition-colors duration-300`}
            >
                STRUCTURE
            </button>
            <button
                onClick={() => {
                    setSelectedTab('geology');
                    setState('surface');
                }} className={state === `surface` ? `text-white border-b-4 ${colorClass} transition-colors duration-300` : `text-white opacity-20 border-b-4 border-transparent transition-colors duration-300`}
            >
                SURFACE
            </button>
        </div>
    )
}