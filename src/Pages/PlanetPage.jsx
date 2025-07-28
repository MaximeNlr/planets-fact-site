import MobileHeader from "../Components/MobileHeader/MobileHeader"
import Header from "../Components/Header/Header"
import MobileMenu from "../Components/MobileMenu/MobileMenu"
import Menu from "../Components/Menu/Menu"
import PlanetImage from "../Components/PlanetImage/PlanetImage"
import PlanetName from "../Components/PlanetName/PlanetName"
import PlanetDescription from "../Components/PlanetDescription/PlanetDescription"
import { useState } from "react"
import { useParams } from "react-router"
import data from "../data/data.json"
import PlanetData from "../Components/PlanetData/PlanetData"

export default function PlanetPage() {

    const [selectedTab, setSelectedTab] = useState('planet');

    const { planetName } = useParams()
    const planetData = data.find(planet => planet.name.toLowerCase() === planetName)

    if (!planetData) {
        return (
            <div className="h-screen bg-[var(--dark)] text-white flex items-center justify-center">
                <p>Planète inconnue</p>
            </div>
        )
    }

    return (
        <div className="min-h-screen flex flex-col">
            <MobileHeader />
            <Header />
            <div className="bg-[var(--dark)] flex-1 lg:pt-10 lg:pb-0 lg:py-10 overflow-x-hidden">
                <MobileMenu setSelectedTab={setSelectedTab} />
                <div className="mt-20 md:mt-0 flex flex-col bg-[url(./assets/background-stars.svg)] px-10 lg:px-20 py-10 lg:pt-10 lg:py-0 scroll-smooth z-10  max-w-[1400px] mx-auto">
                    <div className="flex flex-col md:items-center lg:justify-between lg:flex-row">
                        <PlanetImage
                            planetData={planetData}
                            selectedTab={selectedTab}
                        />
                        <div className="text-white md:flex lg:flex-col gap-20 lg:gap-0 items-center lg:w-1/3">
                            <div className="md:w-1/2 lg:w-full">
                                <PlanetName
                                    planetName={planetName}
                                    planetData={planetData}
                                />
                                <div className=" h-[250px] md:h-[300px] flex flex-col justify-between lg:justify-center lg:gap-5  text-[14px] lg:text-base pt-5 lg:pt-0 lg:pb-0">
                                    <PlanetDescription
                                        planetData={planetData}
                                        selectedTab={selectedTab}
                                    />
                                </div>
                            </div>
                            <Menu setSelectedTab={setSelectedTab} />
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <PlanetData
                            planetData={planetData}
                            planetName={planetName}
                        />
                    </div>
                </div>
            </div>
        </div >
    )
}