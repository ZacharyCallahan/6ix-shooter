import { StarIcon } from "@heroicons/react/solid";

const VideoEmbed = ({ story, src }) => {
    return (
        <div className="bg-gray-100 text-black text-center space-y-4 flex justify-center items-center flex-col rounded-md shadow-gray-600 p-4 border-2 border-gray-400 hover:scale-105 transition duration-300 ease-in-out">
            <div className="text-5xl flex justify-center">
                <StarIcon className="text-yellow-400 w-8 h-8 " />
                <StarIcon className="text-yellow-400 w-8 h-8 " />
                <StarIcon className="text-yellow-400 w-8 h-8 " />
                <StarIcon className="text-yellow-400 w-8 h-8 " />
                <StarIcon className="text-yellow-400 w-8 h-8 " />
            </div>
            <h3 className="text-2xl font-semibold">{story.name}</h3>
            <p className="text-lg">{story.title}</p>

            <iframe src={src} height={384} width={220} />

        </div>
    );
}

export default VideoEmbed;