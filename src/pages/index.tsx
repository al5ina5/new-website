import { useState } from "react";
import { motion } from 'framer-motion'
import Inquiry from "../components/Inquiry";
import BackgroundTopology from '../components/BackgroundTopology'
import randomColor from 'randomcolor'

export default function IndexPage() {
    const [inquiry, setInquiry] = useState(false)
    return (
        <>
            <Inquiry visible={inquiry} onClose={() => setInquiry(false)} />
            <div>

                <div className="h-full grid grid-cols-1 lg:grid-cols-3 divide-x divide-y divide-zinc-800 divide-opacity-50">
                    <motion.div className="col-span-2  h-screen relative w-full flex items-center justify-center lg:rounded-r-3xl">
                        <BackgroundTopology color={randomColor({
                            luminosity: 'dark',
                            hue: 'green'
                        })} />

                        <div className="relative w-full max-w-3xl p-6 space-y-6">
                            {/* <div className="w-24 lg:w-40 rounded-2xl shadow-lg bg-black overflow-hidden">
                                <motion.img animate={{ rotate: ['0', '360deg'] }} transition={{ duration: 30, loop: Infinity }} src=" /img/gantom-1480.png" alt="" />
                            </div> */}
                            <p className="text-5xl text-shadow lg:text-7xl font-bold text-transparent bg-gradient-to-b bg-clip-text from-zinc-400 to-white">
                                Sebastian Alsina is building NFT tooling and DeFi interfaces using JavaScript technologies and smart contracts.
                            </p>
                        </div>
                    </motion.div>

                    <div className="relative bg-zinc-900 h-full w-full flex items-center justify-center">
                        <div className="p-12 max-w-md space-y-6">
                            <img className="w-24 lg:w-40 rounded-2xl shadow-lg" src="/img/fantom-digital.png" alt="" />
                            <div className="space-y-4">
                                <p className="text-2xl">
                                    Fantom Digital is an digital art collective, production agency, and collection house based in Florida.
                                </p>
                                <p className="text-lg opacity-50">
                                    Fantom Digital helps creators across the world lauch NFT collections. <a className="underline hover:no-underline" href="https://fantom.digital/about">About &rarr;</a>
                                </p>

                                <p className="text-2xl">
                                    <a className="underline hover:no-underline" href="https://fantom.digital">fantom.digital &rarr;</a>
                                </p>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="relative border-t border-zinc-800 bg-zinc-900 p-12 border-opacity-50">
                    <div className="flex items-center w-full gap-4">
                        <a className="text-base md:text-2xl opacity-50 hover:opacity-100" href="">My Collection</a>

                        <div className="flex-1" />
                        <a href="#" target="_blank" className="text-2xl"><i className="fa-brands fa-github" /></a>
                        <a href="#" target="_blank" className="text-2xl"><i className="fa-brands fa-discord" /></a>
                        <a href="#" target="_blank" className="text-2xl"><i className="fa-brands fa-twitter" /></a>
                    </div>
                </div>
            </div >
        </>
    )
}
