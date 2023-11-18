'use client'

import { useEffect, useState } from "react";

const Embeds = ({ children }) => {
    const [isClient, setIsClient] = useState(false);
    // Dynamically load the TikTok embed script when the component mounts
    useEffect(() => {
        setIsClient(true);
    }, []);

    return (

        <>
            {
                isClient &&
                <div className="w-fit">
                    {children}
                </div>
            }
        </>
    );
}

export default Embeds;