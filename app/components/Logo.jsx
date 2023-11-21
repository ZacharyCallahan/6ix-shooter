import Image from "next/image";

const Logo = ({width, height, color}) => {
    return (
        <Image
            alt="^6ix Shooter Logo"
            src="/6ixLogo.png"
            className={`transition duration-300 ease-in-out rounded-md transform hover:scale-110 bg-${color}`}
            width={width}
            height={height}
        />
            
        
    );
}

export default Logo;