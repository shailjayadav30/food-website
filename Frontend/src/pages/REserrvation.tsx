import React, { useState } from 'react';

type ReservationType = 'seat' | 'party';

interface ReservationForm {
  name: string;
  email: string;
  date: string;
  time: string;
  guests: number;
  reservationType: ReservationType;
  specialRequest?: string;
}

const ReservationPage: React.FC = () => {
  const [reservation, setReservation] = useState<ReservationForm>({
    name: '',
    email: '',
    date: '',
    time: '',
    guests: 1,
    reservationType: 'seat',
    specialRequest: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setReservation((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Reservation submitted:', reservation);
    alert(`Reservation for ${reservation.name} has been submitted!`);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center py-10 px-4">
      <div className="w-full max-w-lg bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">Restaurant Reservation</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-700">Name</label>
            <input
              type="text"
              name="name"
              value={reservation.name}
              onChange={handleChange}
              className="w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              value={reservation.email}
              onChange={handleChange}
              className="w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700">Date</label>
            <input
              type="date"
              name="date"
              value={reservation.date}
              onChange={handleChange}
              className="w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700">Time</label>
            <input
              type="time"
              name="time"
              value={reservation.time}
              onChange={handleChange}
              className="w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700">Guests</label>
            <input
              type="number"
              name="guests"
              value={reservation.guests}
              onChange={handleChange}
              min="1"
              max="20"
              className="w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700">Reservation Type</label>
            <select
              name="reservationType"
              value={reservation.reservationType}
              onChange={handleChange}
              className="w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
            >
              <option value="seat">Seat Reservation</option>
              <option value="party">Private Party</option>
            </select>
          </div>

          {reservation.reservationType === 'party' && (
            <div>
              <label className="block text-gray-700">Special Request</label>
              <textarea
                name="specialRequest"
                value={reservation.specialRequest}
                onChange={handleChange}
                className="w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
                placeholder="Any special arrangements or requests?"
              />
            </div>
          )}

          <button
            type="submit"
            className="w-full bg-indigo-500 text-white py-2 rounded-md hover:bg-indigo-600 transition duration-200"
          >
            Book Reservation
          </button>
        </form>
      </div>
    </div>
  );
};

export default ReservationPage;
