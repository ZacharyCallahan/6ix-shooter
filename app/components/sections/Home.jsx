import Image from "next/image";
import Link from "next/link";

const Home = () => {
    return (
        <section className="snap-child ">
            <video
                className=" w-full h-[820px] object-cover "
                src="https://digitalassets.tesla.com/tesla-contents/video/upload/Homepage-Model-Y-Desktop-NA.mp4"
                autoPlay
                loop
                muted={false}></video>
            <div className="absolute bottom-40 w-full">
                <div className=" container m-auto flex justify-between items-center">
                    {/* TODO: make it shoot basketballs on the screen when hovered */}
                    <Link href={"https://apps.apple.com/us/app/6ixshooter-academy-training/id1665280308"} className="px-7 py-4 bg-6sixshooter-blue text-white text-2xl font-bold rounded-lg shadow-lg hover:bg-blue-600 transition duration-300 ease-in-out hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-300">
                        DOWNLOAD THE 6IXSHOOTER APP TODAY
                    </Link>

                    <Image className=" bg-gray-200 p-2 rounded-md backdrop-blur-sm bg-opacity-10 transition duration-300 ease-in-out hover:scale-105 " width={300} height={50} alt="Featured on ESPN" src={"/ESPN_logo.png"} />
                </div>
            </div>
        </section>
    );
}

export default Home;
