import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

export default function SignUp({ toggleModal, openSignInModal, openTermsModal }) {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    // Handle input changes
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleAccountButtonClick = () => {
        navigate("/account");  // Redirect to the PetCam page
    };
    
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="relative p-4 w-full max-w-md max-h-full bg-white rounded-lg shadow">
                <div className="flex items-center justify-between p-4 border-b rounded-t">
                    <h3 className="text-xl font-semibold text-gray-900">
                        Create an RCSA account
                    </h3>
                    <button
                        onClick={toggleModal}
                        className="text-gray-400 bg-transparent hover:bg-gray-200 rounded-lg text-sm w-8 h-8 inline-flex justify-center items-center"
                        type="button"
                    >
                        <svg className="w-3 h-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                        </svg>
                        <span className="sr-only">Close modal</span>
                    </button>
                </div>
                <div className="p-4">
                    <form className="space-y-4" onSubmit={handlePetCamButtonClick}>
                        <div>
                            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">
                                Your email
                            </label>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                className="text-sm rounded-lg block w-full p-2.5 border border-gray-300"
                                placeholder="name@example.com"
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">
                                Create password
                            </label>
                            <input
                                type="password"
                                name="password"
                                id="password"
                                value={formData.password}
                                onChange={handleInputChange}
                                className="text-sm rounded-lg block w-full p-2.5 border border-gray-300"
                                placeholder="••••••••"
                                required
                            />
                        </div>
                        <div className="text-sm text-gray-700">
                            By signing up, you agree to our{' '}
                            <a href="#" className="text-doggo hover:underline" onClick={openTermsModal}>
                                Terms and Conditions
                            </a>.
                        </div>
                        <button
                            type="submit"
                            className="w-full text-white bg-doggo hover:bg-yellow focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5"
                            onClick={handleAccountButtonClick}
                        >
                            Sign Up
                        </button>
                        <div className="text-sm font-medium text-gray-700">
                            Already have an account?{' '}
                            <a href="#" className="text-doggo hover:underline" onClick={openSignInModal}>
                                Sign In
                            </a>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}