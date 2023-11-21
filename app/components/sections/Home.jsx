'use client'
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaVolumeMute, FaVolumeUp } from "react-icons/fa";
import DownloadButton from "../DownloadButton";

const Home = () => {
    const [muted, setMuted] = useState(true);

    const toggleMute = () => {
        setMuted(!muted);
    }
    return (
        <section className="h-auto md:h-[820px] ">
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
                        {!muted ? <FaVolumeUp className=" transition duration-300 ease-in-out hover:scale-105 border-2 p-2 text-[46px] md:border-4 rounded-full bg-black md:p-2 md:text-[64px]" color="white" /> : <FaVolumeMute className=" transition duration-300 ease-in-out hover:scale-105 border-2 p-2 text-[46px] md:border-4 rounded-full bg-black md:p-2 md:text-[64px]" color="white" />}
                    </button>
                </div>
                <div className="hidden md:flex flex-col md:flex-row justify-between items-center px-4 w-full">
                    <DownloadButton
                        href={"https://apps.apple.com/us/app/6ixshooter-academy-training/id1665280308"}
                        content={"DOWNLOAD THE 6IXSHOOTER APP TODAY"}
                        textSize={"medium"}

                    />
                    <Image className="bg-gray-200 p-2 rounded-md backdrop-blur-sm bg-opacity-10 transition duration-300 ease-in-out hover:scale-105 " width={300} height={50} alt="Featured on ESPN" src={"/ESPN_logo.png"} />
                </div>
            </div>
        </section>
    );
}

export default Home;