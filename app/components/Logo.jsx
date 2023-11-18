import Image from "next/image";

const Logo = ({width, height}) => {
    return (
        <Image
            alt="^6ix Shooter Logo"
            src="/6ixLogo.png"
            className="transition duration-300 ease-in-out transform hover:scale-110"
            width={width}
            height={height}
        />
            
        
    );
}

export default Logo;