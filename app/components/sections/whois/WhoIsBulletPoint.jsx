import { FaCheck } from "react-icons/fa";

const WhoIsBulletPoint = ({ children, color, className}) => {
    return (
        <li className={`flex justify-center lg:justify-start items-center gap-6 ${className} `}>
            <FaCheck
                className={` p-1 text-[32px] 
                 text-6ixshooter-blue transition duration-300 ease-in-out hover:scale-125`} />
            <p className=" sm:text-2xl  w-3/4">{children}</p>
        </li>
    );
}

export default WhoIsBulletPoint;