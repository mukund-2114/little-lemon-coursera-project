import React, { useState } from "react";

const BookingForm = (props) => {
  const [occasion, setOccasion] = useState("");
  const [guests, setGuests] = useState(1);
  const [date, setDate] = useState("");
  const [times, setTimes] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    props.submitForm({ date, time: times, guests, occasion });
  };

  const handleDateChange = (value) => {
    setDate(value);
    props.dispatch(value);
  };

  return (
    <section className="form-section">
      <header>
        <h2>Reserve Your Table</h2>
        <p>
          Select a date, time, and party size to secure a memorable dining
          experience at Little Lemon.
        </p>
      </header>
      <form onSubmit={handleSubmit}>
        <fieldset className="formField">
          <div>
            <label htmlFor="book-date">Choose Date</label>
            <input
              id="book-date"
              value={date}
              onChange={(e) => handleDateChange(e.target.value)}
              type="date"
              required
            />
          </div>
          <div>
            <label htmlFor="book-time">Choose Time</label>
            <select
              id="book-time"
              value={times}
              onChange={(e) => setTimes(e.target.value)}
              required
            >
              <option value="">Select a Time</option>
              {props.availableTimes.availableTimes.map((availableTime) => (
                <option key={availableTime} value={availableTime}>
                  {availableTime}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="book-guests">Guests</label>
            <input
              id="book-guests"
              min="1"
              max="10"
              value={guests}
              onChange={(e) => setGuests(e.target.value)}
              type="number"
              placeholder="2"
              required
            />
          </div>
          <div>
            <label htmlFor="book-occasion">Occasion</label>
            <select
              id="book-occasion"
              value={occasion}
              onChange={(e) => setOccasion(e.target.value)}
              required
            >
              <option value="">Select an Option</option>
              <option value="Birthday">Birthday</option>
              <option value="Anniversary">Anniversary</option>
              <option value="Business Meeting">Business Meeting</option>
            </select>
          </div>
          <div className="btnReceive">
            <input
              aria-label="Submit reservation"
              type="submit"
              value="Make Your Reservation"
            />
          </div>
        </fieldset>
      </form>
    </section>
  );
};

export default BookingForm;
