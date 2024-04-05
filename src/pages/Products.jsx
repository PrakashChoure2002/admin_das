import React, { useState, useEffect } from 'react';

const Products = () => {
  const [productName, setProductName] = useState('');
  const [category, setCategory] = useState('');
  const [feature, setFeature] = useState('');

  const [price, setPrice] = useState('');
  const [discount, setDiscount] = useState('');
  const [description, setDescription] = useState('');
  const [selectedMainImage, setSelectedMainImage] = useState(null);
  const [selectedImages, setSelectedImages] = useState([]);
  const [newCategory, setNewCategory] = useState('');

  const [categories, setCategories] = useState(() => {
    const storedCategories = localStorage.getItem('categories');
    return storedCategories ? JSON.parse(storedCategories) : ['Face cream', 'Skin cream', 'Lips cream'];
  });

  useEffect(() => {
    localStorage.setItem('categories', JSON.stringify(categories));
  }, [categories]);

  const handleMainImageChange = (event) => {
    setSelectedMainImage(URL.createObjectURL(event.target.files[0]));
  };

  const handleImageChange = (event, index) => {
    const images = [...selectedImages];
    images[index] = URL.createObjectURL(event.target.files[0]);
    setSelectedImages(images);
  };

  const handleAddCategory = () => {
    if (newCategory.trim() !== '' && !categories.includes(newCategory)) {
      setCategories([...categories, newCategory]);
      setCategory(newCategory);
      setNewCategory('');
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({
      productName,
      feature,
      category,
      price,
      discount,
      description,
      selectedMainImage,
      selectedImages,
    });
    setProductName('');
    setCategory('');
    setFeature('');
    setPrice('');
    setDiscount('');
    setDescription('');
    setSelectedMainImage(null);
    setSelectedImages([]);
  };

  return (
    <div className="flex flex-wrap md:flex-nowrap gap-4 py-5 bg-white shadow-lg mr-10 ml-10 rounded-lg pl-20">
      <div className="w-50 md:w-1/3 lg:w-1/4 mx-20">
        <label htmlFor="mainImage" className="cursor-pointer">
          <img src={selectedMainImage || 'https://via.placeholder.com/500'} alt="Main Product" className="w-full rounded-md object-cover mb-4" />
          <input id="mainImage" type="file" onChange={handleMainImageChange} accept="image/*" className="hidden" />
        </label>
        <div className="grid grid-cols-4 gap-2 mt-2">
          {selectedImages.map((image, index) => (
            <label key={index} htmlFor={`image-${index}`} className="cursor-pointer">
              <img src={image} alt={`Product ${index + 1}`} className="w-full h-24 object-cover rounded-md" />
              <input id={`image-${index}`} type="file" onChange={(e) => handleImageChange(e, index)} accept="image/*" className="hidden" />
            </label>
          ))}
          {[...Array(4 - selectedImages.length)].map((_, index) => (
            <label key={index} htmlFor={`image-${index + selectedImages.length}`} className="cursor-pointer">
              <img src="https://via.placeholder.com/100" alt={`Product ${selectedImages.length + index + 1}`} className="w-full h-24 object-cover rounded-md" />
              <input id={`image-${index + selectedImages.length}`} type="file" onChange={(e) => handleImageChange(e, selectedImages.length + index)} accept="image/*" className="hidden" />
            </label>
          ))}
        </div>
      </div>
      <div className="w-10/12 max-w-4xl mx-auto mb-6 ">
        <form onSubmit={handleSubmit} className="space-y-2">
          <input
            type="text"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
            placeholder="Product Name"
            className="w-1/2 px-2 py-2 mb-6 mx-10 border border-gray-300 rounded-md"
          />

          <input
            type="text"
            value={feature}
            onChange={(e) => setFeature(e.target.value)}
            placeholder="Feature"
            className="w-1/2 px-2 py-2 mb-6 mx-10 border border-gray-300 rounded-md"
          />

          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-1/2  gap-4 px-3 py-2 mb-6 mx-10  border border-gray-300 rounded-md"
          >
            <option value="">Select SubCategory</option>
            {categories.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
            <option value="addCategory">Add Category</option>
          </select>
          {category === 'addCategory' && (
            <div>
              <input
                type="text"
                placeholder="Enter new category"
                className="w-1/2 px-3 py-2 mb-6 mx-10  border border-gray-300 rounded-md"
                onChange={(e) => setNewCategory(e.target.value)}
                value={newCategory}
              />

              <button
                type="button"
                onClick={handleAddCategory}
                className="bg-blue-500 hover:bg-blue-700 mx-10  text-white font-bold py-2 px-4 rounded"
              >
                Add
              </button>
            </div>
          )}

          <input
            type="number"
            value={price}
            onChange={(e) => {
              const newPrice = parseInt(e.target.value);
              setPrice(newPrice >= 0 ? newPrice : 0);
            }}
            placeholder="Price"
            className="w-1/2 px-3 py-2 mb-2 border mx-10  border-gray-300 rounded-md"
          />
          <input
            type="number"
            value={discount}
            onChange={(e) => {
              const newDiscount = parseInt(e.target.value);
              setDiscount(newDiscount >= 0 ? newDiscount : 0);
            }}
            placeholder="Discount"
            className="w-1/2 px-3 py-2 mb-2 mx-10  border border-gray-300 rounded-md"
          />
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Description"
            className="w-1/2 px-3 py-2 mb-2 mx-10  border border-gray-300 rounded-md"
          />
          <br/>
          <button
            type="submit"
            className="w-25  mx-12 mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            ADD
          </button>
        </form>
      </div>
    </div>
  );
};

export default Products;
