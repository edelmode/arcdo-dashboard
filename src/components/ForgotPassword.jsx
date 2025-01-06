import { useState } from 'react';

export default function ForgotPassword({ toggleModal, openSignInModal }) {
    const [email, setEmail] = useState('');
    const [isLoading, setIsLoading] = useState(false); // State to track loading


    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true); // Set loading to true
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="relative p-4 w-full max-w-md max-h-full bg-white rounded-lg shadow">
                {/* Modal header */}
                <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-black">
                        Forgot Password
                    </h3>
                    <button
                        onClick={toggleModal}
                        className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                        type="button"
                    >
                        <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                        </svg>
                        <span className="sr-only">Close modal</span>
                    </button>
                </div>
                {/* Modal body */}
                <div className="p-9 md:p-10">
                    <form className="space-y-4" onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black text-center">
                                Enter email address
                            </label>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                value={email}
                                onChange={handleEmailChange}
                                className="text-sm rounded-lg block w-full p-2.5 dark:bg-gray-100 border dark:border-gray-500 dark:placeholder-gray-400 dark:text-black mb-10"
                                placeholder="name@example.com"
                                required
                            />
                        </div>


                        <button
                            type="submit"
                            disabled={isLoading} // Disable button while loading
                            className={`w-full px-4 py-2 rounded-lg font-medium text-white transition duration-300 ${isLoading ? 'bg-gray-400' : 'bg-doggo hover:bg-yellow'} focus:outline-none focus:ring-4 focus:ring-doggo-300`}
                        >
                            {isLoading ? 'Sending Verification...' : 'Send Verification'}
                        </button>
                        <div className="text-sm font-medium text-gray-700 dark:text-gray-700">
                            Already have an account?{' '}
                            <a href="#" className="text-doggo hover:underline dark:text-doggo" onClick={openSignInModal}>
                                Sign In
                            </a>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
