import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Eye, EyeClosed } from 'lucide-react';

export default function ResetPassword({ toggleModal, toggleSignInModal }) {
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [message, setMessage] = useState('');
    const [isError, setIsError] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [isSaving, setIsSaving] = useState(false); // New loading state
    const navigate = useNavigate();



    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSaving(true); // Start loading

        if (newPassword.length < 8) {
            setMessage('Password must be at least 8 characters long.');
            setIsError(true);
            setIsSaving(false); // Stop loading
            return;
        }

        if (newPassword !== confirmPassword) {
            setMessage('Passwords do not match.');
            setIsError(true);
            setIsSaving(false); // Stop loading
            return;
        }


        setTimeout(() => {
            navigate('/'); 
            toggleSignInModal(); 
        }, 3000);

    };

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="relative p-4 w-full max-w-md max-h-full bg-white rounded-lg shadow">
                <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-black">
                        Reset Password
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
                <div className="p-9 md:p-10">
                    <form className="space-y-4" onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="newPassword" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black text-center">
                                Enter New Password
                            </label>
                            <div className="relative">
                                <input
                                    type={showPassword ? 'text' : 'password'}
                                    name="newPassword"
                                    id="newPassword"
                                    value={newPassword}
                                    onChange={(e) => setNewPassword(e.target.value)}
                                    className="text-sm rounded-lg block w-full p-2.5 dark:bg-gray-100 border dark:border-gray-500 dark:placeholder-gray-400 dark:text-black mb-4"
                                    placeholder="Enter your new password"
                                    required
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute inset-y-0 right-0 flex items-center pr-3"
                                >
                                    {showPassword ? (
                                        <Eye className="h-5 w-5 text-gray-500" />
                                    ) : (
                                        <EyeClosed className="h-5 w-5 text-gray-500" />
                                    )}
                                </button>
                            </div>
                        </div>
                        <div>
                            <label htmlFor="confirmPassword" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black text-center">
                                Confirm New Password
                            </label>
                            <div className="relative">
                                <input
                                    type={showConfirmPassword ? 'text' : 'password'}
                                    name="confirmPassword"
                                    id="confirmPassword"
                                    value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                    className="text-sm rounded-lg block w-full p-2.5 dark:bg-gray-100 border dark:border-gray-500 dark:placeholder-gray-400 dark:text-black mb-10"
                                    placeholder="Confirm your new password"
                                    required
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                    className="absolute inset-y-0 right-0 flex items-center pr-3"
                                >
                                    {showConfirmPassword ? (
                                        <EyeIcon className="h-5 w-5 text-gray-500" />
                                    ) : (
                                        <EyeOffIcon className="h-5 w-5 text-gray-500" />
                                    )}
                                </button>
                            </div>
                        </div>

                        {message && (
                            <div className={`text-sm text-center mb-4 ${isError ? 'text-red-500' : 'text-gray-700'}`}>
                                {message}
                            </div>
                        )}

                        <button
                            type="submit"
                            disabled={isSaving} // Disable button while saving
                            className={`w-full px-4 py-2 rounded-lg font-medium text-white transition duration-300 ${isSaving ? 'bg-gray-400' : 'bg-doggo hover:bg-doggo'} focus:outline-none`}
                        >
                            {isSaving ? 'Saving...' : 'Reset Password'}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
