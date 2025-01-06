import React, { useState } from 'react';


const HomeBody = () => {
    const [isSignInOpen, setIsSignInOpen] = useState(false);
    const [isSignUpOpen, setIsSignUpOpen] = useState(false);
    const [isForgotPassOpen, setIsForgotPassOpen] = useState(false);
    const [isVerificationOpen, setVerificationOpen] = useState(false);
    const [isResetPass, setResetPassOpen] = useState(false);
    const [isTermsOpen, setTermsOpen] = useState(false);

    

    

    const toggleSignInModal = () => {
        setIsSignInOpen(!isSignInOpen);
        setIsSignUpOpen(false);
        setIsForgotPassOpen(false);
        setVerificationOpen(false);
        setResetPassOpen(false);
        setTermsOpen(false);
    };

    const toggleSignUpModal = () => {
        setIsSignUpOpen(!isSignUpOpen);
        setIsSignInOpen(false);
        setIsForgotPassOpen(false);
        setVerificationOpen(false);
        setResetPassOpen(false);
        setTermsOpen(false);
    };

    const toggleForgotPassModal = () => {
        setIsForgotPassOpen(!isForgotPassOpen);
        setIsSignInOpen(false);
        setIsSignUpOpen(false);
        setVerificationOpen(false);
        setResetPassOpen(false);
        setTermsOpen(false);
    };

    

    const openSignUpModal = () => {
        setIsSignUpOpen(true);
        setIsSignInOpen(false);
        setIsForgotPassOpen(false);
        setVerificationOpen(false);
        setResetPassOpen(false);
        setTermsOpen(false);
    };

    const openSignInModal = () => {
        setIsSignInOpen(true);
        setIsSignUpOpen(false);
        setIsForgotPassOpen(false);
        setVerificationOpen(false);
        setResetPassOpen(false);
        setTermsOpen(false);
    };

    const openForgotPassModal = () => {
        setIsForgotPassOpen(true);
        setIsSignInOpen(false);
        setIsSignUpOpen(false);
        setVerificationOpen(false);
        setResetPassOpen(false);
        setTermsOpen(false);
    };

    const openVerificationModal = () => {
        setVerificationOpen(true);
        setIsSignInOpen(false);
        setIsSignUpOpen(false);
        setIsForgotPassOpen(false);
        setResetPassOpen(false);
        setTermsOpen(false);
    };

    const openResetPassModal = () => {
        setResetPassOpen(true);
        setIsSignInOpen(false);
        setIsSignUpOpen(false);
        setIsForgotPassOpen(false);
        setVerificationOpen(false);
        setTermsOpen(false);
    };

    

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
                        onClick={toggleSignInModal}
                    >
                        Get Started
                    </button>
                </div>
            </div>

            {isSignInOpen && <SignIn toggleModal={toggleSignInModal} openSignUpModal={openSignUpModal} openForgotPassModal={openForgotPassModal} />}
            {isSignUpOpen && <SignUp toggleModal={toggleSignUpModal} openSignInModal={openSignInModal} openTermsModal={openTermsModal} />}
            {isForgotPassOpen && <ForgotPassword toggleModal={toggleForgotPassModal} openSignInModal={openSignInModal} openVerificationModal={openVerificationModal}/>}
            {isVerificationOpen && <VerificationCard toggleModal={toggleVerificationModal} openSignInModal={openSignInModal} openResetPassModal={openResetPassModal} />}
            {isTermsOpen && <TermsOfUse toggleModal={toggleTermsModal} openSignUpModal={openSignUpModal}/>}
            {isResetPass && <ResetPassword toggleModal={toggleResetPassModal} toggleSignInModal={toggleSignInModal} />}
        </div>
    );
};

export default HomeBody;
