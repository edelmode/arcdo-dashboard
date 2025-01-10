import React, { useState } from 'react';


const HomeBody = () => {
    

    

    return (
        <div
            id="home"
            className='text-black bg-cover bg-center min-h-screen flex justify-between items-center px-20 py-8 pt-32 ml-[250px]' // Added pt-32 for spacing
            style={{ backgroundImage: "url('/public/bg.png')" }}
        >
            {/* Left side with text and button */}
            <div className="flex flex-col justify-center items-start w-1/2">
                <h1 className="text-black font-['Montserrat'] sm:text-6xl text-[2.75rem] italic font-bold leading-[100%] bg-white bg-opacity-50 p-4">
                    DOGGO
                </h1>

                <p className="text-black font-['Montserrat'] sm:text-xl text-[1rem] italic font-semibold leading-[100%] bg-white bg-opacity-50 p-2 rounded mt-2">
                    Understand Your Dog's Emotions <br />
                    with Smart Play & Real-Time Monitoring
                </p>

                <div className="mt-5">
                    <button
                        className="flex flex-shrink-0 justify-center text-white items-center gap-2 w-[15rem] lg:h-[3.5rem] rounded-full bg-doggo md:text-xl font-bold md:leading-[100%] hover:bg-yellow hover:transition duration-300 py-4 border-4 border-white"
                        
                    >
                        Get StartedDDD
                    </button>
                </div>
            </div>
</div>
    );
};

export default HomeBody;
