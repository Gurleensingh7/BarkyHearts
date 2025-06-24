import React from 'react';
import { Link } from 'react-router-dom';
import './Veterinarian.css';

const Veterinarian = () => {
    return (
        <>
            <div className="container">
                <h1 className="titleofveterinarian">Welcome to Barky Hearts - Your Trusted Veterinarian for Pet Care</h1>
                <div className="slideshow-container">
                    <div className="slides">
                        <img src="https://octanecdn.com/forevervetscom/Forever-Vets-Animal-Hospital_Top-Tips-for-Taking-Care-of-Your-New-Pet_IMAGE1.jpeg" alt="Pet Care" />
                        <img src="https://panaceahq.com/wp-content/uploads/2022/01/vet-and-dog5-1.jpg" alt="Veterinary Services" />
                        <img src="https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/HB4AT3D3IMI6TMPTWIZ74WAR54.jpg" alt="Happy Pets" />
                        <img src="https://www.accounting-connections.com/wp-content/uploads/2020/05/iStock-854129862-1.jpg" alt="Pet Treatment" />
                        <img src="https://insights.workwave.com/wp-content/uploads/2023/03/pretty-westhighland-terrier-puppy-and-hands-with-groomer-tools-isolated-on-white.jpg_s1024x1024wisk20cde9rkIMhmG7MHJTO3fMOhYThJrnc2-Qf65sZhcOQIzs.jpg" alt="Pet Grooming" />
                        <img src="https://octanecdn.com/forevervetscom/Forever-Vets-Animal-Hospital_Top-Tips-for-Taking-Care-of-Your-New-Pet_IMAGE1.jpeg" alt="Pet Care" />
                    </div>
                </div>
                <h2 className="our-services">Our Services:</h2>
                <div className="Vservices">
                    <div className="Card">
                        <img src="https://cdn.shopify.com/s/files/1/0840/6049/files/0003_Clomicalm_For_Dogs__What_Should_I_Know.jpg?v=1677267798" alt="Wellness Exams" />
                        <h3>Wellness Exams &amp; Preventative Care</h3>
                        <p>Regular check-ups to keep your pet healthy and Happy.
                            We provide complete health assessments, vaccinations, and parasite control.
                            Early disease detection ensures a longer, healthier life for your pet.</p>
                    </div>
                    <div className="Card">
                        <img src="https://media.istockphoto.com/photos/dog-vaccination-picture-id182713334?k=6&m=182713334&s=612x612&w=0&h=m65uukOtYgWFTAtIZdArcU1Khyibnr5VfoUV9XdG-Sc=" alt="Vaccinations" />
                        <h3>Vaccinations</h3>
                        <p>Protect your pet from common diseases with our expert vaccination plans.
                            Customized vaccination schedules based on your pet’s needs.
                            Comprehensive consultation before administering vaccines.
                            Safe, pain-free procedures to minimize pet anxiety.
                            Long-term health benefits with routine booster shots.</p>
                    </div>
                    <div className="Card">
                        <img src="https://seniortailwaggers.com/wp-content/uploads/teeth-cleaning-s_1655866657-678x381.jpg" alt="Dental Care" />
                        <h3>Dental Care</h3>
                        <p>Maintain your pet’s oral health with professional cleanings and treatments.
                            We offer dental exams, scaling, and extractions.
                            Prevent bad breath, gum disease, and tooth loss with routine dental care.
                            Advanced dental procedures to address oral health concerns.
                            Specialized treatments for plaque and tartar control.</p>
                    </div>
                </div>
                <h2 className="meet-professionals">Meet Our Professionals</h2>
                <div className="professionals">
                    <div className="Card">
                        <img src="https://th.bing.com/th/id/OIP.TyacMdkJZmaA3p9btptQ8wHaIA?rs=1&pid=ImgDetMain" alt="Dr. Smith" />
                        <h3>Dr. John Smith</h3>
                        <p>Expert in pet surgery and emergency care.</p>
                        <p>Over 15 years of experience in veterinary medicine.</p>
                    </div>
                    <div className="Card">
                        <img src="https://th.bing.com/th/id/OIP.vDPWWwHDDaJisB8hT5ccNAHaIM?w=566&h=626&rs=1&pid=ImgDetMain" alt="Dr. Jane Doe" />
                        <h3>Dr. Jane Doe</h3>
                        <p>Specialist in nutrition and preventative medicine.</p>
                        <p>Passionate about improving pets' quality of life.</p>
                    </div>
                    <div className="Card">
                        <img src="https://www.theacademyofpetcareers.com/wp-content/uploads/2022/03/How-Long-Does-it-Take-to-Become-a-Dog-Groomer.png" alt="Dr. Emily White" />
                        <h3>Dr. Emily White</h3>
                        <p>Dedicated to grooming and pet wellness.</p>
                        <p>Over 10 years of experience in animal care.</p>
                        <p>Specialist in dermatological and coat health treatments.</p>
                        <p>Certified in handling anxious and senior pets with care.</p>
                    </div>
                    <div className="Card">
                        <img src="https://img.freepik.com/premium-photo/indian-veterinarian-male-doctor-with-dog-inside-clinic-with-happy-expression_466689-95911.jpg" alt="Dr. Mark Green" />
                        <h3>Dr. Mark Green</h3>
                        <p>Experienced in exotic pet care and rehabilitation.</p>
                        <p>Over 10 years of experience in animal care.</p>
                        <p>Specialist in dermatological and coat health treatments.</p>
                    </div>
                    <div className="Card">
                        <img src="https://th.bing.com/th/id/OIP.WZuFeD-_Btx-rRmknaI_9AHaHa?rs=1&pid=ImgDetMain" alt="Dr. Lisa Brown" />
                        <h3>Dr. Lisa Brown</h3>
                        <p>Expert in dermatology and allergy treatment for pets.
                            Over 10 years of experience in animal care.</p>
                    </div>
                    <div className="Card">
                        <img src="https://www.businessinsider.in/photo/72175646/doctor-mike-went-viral-on-instagram-for-being-attractive-now-hes-focused-on-building-his-youtube-business-and-moving-beyond-the-superficial-.jpg" alt="Dr. Robert Black" />
                        <h3>Dr. Robert Black</h3>
                        <p>Specialist in orthopedic surgery and rehabilitation.</p>
                        <p>Over 10 years of experience in animal care.</p>
                    </div>
                </div>
                <p className="contact">Book an Appointment Today. Contact us at +91-123-456-7890 or visit us at 123 Pet Street,
                    Animal City.
                    We look forward to meeting you and your beloved pet!</p>
                <h2 className="Appointment">Book an Appointment</h2>
                <div className="contact">
                    <p>We are here to help your pets stay healthy and happy.</p>
                    <p>📞 Call us: +91-123-456-7890</p>
                    <p>📍 Visit us: 123 Pet Street, Animal City</p>
                    <p>📅 Schedule your appointment Now</p>
                    <Link to="/Booking">  <button className="button-booknow" onclick="alert('Appointment booked successfully!')">Book Now</button></Link>
                </div>
            </div>

        </>
    )
}
export default Veterinarian;