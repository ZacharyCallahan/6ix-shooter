import { FaCheck } from "react-icons/fa";

const WhoIsBulletPoint = ({children}) => {
    return (
        <li className="flex just items-center gap-6 ">
            <FaCheck className="shadow-md p-1 text-[48px] shadow-white bg-white text-6sixshooter-blue"/>
            <p className="text-3xl w-3/4">{children}</p>
        </li>
    );
}

export default WhoIsBulletPoint;