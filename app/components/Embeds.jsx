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
                <div className="w-fit pt-12">
                    {children}
                </div>
            }
        </>
    );
}

export default Embeds;