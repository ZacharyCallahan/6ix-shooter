/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import WhoNotWhoIs from './WhoNotWhoIs';

const IsItRightForYouSection = () => {
    return (
        <section className="py-12 px-4 bg-gray-100">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-10">
                    <div className="text-4xl md:text-5xl font-bold text-primary-gray mb-4 leading">
                        <h2 >IS THE "6IXSHOOTER" SYSTEM</h2>
                        <h2 className='text-red-600'>RIGHT FOR YOU?</h2>
                    </div>
                    <p className="text-xl mb-6 font-semibold">Unlock Your Potential On The Court: The Secret To Becoming A Great Shooter</p>
                    <p className="text-xl mb-6">
                        Do You Dream Of Being A Top-Level Shooter, But Struggle To Make It Happen? The Truth Is, The Difference Between A Good Shooter And A Bad One Comes Down To One Thing: Correct Training And Practice.
                    </p>
                    <p className="text-xl mb-6">
                        At 6ixShooter Academy, We Know What It Takes To Transform You Into A Sharpshooter.
                        With Our Specialized Shot Training, Drills, And Tools,
                        <span className='font-semibold'>
                        We'll Help You Develop The Form, Accuracy,
                            And Consistency You Need To Make The Team And Dominate On The Court.
                        </span>
                    </p>
                    <p className="text-xl">
                        We Don't Train Just Anyone - We Work With The Serious Shooters Who Are Dedicated To Becoming The Best. If You're Willing To Put In The Effort, We'll Provide The Guidance And Expertise You Need To Achieve Your Goals.
                    </p>
                </div>

                <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-8">
                    {/* Who It's For */}
                    <WhoNotWhoIs
                        header={"WHO IT'S FOR"}
                        not={true}
                        listItems={[{
                            header: "Ready to Level Up Your Game?",
                            content: "No more excuses! I am ready to become elite!"
                        }, {
                            header: "Become the Best Version of Yourself:",
                            content: "On and Off the Court with 6ixShooter Academy!"
                        }, {
                            header: "​Get Motivated to Compete:",
                            content: "Our Shooting Program Helps You Excel on Any Team!"
                        }
                        ]}
                    />

                    {/* Who It's Not For */}
                    <WhoNotWhoIs
                        header={"WHO IT'S NOT FOR"}
                        not={false}
                        listItems={[{
                            header: "Serious Players Only:",
                            content: "Leave Laziness Behind and Become Elite"
                        }, {
                            header: "Put Your Ego Aside:",
                            content: "Trust the Process and Unlock Your Full Potential"
                        }, {
                            header: "No Quitting Allowed:",
                            content: "Embrace Failure and Learn from It in Our Program"
                        }
                        ]}
                    />

                </div>
            </div>
        </section>
    );
};

export default IsItRightForYouSection;
