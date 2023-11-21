import Link from "next/link";
import Logo from "../Logo";

const Footer = () => {
    return (
        <footer className="bg-gray-100 text-black py-8">
            <div className="container mx-auto flex flex-col items-center space-y-6">
                <Logo width={300} height={300} color={"black"} />

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
                    <Link href="tel:+18184309202" className="hover:underline text-6ixshooter-blue">
                        +1-818-430-9202
                    </Link>
                </p>

                <p className="text-center">
                    CopyRight © 2021 6ix Shooter Academy. All Rights Reserved.
                </p>
                <p className="text-center text-sm">Created With Love by <Link className="hover:underline text-6ixshooter-blue" href={"https://www.linkedin.com/in/zachary-callahan-dev/"}>Zachary Callahan</Link> </p>
            </div>
        </footer>
    );
}

export default Footer;
