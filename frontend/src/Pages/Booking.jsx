import React, { useState } from "react";

const Booking = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [petType, setPetType] = useState("");
    const [service, setService] = useState("");
    const [notes, setNotes] = useState("");
    const [date, setDate] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        const bookingData = {
            name,
            email,
            phone,
            petType,
            service,
            notes,
            date,
        };

        try {
            const response = await fetch("https://barkyhearts-1.onrender.com/api/bookings", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(bookingData),
            });

            const data = await response.json();

            if (response.ok) {
                setMessage("Booking successful!");
                setName("");
                setEmail("");
                setPhone("");
                setPetType("");
                setService("");
                setNotes("");
                setDate("");
            } else {
                setMessage(data.message || "Booking failed.");
            }
        } catch (error) {
            console.error("Error:", error);
            setMessage("Something went wrong. Try again later.");
        }
    };

    const inputStyle = {
        padding: "10px",
        border: "1px solid #ccc",
        borderRadius: "8px",
        fontSize: "16px",
        outline: "none",
        transition: "border-color 0.3s ease",
    };

    return (
        <div
            style={{
                minHeight: "110vh",
                backgroundImage: "url('https://kajabi-storefronts-production.kajabi-cdn.com/kajabi-storefronts-production/sites/146070/images/h97FwZ8GR9e2ynC3AoEU_file.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                padding: "40px",
            }}
        >
            <div
                style={{
                    maxWidth: "570px",
                    width: "100%",
                    padding: "30px",
                    backgroundColor: "white",
                    borderRadius: "12px",
                    boxShadow: "0 6px 10px rgba(0, 0, 0, 0.3)",
                }}
            >
                <h1
                    style={{
                        fontSize: "32px",
                        fontWeight: "bold",
                        textAlign: "center",
                        marginBottom: "20px",
                        color: "#333",
                    }}
                >
                    Book Now
                </h1>
                <form
                    onSubmit={handleSubmit}
                    style={{ display: "flex", flexDirection: "column", gap: "15px" }}
                >
                    <input type="text" placeholder="Your Name" value={name} onChange={(e) => setName(e.target.value)} style={inputStyle} required />
                    <input type="email" placeholder="Email Address" value={email} onChange={(e) => setEmail(e.target.value)} style={inputStyle} required />
                    <input type="tel" placeholder="Phone Number" value={phone} onChange={(e) => setPhone(e.target.value)} style={inputStyle} required />
                    <input type="text" placeholder="Pet Type (e.g. Dog, Cat)" value={petType} onChange={(e) => setPetType(e.target.value)} style={inputStyle} required />
                    <input type="text" placeholder="Service (e.g. Grooming, Check-up)" value={service} onChange={(e) => setService(e.target.value)} style={inputStyle} required />
                    <textarea placeholder="Additional Notes" value={notes} onChange={(e) => setNotes(e.target.value)} rows="3" style={{ ...inputStyle, resize: "vertical" }} />
                    <input type="date" value={date} onChange={(e) => setDate(e.target.value)} style={inputStyle} required />
                    <button
                        type="submit"
                        style={{
                            padding: "12px",
                            backgroundColor: "#4c4c4c",
                            color: "white",
                            fontSize: "16px",
                            border: "none",
                            borderRadius: "8px",
                            cursor: "pointer",
                            transition: "background-color 0.3s ease",
                        }}
                        onMouseOver={(e) => (e.target.style.backgroundColor = "#800000")}
                        onMouseOut={(e) => (e.target.style.backgroundColor = "#262626")}
                    >
                        Submit Booking
                    </button>
                </form>
                {message && (
                    <p style={{ marginTop: "20px", textAlign: "center", color: "#007b00", fontWeight: "bold" }}>
                        {message}
                    </p>
                )}
            </div>
        </div>
    );
};

export default Booking;
