import React, { useEffect, useState } from 'react';
import { Plus } from 'lucide-react';
import './AdminProducts.css';
import AddProductModal from '../../Components/AddProductModal';
import DeleteModal from '../../Components/DeleteModal'
import EditModal from '../../Components/EditModal'

const AdminProducts = () => {
  const [products, setProducts] = useState([]);
  const [product, setProduct] = useState(false)
  const [showModal, setShowModal] = useState(false);
  const [isDelete, setDelete] = useState(false)
  const [isEdit, setEdit] = useState(false)

  const fetchProducts = async () => {
    try {
      const res = await fetch('https://barkyhearts-1.onrender.com/api/products/Get_all_Products');
      const data = await res.json();
      console.log(data.Data[0])
      setProducts(data.Data)
    } catch (error) {
      console.log(object)
    }
  }
  useEffect(() => {
    fetchProducts();
  }, [])

  const handleDelete = (product) => {
    setDelete(true)
    setProduct(product)
  }
  const handleEdit = (product) => {
    setEdit(true)
    setProduct(product)
  }
  return (
    <div className="admin-products">
      <AddProductModal isOpen={showModal} onClose={() => setShowModal(false)} />
      <DeleteModal isOpen={isDelete} onClose={() => setDelete(false)} product={product} />
      <EditModal isOpen={isEdit} onClose={() => setEdit(false)} product={product} />
      <div className="products-header">
        <h1>Products Management</h1>
        <button onClick={() => setShowModal(true)} className="add-product">
          <Plus size={18} />
          Add Product
        </button>
      </div>

      <div className="products-table-container">
        <table className="products-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Image</th>
              <th>Name</th>
              <th>Category</th>
              <th>Price</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => (
              <tr key={product._id}>
                <td>{index + 1}.</td>
                <td><img style={{ width: '50px' }} src={product.imageURL} alt="" /></td>
                <td>{product.title}</td>
                <td>{product.brand}</td>
                <td>₹{product.price}/-</td>
                <td className="actions">
                  <button onClick={() => handleDelete(product)} className="delete">Delete</button>
                  <button onClick={() => handleEdit(product)} className="Edit">Edit</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminProducts;