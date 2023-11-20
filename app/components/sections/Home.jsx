'use client'
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaVolumeMute, FaVolumeUp } from "react-icons/fa";

const Home = () => {
    const [muted, setMuted] = useState(true);

    const toggleMute = () => {
        setMuted(!muted);
    }
    return (
        <section className="h-auto md:h-[820px]">
            <video
                className="w-full h-auto md:h-[820px] object-cover"
                src="/HomeVid.mp4"
                autoPlay
                preload="auto"
                loop
                muted={muted}
                disablePictureInPicture
            />

            <div className="relative md:bottom-28 w-full">
                <div className="absolute md:bottom-24 bottom-6 px-4 w-full flex justify-end">
                    <button onClick={toggleMute}>
                        {!muted ? <FaVolumeUp className=" border-2 p-2 text-[46px] md:border-4 rounded-full bg-black md:p-2 md:text-[64px]" color="white" /> : <FaVolumeMute className=" border-2 p-2 text-[46px] md:border-4 rounded-full bg-black md:p-2 md:text-[64px]" color="white" />}
                    </button>
                </div>
                <div className="hidden md:flex flex-col md:flex-row justify-between items-center px-4 w-full">
                    <Link href={"https://apps.apple.com/us/app/6ixshooter-academy-training/id1665280308"} className="block w-fit p-2 lg:px-7 lg:py-4 bg-6sixshooter-blue text-white  text-xl lg:text-2xl font-bold rounded-sm shadow-sm shadow-gray-600 border-2 border-gray-400 hover:bg-blue-600 transition duration-300 ease-in-out hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-300 mb-4 md:mb-0 text-center">
                        DOWNLOAD THE 6IXSHOOTER APP TODAY
                    </Link>

                    <Image className="bg-gray-200 p-2 rounded-sm backdrop-blur-sm bg-opacity-10 transition duration-300 ease-in-out hover:scale-105 " width={300} height={50} alt="Featured on ESPN" src={"/ESPN_logo.png"} />
                </div>
            </div>
        </section>
    );
}

export default Home;