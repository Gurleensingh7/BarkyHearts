import React from 'react';
import './DeleteModal.css';
import axios from 'axios';

const DeleteProductModal = ({ isOpen, onClose, product }) => {
  if (!isOpen) return null;

  const handleDelete = async () => {
    try {
      const res = await axios.delete(`https://barkyhearts-1.onrender.com/api/products/delete/${product._id}`);
      console.log(res.data);
      onClose();
    } catch (error) {
      console.error('Error deleting product:', error);
    }
  };

  return (
    <div className="delete-modal-overlay">
      <div className="delete-modal-container">
        <div className="delete-modal-header">
          <h2>Confirm Deletion</h2>
          <button className="delete-close-btn" onClick={onClose}>&times;</button>
        </div>
        <div className="delete-modal-body">
          <p>Are you sure you want to delete <strong>{product?.title}</strong>?</p>
          <p>This action cannot be undone.</p>
        </div>
        <div className="delete-modal-footer">
          <button className="delete-cancel-btn" onClick={onClose}>
            Cancel
          </button>
          <button className="delete-confirm-btn" onClick={handleDelete}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteProductModal;
