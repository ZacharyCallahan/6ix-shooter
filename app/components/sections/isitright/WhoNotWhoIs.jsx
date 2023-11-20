import { FaCheck } from "react-icons/fa";

const WhoNotWhoIs = ({ header, listItems, not }) => {
    return (
        <div className="border-2 border-gray-300 rounded-sm shadow-sm shadow-gray-600 p-6 md:w-1/2 transition duration-300 ease-in-out hover:scale-105" >
            <h1 className="text-3xl text-center font-bold underline mb-6">{header}</h1>
            <ul className="space-y-3">

                {listItems.map((item, index) => {
                    return (
                        <li key={index} className="flex justify-center items-center gap-3">
                            <FaCheck className={`shadow-md p-1 text-[32px] text-white ${not ? "bg-green-500 shadow-green-500" : "bg-red-500 shadow-red-500"}`} />
                            <p className="text-xl w-3/4"><span className="font-semibold">{item.header}</span> {item.content}</p>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}

export default WhoNotWhoIs;