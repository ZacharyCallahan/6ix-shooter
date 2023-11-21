import Link from "next/link";
import Logo from "./Logo";
import DownloadButton from "./DownloadButton";
import { FaTiktok, FaYoutube } from "react-icons/fa";

const Nav = () => {
    return (
        <nav className="bg-primary-gray py-4 top-0 w-full z-10 text-white shadow-md">
            {/* Container */}
            <div className="lg:container mx-auto flex justify-between items-center px-4">

                {/* Logo and Brand Name */}
                <Link className="hidden md:inline-block" href={'/'}>
                    <div className="flex items-center cursor-pointer">
                        <Logo width={300} height={300} className="w-10 h-10 md:w-16 md:h-16" />
                    </div>
                </Link>

                {/* Navigation Items */}
                <ul className="flex w-full md:w-fit justify-center gap-4 items-center text-sm md:gap-6 md:text-lg">
                    <li className="font-medium hover:text-6ixshooter-blue hover:underline transition-all duration-300 ease-in-out flex items-center gap-3">
                        <FaTiktok className="inline-block text-2xl " />
                        <Link href={"https://www.tiktok.com/@the6ixshooter"} className="text-xl">
                            TikTok
                        </Link>
                    </li>
                    <li className="font-medium hover:text-6ixshooter-blue hover:underline transition-all duration-300 ease-in-out flex items-center gap-3">
                        <FaYoutube className="inline-block text-2xl " />
                        <Link href={"https://www.youtube.com/@The6ixShooter"} className="text-xl">
                            Youtube
                        </Link>
                    </li>
                    <li className="font-medium">
                        <DownloadButton href={"https://apps.apple.com/us/app/6ixshooter-academy-training/id1665280308"}
                            content={"Download the App"}
                            textSize={"small"}
                        />
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Nav;
