import React from 'react'
import { Link } from 'react-router-dom'
import './Services.css'

const Services = () => {
    function toggleLike(button) {
        button.classList.toggle("liked");
    }
    return (
        <>
       <div className="container">
  <h1> Our Services </h1>
  <div className="grid">
    <div className="card">
      <img src="https://th.bing.com/th/id/OIP.QkTED4cUu3tAljaLLgqsIwHaFj?rs=1&pid=ImgDetMain" alt="Grooming Services" />
      <h2>Grooming Services</h2>
      <p>Professional pet grooming to keep your pet clean and happy.</p>
      <button className="like-btn" onclick="toggleLike(this)">❤️</button>
    </div>
    <div className="card">
      <img src="https://trainingmybestfriend.com/wp-content/uploads/2019/06/best-healthy-dog-foods-1024x888.jpg" alt="Healthy Pet Food" />
      <h2>Healthy Pet Food</h2>
      <p>Nutritious food options for your pet's well-being.</p>
      <button className="like-btn" onclick="toggleLike(this)">❤️</button>
    </div>
    <div className="card">
      <img src="https://www.thesprucepets.com/thmb/gDbaR8nSBf7cdpUjWIj7rmYVWn4=/1500x1000/filters:fill(auto,1)/GettyImages-992416282-5c296bcdc9e77c00012eb55d.jpg" alt="Pet Training" />
      <h2>Pet Training</h2>
      <p>Expert training sessions for better pet behavior.</p>
      <button className="like-btn" onclick="toggleLike(this)">❤️</button>
    </div>
    <div className="card">
      <img src="https://www.ovrs.com/blog/wp-content/uploads/2020/08/Dog-and-xrayAdobeStock_212562137-1-2000x1333.jpeg" alt="Veterinary Care" />
      <h2>Veterinary Care</h2>
      <p>Reliable veterinary services to keep your pet healthy.</p>
      <button className="like-btn" onclick="toggleLike(this)">❤️</button>
    </div>
    <div className="card">
      <img src="https://www.woofies.com/sub/61805/images/GettyImages-547019638.jpg" alt="Pet Walking" />
      <h2>Pet Walking</h2>
      <p>Daily walks to keep your pet active and happy.</p>
      <button className="like-btn" onclick="toggleLike(this)">❤️</button>
    </div>
    <div className="card">
      <img src="https://tendertouchvet.net/uploads/SiteAssets/0/images/services/pet-boarding-dog-720.jpg" alt="Pet Boarding" />
      <h2>Pet Boarding</h2>
      <p>Safe and comfortable boarding for your pets while you're away.</p>
      <button className="like-btn" onclick="toggleLike(this)">❤️</button>
    </div>
    <div className="card">
      <img src="https://th.bing.com/th/id/OIP.-tkGkajO0vdj_I1lkxwGNAHaHa?rs=1&pid=ImgDetMain" alt="Pet Toys" />
      <h2>Pet Toys</h2>
      <p>Fun and engaging toys to keep your pet entertained.</p>
      <button className="like-btn" onclick="toggleLike(this)">❤️</button>
    </div>
    <div className="card">
      <img src="https://static.vecteezy.com/system/resources/thumbnails/037/375/875/small_2x/ai-generated-love-unleashed-scenes-of-joy-at-pet-adoption-day-free-photo.jpg" alt="Pet Adoption" />
      <h2>Pet Adoption</h2>
      <p>Find a loving home for pets in need.</p>
      <button className="like-btn" onclick="toggleLike(this)">❤️</button>
    </div>
    <div className="card">
      <img src="https://www.petdox.com/wp-content/uploads/sites/177/2023/06/emergency.jpg" alt="Emergency Care" />
      <h2>Emergency Care</h2>
      <p>24/7 emergency care for urgent pet health issues.</p>
      <button className="like-btn" onclick="toggleLike(this)">❤️</button>
    </div>
    <div className="card">
      <img src="https://thedognetworks.files.wordpress.com/2021/01/most-effective-and-reliable-dog-training-tips.jpg" alt="Pet Sitting" />
      <h2>Pet Sitting</h2>
      <p>Reliable pet sitters to care for your pets at home.</p>
      <button className="like-btn" onclick="toggleLike(this)">❤️</button>
    </div>
    <div className="card">
      <img src="https://th.bing.com/th/id/OIP.Yf8QMgQmbBwClsKWwSQu7gAAAA?rs=1&pid=ImgDetMain" alt="Pet Relaxation Therapy" />
      <h2>Pet Relaxation Therapy</h2>
      <p>Calming sessions for anxious pets to feel relaxed and happy.</p>
      <button className="like-btn" onclick="toggleLike(this)">❤️</button>
    </div>
    <div className="card">
      <img src="https://www.gingrapp.com/hubfs/dog%20daycare%20ideas_feature.jpg" alt="Pet Daycare" />
      <h2>Pet Daycare</h2>
      <p>Fun and safe daycare services for your pet while you're away.</p>
      <button className="like-btn" onclick="toggleLike(this)">❤️</button>
    </div>
  </div>
</div>

        </>
    )
}

export default Services;
