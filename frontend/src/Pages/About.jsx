import React from 'react';
import { Link } from 'react-router-dom';
import './About.css'

const About = () => {
  return (
    <>
      <div>
        <section className="about-section">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <img src="https://149554379.v2.pressablecdn.com/wp-content/uploads/2022/08/Z5.jpg" alt="Pet Care" className="about-image img-fluid" />
              </div>
              <div className="col-lg-6">
                <h2 className="about-heading">Welcome to Barky Hearts</h2>
                <p className="about-content">
                  At Barky hearts, we are passionate about the well-being of your furry, feathered, and scaly friends. With
                  years of experience in veterinary services and grooming, we aim to provide exceptional care tailored to each
                  pet's unique needs.
                </p>
                <p className="about-content">
                  Our team consists of compassionate vets, expert groomers, and animal lovers who treat every pet as part of
                  our family. From wellness check-ups to stylish grooming, we ensure your pets are healthy, happy, and looking
                  their best!
                </p>
                <p className="about-content">
                  Join us on this journey of love and care for your adorable companions. Together, let's make their lives as
                  joyful as they make ours.
                </p>
                <Link to="/Contact" className="btn btn-danger About_Contact">Contact Us</Link>
              </div>
            </div>
          </div>
        </section>
        <section className="why-choose-us">
          <h2 className="title_ChooseUs">Why Choose Us?</h2>
          <div className="cards-container1">
            {/* Card 1 */}
            <div className="card-1">
              <h3>Complete Care for Your Furry Friends</h3>
              <p>We provide a wide range of veterinary and grooming services under one roof, ensuring your pet’s health and
                well-being are always our top priority. From routine check-ups to emergency care and grooming, we have you
                covered!</p>
            </div>
            {/* Card 2 */}
            <div className="card-1">
              <h3>Experienced Veterinary Professionals</h3>
              <p>Our skilled veterinarians and groomers are passionate about animals and dedicated to delivering the highest
                level of care with a gentle touch. We treat your pets like family!</p>
            </div>
            {/* Card 3 */}
            <div className="card-1">
              <h3>Cutting-Edge Equipment &amp; Facilities</h3>
              <p>We use the latest medical technology and grooming equipment to provide your pet with the best possible care.
                Our modern facilities are designed to make both you and your pet feel comfortable and at ease.</p>
            </div>
            {/* Card 4 */}
            <div className="card-1">
              <h3>Personalized Care Plans for Your Pet</h3>
              <p>Every pet is unique! We offer tailored wellness and grooming plans to meet the individual needs of your pet.
                From nutritional advice to grooming schedules, we create a plan that’s just right for them.</p>
            </div>
            {/* Card 5 */}
            <div className="card-1">
              <h3>Hassle-Free Appointments</h3>
              <p>We understand your busy life, so we offer flexible scheduling and easy online appointment booking. Your pet’s
                health and grooming are just a click away!</p>
            </div>
            {/* Card 6 */}
            <div className="card-1">
              <h3>Stress-Free Vet Visits</h3>
              <p>We believe in a calm, fear-free experience for your pet. Our team uses gentle, non-invasive techniques to
                ensure that your pet feels safe and comfortable during their visit.</p>
            </div>
            {/* Card 7 */}
            <div className="card-1">
              <h3>Honest, Affordable Care</h3>
              <p>We provide high-quality care at prices you can trust. Our transparent pricing and no-surprise policies ensure
                that you always know what to expect. No hidden fees, just excellent care.</p>
            </div>
            {/* Card 8 */}
            <div className="card-1">
              <h3>Here When You Need Us Most</h3>
              <p>Accidents and illnesses happen unexpectedly. We offer emergency veterinary care, so your pet can receive
                urgent treatment whenever it’s needed, day or night.</p>
            </div>
          </div>
        </section>
      </div>

    </>
  )
}

export default About
