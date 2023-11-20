import React from 'react';
// Import your video component or use a placeholder if you have a custom video component
import VideoEmbed from './VideoEmbed';

const VideoSection = () => {
    const successStories = [
        { name: 'Dennis', title: 'International PRO', videoSrc: 'https://player.vimeo.com/video/708939101?autoplay=0&title=0&byline=0&wmode=transparent&autopause=0' },
        { name: 'Carli Codner', title: 'NAIA College', videoSrc: 'https://player.vimeo.com/video/708939186?autoplay=0&title=0&byline=0&wmode=transparent&autopause=0' },
        { name: 'Kolbe Ashe', title: 'NCAA Player', videoSrc: 'https://player.vimeo.com/video/708939286?autoplay=0&title=0&byline=0&wmode=transparent&autopause=0' },
        { name: 'James Laput', title: 'International PRO', videoSrc: 'https://player.vimeo.com/video/708939200?autoplay=0&title=0&byline=0&wmode=transparent&autopause=0' },
        { name: 'Ben Underwood', title: 'D2 NCAA', videoSrc: 'https://player.vimeo.com/video/708939296?autoplay=0&title=0&byline=0&wmode=transparent&autopause=0' },
        { name: 'Eden Davis', title: 'D1 NCAA', videoSrc: 'https://player.vimeo.com/video/708939394?autoplay=0&title=0&byline=0&wmode=transparent&autopause=0' },
        { name: 'Zach Reeves', title: 'NAIA player', videoSrc: 'https://player.vimeo.com/video/717698908?autoplay=0&title=0&byline=0&wmode=transparent&autopause=0' },
        { name: 'Ryle Owens', title: 'Overseas PRO', videoSrc: 'https://player.vimeo.com/video/717698932?autoplay=0&title=0&byline=0&wmode=transparent&autopause=0' }

    ];

    return (
        <section className="py-12 px-4 bg-primary-gray text-white">
            <div className="text-center mb-10">
                <h2 className="text-4xl md:text-5xl font-bold mb-4 text-6ixshooter-blue">READY TO BE OUR NEXT SUCCESS STORY?</h2>
                <p className="text-2xl mb-6">This Is Just A Few Of The Success Stories From Shooters All Over The World.</p>
            </div>

            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {successStories.map((story, index) => (
                    <VideoEmbed
                        key={index}
                        index={index}
                        story={story}
                        src={story.videoSrc}
                    />
                ))}
            </div>
        </section>
    );
};

export default VideoSection;
