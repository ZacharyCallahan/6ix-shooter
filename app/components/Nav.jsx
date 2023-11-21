import Link from "next/link";
import Logo from "./Logo";
import DownloadButton from "./DownloadButton";
import { FaTiktok, FaYoutube } from "react-icons/fa";
import { IoMdContact } from "react-icons/io";
import NavLink from "./NavLink";

const Nav = () => {
    return (
        <nav className="bg-primary-gray py-4 top-0 w-full z-10 text-white shadow-md">
            {/* Container */}
            <div className="lg:container mx-auto flex justify-between items-center gap-6 px-4">

                {/* Logo and Brand Name */}
                <Link className="hidden md:inline-block" href={'/'}>
                    <div className="flex items-center cursor-pointer">
                        <Logo width={300} height={300} className="w-10 h-10 md:w-16 md:h-16" />
                    </div>
                </Link>

                {/* Navigation Items */}
                <ul className="flex w-full md:w-fit justify-center gap-4 items-center text-sm md:gap-6 md:text-lg">
                    <li className="font-medium hover:text-6ixshooter-blue hover:underline transition-all duration-300 ease-in-out flex items-center gap-2">
                        <IoMdContact className="inline-block text-2xl" />
                        <NavLink
                            label={"Contact"}
                            link={"/"}
                            elementId={"contact"}
                        />
                    </li>
                    <li className="font-medium hover:text-6ixshooter-blue hover:underline transition-all duration-300 ease-in-out flex items-center gap-2">
                        <FaTiktok className="inline-block text-2xl " />
                        <NavLink
                            label={"TikTok"}
                            link={"https://www.tiktok.com/@the6ixshooter"}
                        />
                        
                    </li>
                    <li className="font-medium hover:text-6ixshooter-blue hover:underline transition-all duration-300 ease-in-out flex items-center gap-2">
                        <FaYoutube className="inline-block text-2xl " />
                        <NavLink
                            label={"Youtube"}
                            link={"https://www.youtube.com/@The6ixShooter"}
                        />
                        
                    </li>
                    <li className="font-medium hidden md:inline-block">
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
