import Link from "next/link";
import Logo from "../Logo";

const Footer = () => {
    return (
        <footer className="bg-primary-gray text-gray-100 py-8">
            <div className="container mx-auto flex flex-col items-center space-y-6">
                <Logo width={300} height={300} />

                <ul className="flex flex-wrap justify-center items-center gap-6 text-lg">
                    <li>
                        <Link href="/terms" className="hover:underline">
                            Terms & Conditions
                        </Link>
                    </li>
                    <li>
                        <Link href="/privacy" className="hover:underline">
                            Privacy Policy
                        </Link>
                    </li>
                    <li>
                        <Link href="/disclaimer" className="hover:underline">
                            Disclaimer
                        </Link>
                    </li>
                </ul>

                <p className="text-center max-w-md mx-auto">
                    Testimonial & Results Disclaimer: Individual results will vary based on a variety of factors.
                    Always consult a physician before starting any new training.
                </p>

                <p className="text-center">
                    Mt Solutions, LLC
                    3639 Midway Dr, Suit B #207, SAN DIEGO, CA 92110
                    <br />
                    <Link href="tel:+18184309202" className="hover:underline text-blue-500">
                        +18184309202
                    </Link>
                </p>

                <p className="text-center">
                    CopyRight © 2021 6ix Shooter Academy. All Rights Reserved.
                </p>
            </div>
        </footer>
    );
}

export default Footer;
