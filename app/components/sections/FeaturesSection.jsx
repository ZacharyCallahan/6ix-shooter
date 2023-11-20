/* eslint-disable react/no-unescaped-entities */
import BornToPlay from '@/public/sponsors/born-to-play.jpg';
import ChanceLogo from '@/public/sponsors/chance-logo.png';
import TheGun from '@/public/sponsors/thegun.jpg';
import Image from "next/image";

const FeaturesSection = () => {
    return (
        <section className=" h-auto py-12 flex flex-col items-center bg-gray-100">
            <div className="container mx-auto">
                {/* Text Content */}
                <div className="text-center px-4 md:px-12 mb-12">
                    <h1 className="text-3xl md:text-5xl font-semibold mb-4">UNLOCK YOUR TRUE SHOOTING POTENTIAL</h1>
                    <p className="text-lg md:text-xl mb-6">Embrace a unique opportunity to elevate your basketball skills with 6ixShooter Academy's innovative coaching and comprehensive training programs. Experience the transformative power of our techniques, designed for all levels, from beginners to pros.</p>
                </div>

                {/* Image Gallery */}
                <div className="flex flex-wrap justify-center items-center gap-10 mb-12">
                    <div className="p-2 bg-primary-gray rounded-sm shadow-md shadow-gray-600 hover:scale-105 transition duration-300">
                        <Image src={BornToPlay} width={250} height={250} alt="Born To Play" />
                    </div>
                    <div className="p-2 bg-primary-gray rounded-sm shadow-md shadow-gray-600 hover:scale-105 transition duration-300">
                        <Image src={TheGun} width={250} height={250} alt="The Gun" />
                    </div>
                    <div className="p-2 bg-primary-gray rounded-sm shadow-md shadow-gray-600 hover:scale-105 transition duration-300">
                        <Image src={ChanceLogo} width={250} height={250} alt="Chance Logo" />
                    </div>
                </div>


                {/* Additional Content */}
                <div className="text-center px-4 md:px-12">
                    <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
                        <div className="md:w-1/3">
                            <h2 className="text-3xl font-semibold mb-2">Customized Training</h2>
                            <p className="text-lg">Our training plans are meticulously crafted to fit your unique skills and goals. From foundational drills to advanced techniques, our program adapts to your growth and challenges you at every step.</p>
                        </div>
                        <div className="md:w-1/3">
                            <h2 className="text-3xl font-semibold mb-2">Community Support</h2>
                            <p className="text-lg">Join a vibrant community of enthusiastic players and mentors. Share your experiences, learn from peers, and get inspired by the collective passion for basketball. Our platform is a hub for engagement and support.</p>
                        </div>
                        <div className="md:w-1/3">
                            <h2 className="text-3xl font-semibold mb-2">Progress Tracking</h2>
                            <p className="text-lg">Track your development with our state-of-the-art tools. Watch as your precision and consistency improve over time, with measurable results that reflect your hard work and dedication to the sport.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default FeaturesSection;
