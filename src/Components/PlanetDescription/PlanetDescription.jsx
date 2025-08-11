export default function PlanetDescription({ planetData, selectedTab }) {
    return (
        <div>
            <div className="pt-5 md:pt-0 text-center md:text-start">
                {selectedTab === 'planet' &&
                    <p
                        className="lg:h-[130px]"
                    >
                        {planetData.overview.content}
                    </p>}
                {selectedTab === 'internal' &&
                    <p
                        className="lg:h-[130px]"

                    >
                        {planetData.structure.content}
                    </p>}
                {selectedTab === 'geology' &&
                    <p
                        className="lg:h-[130px]"
                    >
                        {planetData.geology.content}
                    </p>}
            </div>
            <div className="mt-4 flex justify-center md:justify-start gap-1 opacity-60">
                {selectedTab === 'planet' &&
                    <div className="flex pb-5">
                        <span>Source :</span>
                        <a
                            className="flex items-center gap-1 border-b-2 border-white/50 font-bold px-1"
                            href={planetData.overview.source}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Wikipedia <img src="../assets/icon-source.svg" alt="Wikipedia source" />
                        </a>
                    </div>
                }
                {selectedTab === 'internal' &&
                    <div className="flex pb-5">
                        <span>Source : </span>
                        <a
                            className="flex items-center gap-1 border-b-2 border-white/50 font-bold px-1"
                            href={planetData.structure.source}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Wikipedia <img src="../assets/icon-source.svg" alt="Wikipedia source" />
                        </a>
                    </div>
                }
                {selectedTab === 'geology' &&
                    <div className="flex pb-5">
                        <span>Source :</span>
                        <a
                            className="flex items-center gap-1 border-b-2 border-white/50 font-bold px-1"
                            href={planetData.geology.source}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Wikipedia <img src="../assets/icon-source.svg" alt="Wikipedia source" />
                        </a>
                    </div>
                }
            </div>
        </div>
    )
}