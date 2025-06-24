import React, { useState, useEffect } from 'react';
import './EditModal.css';
import axios from 'axios';

const EditProductModal = ({ isOpen, onClose, product }) => {
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [imageURL, setImageUrl] = useState('');

  useEffect(() => {
    if (product) {
      setTitle(product.title || '');
      setPrice(product.price || '');
      setDescription(product.description || '');
      setImageUrl(product.imageURL || '');
    }
  }, [product]);

  if (!isOpen) return null;

  const handleEdit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.put(`http://localhost:8000/api/products/update/${product._id}`, {
        title,
        price,
        description,
        imageURL
      });
      console.log(res.data);
      onClose(); // Close modal on success
    } catch (error) {
      console.error('Error updating product:', error);
    }
  };

  return (
    <div className="edit-modal-overlay">
      <div className="edit-modal-container">
        <div className="edit-modal-header">
          <h2>Edit Product</h2>
          <button className="edit-close-btn" onClick={onClose}>&times;</button>
        </div>
        <form className="edit-modal-form" onSubmit={handleEdit}>
          <div className="edit-modal-body">
            <label>Title:</label>
            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />

            <label>Price:</label>
            <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} required />

            <label>Description:</label>
            <textarea value={description} onChange={(e) => setDescription(e.target.value)} required />

            <label>Image URL:</label>
            <input type="text" value={imageURL} onChange={(e) => setImageUrl(e.target.value)} required />

            {imageURL && (
              <div className="edit-image-preview">
                <p>Image Preview:</p>
                <img src={imageURL} alt="Product Preview" style={{ maxWidth: '100%', height: 'auto' }} />
              </div>
            )}
          </div>
          <div className="edit-modal-footer">
            <button type="button" className="edit-cancel-btn" onClick={onClose}>
              Cancel
            </button>
            <button type="submit" className="edit-confirm-btn">
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditProductModal;
