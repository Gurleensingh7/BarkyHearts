import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Toaster, toast } from 'sonner';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Home.css';
import './Responsive.css'
import axios from "axios"

const Home = () => {

  const [products, setProducts] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://barkyhearts-1.onrender.com/api/products/Get_All_Products");
        const data = await response.json();

        if (data.success) {
          setProducts(data.Data);
          console.log(products)
          toast.success(data.message)
        }
      } catch (error) {
        toast.error(error.message)
      }
    }

    fetchData()
  }, [])

  useEffect(() => {
    AOS.init(); // Initialize AOS animation
  }, []);

  const handleAddToCart = async (product) => {
    const user = JSON.parse(localStorage.getItem("User"));
    if (!user?.email) {
      return alert("Please login to add items to cart.");
    }
  
    try {
      const response = await axios.post('https://barkyhearts-1.onrender.com/api/cart', {
        email: user.email,
        product
      });
  
      const { message, alreadyExists } = response.data;
  
      if (alreadyExists) {
        alert("This product is already in your cart.");
      } else {
        alert("Product added to cart successfully!");
      }
  
    } catch (err) {
      console.error('Add to cart error:', err);
      alert(err.response?.data?.message || "Failed to add to cart");
    }
  };


  return (
    <>
      <Toaster richColors position='bottom-center' />
      <div className="home_section">
        <div data-aos="zoom-in" className="home">
          <img
            src="https://static1.squarespace.com/static/58e086d737c5814ef81f146d/592399fa03596e8048812931/5959b5f6bf629a17ab5c5852/1741202338380/living-in-a-multi-dog-household.jpg?format=1500w"
            className="img-fluid"
            alt="Pets"
            data-aos="fade-down"
          />
          <div className="hometitle" data-aos="fade-down">Highest Quality Care <br /> For Pets You'll Love</div>
          <Link to='/veterinarian'><button type="button" className="btn btn-outline-light learn_btn" >Learn More</button></Link>
        </div>
        <h1 className="Top_Categories" data-aos="fade-down">Top Categories</h1>
        <div className="home_category">
          <div className="images_container">
            {[
              { name: "Labrador Retriever", img: "barkyimages/dog1.png" },
              { name: "Bernese Mountain Dog", img: "barkyimages/dog2.png" },
              { name: "Bichon Frise", img: "barkyimages/dog3.png" },
              { name: "German Shepherd", img: "barkyimages/dog4.png" },
              { name: "Pug", img: "barkyimages/dog5.png" },
              { name: "English Pointer", img: "barkyimages/dog6.png" },
              { name: "American Bull Dog", img: "barkyimages/dog7.png" },
              { name: "Beagle", img: "barkyimages/dog8.png" },
              { name: "Black German Shepherd", img: "barkyimages/dog9.png" },
              { name: "Cairn Terrier", img: "barkyimages/dog10.png" },
              { name: "Charles Spaniel", img: "barkyimages/dog11.png" },
              { name: "Toy Poodle", img: "barkyimages/dog12.png" },
              { name: "English Springer Spaniel", img: "barkyimages/dog13.png" },
              { name: "Nova Scotia Retriever", img: "barkyimages/dog14.png" },
            ].map((dog, index) => (
              <div key={index} className="dog_card" data-aos="fade-down">
                <img src={dog.img} className="each_pet_image" alt={dog.name} />
                <p className="dog_name">{dog.name}</p>
              </div>
            ))}
          </div>
        </div>
        <br /><br /><br />

        <h1 className="Featured_Products" data-aos="fade-down">Featured Products</h1>
        
        <div className="container">
          <div className="row row-cols-1 row-cols-md-3 g-4">
            {products.map((product, index) => (
              <div className="col" key={index} data-aos="fade-down">
                <div className="card">
                  <div className="slide slide1">
                    <div className="content">
                      <div className="icon" style={{ backgroundImage: `url(${product.imageURL})` }}></div>
                    </div>
                  </div>
                  <div className="slide slide2">
                    <div className="content">
                      <h3 className="product-title"><b>{product.title}</b></h3>
                      <p className="product-description">{product.description}</p>
                      <div className="card-info-badges">
                        <span className="badge price">💰 {product.price}</span>
                        <span className="badge brand">🏷️ {product.brand}</span>
                      </div>
                      <button onClick={(e)=>{handleAddToCart(product)}} type="button" className="btn btn-cart">Add To Cart</button>
                    </div>
                  </div>


                </div>
              </div>
            ))}
          </div>
        </div>
        <br /><br />
        {/* <center><Link to=""><button type="button" class="btn btn-secondary button-LM">Learn More</button></Link></center> */}
      </div>
    </>
  );
};

export default Home;
