import Link from "next/link";

const DownloadButton = ({href, content, textSize}) => {
    return (
        <Link href={href}
            className={`block p-2 md:px-3 md:py-2 bg-6ixshooter-blue text-white font-bold rounded-md 
                        shadow-md shadow-gray-600  hover:bg-blue-600
                        transition duration-300 ease-in-out hover:scale-105 focus:outline-none focus:ring-2
                        focus:ring-blue-300 ${textSize == "small" && "text-sm lg:text-xl"} 
                        ${textSize == "medium" && "text-xl md:text-2xl w-1/2 lg:w-fit"} 
                        ${textSize == "large" && "text-2xl md:text-4xl"}
                        `}>
            {content}
        </Link>
    );
}

export default DownloadButton;