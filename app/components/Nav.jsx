import Link from "next/link";
import Logo from "./Logo";

const Nav = () => {
    return (
        <nav className="bg-primary-gray py-4 top-0 w-full z-10 text-white shadow-md">
            {/* Container */}
            <div className="container mx-auto flex justify-between items-center px-4">

                {/* Logo and Brand Name */}
                <Link className="hidden md:inline-block" href={'/'}>
                    <div className="flex items-center cursor-pointer">
                        <Logo width={300} height={300} className="w-12 h-12 md:w-16 md:h-16" />
                    </div>
                </Link>

                {/* Navigation Items */}
                <ul className="flex w-full justify-center gap-4 items-center text-sm md:gap-6 md:text-lg">
                    <li className="font-medium hover:text-6sixshooter-blue hover:underline transition-all duration-300 ease-in-out">
                        <Link href={"https://www.tiktok.com/@the6ixshooter"} className="text-xl">
                            TikTok
                        </Link>
                    </li>
                    <li className="font-medium hover:text-6sixshooter-blue hover:underline transition-all duration-300 ease-in-out">
                        <Link href={"https://www.youtube.com/@The6ixShooter"} className="text-xl">
                            Youtube
                        </Link>
                    </li>
                    <li className="font-medium">
                        <Link href={"https://apps.apple.com/us/app/6ixshooter-academy-training/id1665280308"} className="block p-1 md:px-3 md:py-2 bg-6sixshooter-blue text-white font-bold rounded-sm md:rounded-lg shadow-lg hover:bg-blue-600 transition duration-300 ease-in-out hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-300 text-sm md:text-xl">
                            Download the App
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Nav;
