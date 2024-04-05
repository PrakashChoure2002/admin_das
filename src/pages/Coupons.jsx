import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const Coupons = () => {
  const [couponTitle, setCouponTitle] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [discount, setDiscount] = useState('');
  const [category, setCategory] = useState('');
  const [enabled, setEnabled] = useState(false);
  const [generatedCode, setGeneratedCode] = useState('');
  const [couponCodes, setCouponCodes] = useState([]);

  const generateCouponCode = () => {
    // Generate a random coupon code
    const code = Math.random().toString(36).substring(7).toUpperCase();
    setGeneratedCode(code);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Save the coupon code
    setCouponCodes([...couponCodes, generatedCode]);
    // Reset form fields
    setCouponTitle('');
    setStartDate('');
    setEndDate('');
    setDiscount('');
    setCategory('');
    setEnabled(false);
    setGeneratedCode('');
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-full max-w-md">
        <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
            <label htmlFor="couponTitle" className="block text-sm font-medium text-gray-700 " >Coupon Title</label>
            <input
              type="text"
              id="couponTitle"
              value={couponTitle}
              onChange={(e) => setCouponTitle(e.target.value)}
              className="mt-1 block w-full px-3 py-2  shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300 rounded-md"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="startDate" className="block text-sm font-medium text-gray-700">Start Date</label>
            <input
              type="date"
              id="startDate"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              className="mt-1 block w-full px-3 py-2  shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300 rounded-md"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="endDate" className="block text-sm font-medium text-gray-700">End Date</label>
            <input
              type="date"
              id="endDate"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              className="mt-1 block w-full px-3 py-2  shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300 rounded-md"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="discount" className="block text-sm font-medium text-gray-700">Discount (%)</label>
            <input
              type="number"
              id="discount"
              value={discount}
              onChange={(e) => setDiscount(e.target.value)}
              className="mt-1 block w-full px-3 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300 rounded-md"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="category" className="block text-sm font-medium text-gray-700 " >Category</label>
            <input
              type="text"
              id="category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="mt-1 block w-full px-3 py-2  shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300 rounded-md"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="enabled" className="flex items-center">
              <input
                type="checkbox"
                id="enabled"
                checked={enabled}
                onChange={(e) => setEnabled(e.target.checked)}
                className="mr-2"
              />
              Enable Coupon
            </label>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Generated Coupon Code</label>
            <input
              type="text"
              value={generatedCode}
              readOnly
              className="mr-2 px-3 py-2 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300 rounded-md"
            />
          </div>
          <button type="button" onClick={generateCouponCode} className="px-3 py-2 bg-gray-800 text-white rounded-md">Generate Code</button>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Coupon Codes</label>
            <input
              type="text"
              value={couponCodes.join(', ')}
              readOnly
              className="mr-2 px-3 py-2  shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300 rounded-md"
            />
          </div>
          <button type="submit" className="px-4 py-2 bg-indigo-600 text-white rounded-md">Generate Coupon</button>
        </form>
      </div>
    </div>
  );
};

export default Coupons;
