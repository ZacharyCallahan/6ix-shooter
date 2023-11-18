import Link from "next/link";
import Logo from "./Logo";

const Nav = () => {
    return (
        <nav className="bg-primary-gray py-4 md:py-6 top-0 w-full z-10 text-white shadow-md">
            {/* Container */}
            <div className="container mx-auto flex justify-between items-center px-4 md:px-6">

                {/* Logo and Brand Name */}
                    <Link href={'/'} className="flex items-center">
                        <Logo width={300} height={300} />
                    </Link>

                {/* Navigation Items */}
                <ul className="flex gap-4 md:gap-6 text-sm md:text-lg">
                    <li className="font-medium hover:text-6sixshooter-blue hover:underline text-white transition-all duration-300 ease-in-out text-xl">
                        <Link href={"https://www.tiktok.com/@the6ixshooter"}>
                        TikTok
                        </Link>    
                    </li>
                    <li className="font-medium hover:text-6sixshooter-blue hover:underline text-white transition-all duration-300 ease-in-out text-xl">
                        <Link href={"https://www.youtube.com/@The6ixShooter"}>
                        Youtube
                        </Link>
                    </li>
                    <li className="font-medium">
                        <Link href={"https://apps.apple.com/us/app/6ixshooter-academy-training/id1665280308"} className="px-3 py-2 bg-6sixshooter-blue text-white text-xl font-bold rounded-lg shadow-lg hover:bg-blue-600 transition duration-300 ease-in-out hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-300">
                            Download the App
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Nav;
