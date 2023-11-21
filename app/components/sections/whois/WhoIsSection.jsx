/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image';
import Embeds from '../../Embeds';
import WhoIsBulletPoint from './WhoIsBulletPoint.jsx';
import WhoisImage from './WhoisImage';


const WhoIsSection = () => {

    return (
        <section className="py-12 px-4  bg-primary-gray">
            <div className="max-w-[96rem] mx-auto  flex flex-col lg:flex-row lg:justify-between items-center space-y-8 md:space-y-0 ">
                <div className='flex flex-col lg:items-start items-center'>
                    <div className="space-y-6 w-full lg:w-2/3 ">
                        <div className='flex flex-col lg:flex-row lg:gap-6 '>

                            <h2 className="text-4xl md:text-5xl font-bold text-left text-6ixshooter-blue  w-fit">
                                Who is Seth McCoy?
                            </h2>
                            <span className='text-white text-3xl'>*193 3's in row</span>
                        </div>
                        <p className="text-lg md:text-2xl text-left text-white mx-auto mb-6">
                            Known as "6IXSHOOTER", Seth McCoy is celebrated for his legendary shooting skills and transformative coaching.
                        </p>
                    </div>
                    <ul className="list-disc space-y-4 text-white mx-auto text-lg mt-12 lg:pl-6">
                        <WhoIsBulletPoint>
                            Renowned for setting the "193 in a Row" shooting record, witnessed live by fans worldwide.
                        </WhoIsBulletPoint>
                        <WhoIsBulletPoint>
                            Established a remarkable 24-hour shooting record with an 88.4% success rate.
                        </WhoIsBulletPoint>
                        <WhoIsBulletPoint>
                            Featured on ESPN, Sportscenter, and other top sports networks for his unparalleled skills.
                        </WhoIsBulletPoint>
                        <WhoIsBulletPoint>
                            With over 600,000 followers, he's training the next generation of elite basketball players.
                        </WhoIsBulletPoint>
                        <WhoIsBulletPoint>
                            Former NCAA YoungHarris record holder for the most three-pointers in a season.
                        </WhoIsBulletPoint>
                        <WhoIsBulletPoint>
                            Has trained more than 15,000 basketball players globally, from high school amateurs to professional athletes.
                        </WhoIsBulletPoint>
                    </ul>
                </div>
                <Embeds>
                    <blockquote className="tiktok-embed rounded-md shadow-md shadow-gray-600" cite="https://www.tiktok.com/@the6ixshooter/video/7197467521967000874" data-video-id="7197467521967000874" style={{ maxWidth: '605px', minWidth: '325px' }}> <section> <a target="_blank" title="@the6ixshooter" href="https://www.tiktok.com/@the6ixshooter?refer=embed">@the6ixshooter</a> NEW RECORD!!!!🚨🚨 193 3’s in a row🎯 46 times over 100+ in a row🏀 200 soon🔥 Full video on my Youtube channel!! TAG EVERYONE🔥 <a title="basketball" target="_blank" href="https://www.tiktok.com/tag/basketball?refer=embed">#basketball</a> <a title="swish" target="_blank" href="https://www.tiktok.com/tag/swish?refer=embed">#swish</a> <a title="bball" target="_blank" href="https://www.tiktok.com/tag/bball?refer=embed">#bball</a> <a title="fyp" target="_blank" href="https://www.tiktok.com/tag/fyp?refer=embed">#fyp</a> <a title="foryou" target="_blank" href="https://www.tiktok.com/tag/foryou?refer=embed">#foryou</a> <a title="ballislife" target="_blank" href="https://www.tiktok.com/tag/ballislife?refer=embed">#ballislife</a> <a title="viral" target="_blank" href="https://www.tiktok.com/tag/viral?refer=embed">#viral</a> <a title="sportstiktok" target="_blank" href="https://www.tiktok.com/tag/sportstiktok?refer=embed">#sportstiktok</a> <a title="nba" target="_blank" href="https://www.tiktok.com/tag/nba?refer=embed">#nba</a> <a title="shooting" target="_blank" href="https://www.tiktok.com/tag/shooting?refer=embed">#shooting</a> <a title="training" target="_blank" href="https://www.tiktok.com/tag/training?refer=embed">#training</a>  @houseofhighlights @overtime @espn @strictlybball @ballislife @bleacherreport @sportscenternext @dunk @stephencurry30 <a target="_blank" title="♬ Epic Music(863502) - Draganov89" href="https://www.tiktok.com/music/Epic-Music-863502-6873501791145691137?refer=embed">♬ Epic Music(863502) - Draganov89</a> </section> </blockquote> <script async src="https://www.tiktok.com/embed.js"></script>
                </Embeds>

            </div>
            <div className=' max-w-7xl mx-auto flex justify-around mt-16 gap-6'>
                <div className='flex flex-col gap-12'>
                    <WhoisImage
                        src="/whois/6ixShooterAcademytop3.jpg"
                        alt="Picture of Seth McCoy"
                    />
                    <WhoisImage
                        src="/whois/Shootingattempts.jpg"
                        alt="Picture of Seth McCoy"
                    />
                </div>
                <div className='flex flex-col gap-12'>
                    <WhoisImage
                        src="/whois/SethMcCoyRecordHolder.jpg"
                        alt="Picture of Seth McCoy"
                    />
                    <WhoisImage
                        src="/whois/seth-mccoy-youngharris.jpg"
                        alt="Picture of Seth McCoy"
                    />
                </div>
            </div>
        </section>
    );
};

export default WhoIsSection;
