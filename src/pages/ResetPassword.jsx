import React, { useState } from 'react';

const ResetPassword = () => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can add logic to send a request to your backend to handle the password reset functionality
    // For now, we'll just show a success message
    setMessage('Your password has been reset successfully.');
    setPassword('');
    setConfirmPassword('');
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full sm:w-1/2 lg:w-1/3">
        <h1 className="text-2xl font-bold mb-4">Reset Password</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex flex-col">
            <label htmlFor="password" className="text-sm font-medium">New Password</label>
            <input
              type="password"
              id="password"
              className="border border-gray-300 rounded-md px-3 py-2"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="confirmPassword" className="text-sm font-medium">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              className="border border-gray-300 rounded-md px-3 py-2"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white font-medium rounded-md px-4 py-2 hover:bg-blue-600 transition-colors"
          >
            Reset Password
          </button>
          {message && (
            <p className="text-green-600 mt-2">{message}</p>
          )}
          {error && (
            <p className="text-red-600 mt-2">{error}</p>
          )}
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;

