import { useState } from "react"
import { useParams } from "react-router"

export default function Menu({ setSelectedTab }) {

    const [state, setState] = useState("overview")
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
    }[planetName]

    return (
        <div className="font-spartan hidden md:flex flex-col gap-4 text-[0.8rem] w-1/2 lg:w-full tracking-[3px] whitespace-nowrap">
            <button
                onClick={() => {
                    setSelectedTab('planet');
                    setState('overview');
                }}
                className={state === `overview` ? `text-white text-start ${colorClass} border-2 border-transparent px-5 py-3 cursor-pointer transition-colors duration-300 font-bold` :
                    `text-white border-2 border-[var(--borderColor)] px-5 py-3 text-start cursor-pointer hover:bg-[var(--greyColor)] transition-colors duration-300 font-bold`}
            >
                <span className="mr-4 opacity-60">01</span>
                OVERVIEW
            </button>
            <button
                onClick={() => {
                    setSelectedTab('internal');
                    setState('structure');
                }} className={state === `structure` ? `text-white text-start ${colorClass} border-2 border-transparent px-5 py-3 cursor-pointer transition-colors duration-300 font-bold` :
                    `text-white border-2 border-[var(--borderColor)] px-5 py-3 text-start cursor-pointer hover:bg-[var(--greyColor)] transition-colors duration-300 font-bold`}
            >
                <span className="mr-4 opacity-60">02</span>
                INTERNAL STRUCTURE
            </button>
            <button
                onClick={() => {
                    setSelectedTab('geology');
                    setState('surface');
                }} className={state === `surface` ? `text-white text-start ${colorClass} border-2 border-transparent px-5 py-3 cursor-pointer transition-colors duration-300 font-bold` :
                    `text-white border-2 border-[var(--borderColor)] px-5 py-3 text-start cursor-pointer hover:bg-[var(--greyColor)] transition-colors duration-300 font-bold`}
            >
                <span className="mr-4 opacity-60">03</span>
                SURFACE GEOLOGY
            </button>
        </div>
    )
}