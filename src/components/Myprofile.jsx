import React, { useState } from 'react';

const Myprofile = () => {
  const initialUserState = {
    firstName: 'John',
    lastName: 'Doe',    
    email: 'johndoe@example.com',
    designation: 'Software Engineer',
    image: 'https://randomuser.me/api/portraits/men/1.jpg',
  };

  const [user, setUser] = useState(initialUserState);
  const [isEditing, setIsEditing] = useState(false);

  const handleImageChange = (e) => {
    setUser({ ...user, image: URL.createObjectURL(e.target.files[0]) });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    setIsEditing(false);
    // You can add logic here to save the updated user data to the database or perform any other action.
  };

  const handleCancel = () => {
    setUser(initialUserState);
    setIsEditing(false);
  };

  return (
    <div className="max-w-3xl mx-auto mt-10">
      <div className="flex items-center">
        <img
          className="w-20 h-20 rounded-full mr-4 cursor-pointer"
          src={user.image}
          alt="User"
          onClick={() => document.getElementById('imageInput').click()}
        />
        <input
          id="imageInput"
          type="file"
          accept="image/*"
          className="hidden"
          onChange={handleImageChange}
        />
        <div>
          <p className="text-xl font-semibold">{user.firstName} {user.lastName}</p>
          <p className="text-gray-500">{user.email}</p>
          <p className="text-gray-500">{user.designation}</p>
        </div>
      </div>
      <div className="mt-6">
        <label className="block text-sm font-medium text-gray-700">First Name</label>
        <input
          type="text"
          className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          name="firstName"
          value={user.firstName}
          onChange={handleInputChange}
          disabled={!isEditing}
        />
      </div>
      <div className="mt-6">
        <label className="block text-sm font-medium text-gray-700">Last Name</label>
        <input
          type="text"
          className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          name="lastName"
          value={user.lastName}
          onChange={handleInputChange}
          disabled={!isEditing}
        />
      </div>
      <div className="mt-6">
        <label className="block text-sm font-medium text-gray-700">Email</label>
        <input
          type="email"
          className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          name="email"
          value={user.email}
          onChange={handleInputChange}
          disabled={!isEditing}
        />
      </div>
      <div className="mt-6">
        <label className="block text-sm font-medium text-gray-700">Designation</label>
        <input
          type="text"
          className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          name="designation"
          value={user.designation}
          onChange={handleInputChange}
          disabled={!isEditing}
        />
      </div>
      <div className="mt-6">
        {isEditing ? (
          <>
            <button className="px-4 py-2 mr-2 bg-blue-500 text-white rounded-md" onClick={handleSave}>Save</button>
            <button className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md" onClick={handleCancel}>Cancel</button>
          </>
        ) : (
          <button className="px-4 py-2 bg-blue-500 text-white rounded-md" onClick={handleEdit}>Edit</button>
        )}
      </div>
    </div>
  );
};

export default Myprofile;
