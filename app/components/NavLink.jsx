"use client";
import Link from "next/link";

const NavLink = ({ label, link, elementId }) => {
    const handleScrollTo = (elementId) => (event) => {
        event.preventDefault();
        const el = document.getElementById(elementId);
        if (el) {
            const rect = el.getBoundingClientRect();
            const absoluteElementTop = rect.top + window.pageYOffset;
            const offsetPosition = absoluteElementTop; // Adjust for your offset
            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth",
            });
        }
    };

    return (
        <Link
            href={link}
            onClick={handleScrollTo(elementId)}
            className="text-xl">
            {label}
        </Link>
    );
};

export default NavLink;