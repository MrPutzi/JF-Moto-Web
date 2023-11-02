import React, { useState } from 'react'
import PropTypes from 'prop-types'

const Reserve = props => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [date, setDate] = useState('')
    const [time, setTime] = useState('')
    const [carModel, setCarModel] = useState('')
    const [reservation, setReservation] = useState(null)

    const handleSubmit = e => {
        e.preventDefault()
        // validate input fields
        if (name && email && phone && date && time && carModel) {
            // save reservation details to database or file
            const reservationDetails = {
                name,
                email,
                phone,
                date,
                time,
                carModel
            }
            setReservation(reservationDetails)
            // display confirmation message to user
            alert('Your reservation has been received!')
        } else {
            alert('Please fill in all the required fields.')
        }
    }

    const handleViewReservation = e => {
        e.preventDefault()
        // allow user to view their reservation details
        // by entering their email and phone number
        // on a separate page
        // TODO: implement view reservation page
    }

    return (
        <div>
            <h1>Reserve a Test Drive</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" value={name} onChange={e => setName(e.target.value)} required />

                <label htmlFor="email">Email:</label>
                <input type="email" id="email" value={email} onChange={e => setEmail(e.target.value)} required />

                <label htmlFor="phone">Phone:</label>
                <input type="tel" id="phone" value={phone} onChange={e => setPhone(e.target.value)} required />

                <label htmlFor="date">Preferred Date:</label>
                <input type="date" id="date" value={date} onChange={e => setDate(e.target.value)} required />

                <label htmlFor="time">Preferred Time:</label>
                <input type="time" id="time" value={time} onChange={e => setTime(e.target.value)} required />

                <label htmlFor="carModel">Car Model:</label>
                <select id="carModel" value={carModel} onChange={e => setCarModel(e.target.value)} required>
                    <option value="">-- Select a car model --</option>
                    <option value="Model S">Model S</option>
                    <option value="Model 3">Model 3</option>
                    <option value="Model X">Model X</option>
                    <option value="Model Y">Model Y</option>
                </select>

                <button type="submit">Submit</button>
            </form>

            {reservation && (
                <div>
                    <h2>Reservation Details</h2>
                    <p>Name: {reservation.name}</p>
                    <p>Email: {reservation.email}</p>
                    <p>Phone: {reservation.phone}</p>
                    <p>Date: {reservation.date}</p>
                    <p>Time: {reservation.time}</p>
                    <p>Car Model: {reservation.carModel}</p>
                    <button onClick={handleViewReservation}>View Reservation</button>
                </div>
            )}
        </div>
    );
}

Reserve.propTypes = {
    // TODO: add prop types

        name: PropTypes.string.isRequired,
        email: PropTypes.string.isRequired,
        phone: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
        time: PropTypes.string.isRequired,
        carModel: PropTypes.string.isRequired,
    };

export default Reserve
