import React, { useState } from 'react';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can add logic to send a request to your backend to handle the forgot password functionality
    // For now, we'll just show a success message
    setMessage('Password reset instructions have been sent to your email.');
    setEmail('');
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full sm:w-1/2 lg:w-1/3">
        <h1 className="text-2xl font-bold mb-4">Forgot Password</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex flex-col">
            <label htmlFor="email" className="text-sm font-medium">Email</label>
            <input
              type="email"
              id="email"
              className="border border-gray-300 rounded-md px-3 py-2"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white font-medium rounded-md px-4 py-2 hover:bg-blue-600 transition-colors"
          >
            Send Reset Instructions
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

export default ForgotPassword;
