import { FaCheck } from "react-icons/fa";

const WhoIsBulletPoint = ({ children }) => {
    return (
        <li className="flex justify-center lg:justify-start items-center gap-6 ">
            <FaCheck className="shadow-md p-1 text-[32px] shadow-white bg-white text-6ixshooter-blue" />
            <p className=" sm:text-2xl  w-3/4">{children}</p>
        </li>
    );
}

export default WhoIsBulletPoint;