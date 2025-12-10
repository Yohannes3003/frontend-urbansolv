import { useState } from 'react';
import StatusBadge from './StatusBadge';

export default function RoomsTable({ rooms }) {
  const [selectedFloor, setSelectedFloor] = useState('All');

  const filteredRooms = selectedFloor === 'All' ? rooms : rooms.filter((room) => room.floor === Number(selectedFloor));

  return (
    <div className="bg-white rounded-xl shadow-lg p-4">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold">Rooms Monitoring</h2>

        <div className="relative">
          <select
            value={selectedFloor}
            onChange={(e) => setSelectedFloor(e.target.value)}
            className="appearance-none bg-white border border-gray-300 text-gray-700 py-2 pl-3 pr-10 rounded-lg shadow-sm text-sm
                 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
          >
            <option value="All">All Floors</option>
            <option value="1">Floor 1</option>
            <option value="2">Floor 2</option>
          </select>

          {/* Custom dropdown icon */}
          <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-gray-400">
            <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
      </div>

      <table className="w-full text-sm">
        <thead className="text-gray-500 border-t">
          <tr>
            <th className="py-2 text-left">Room Name</th>
            <th className="py-2 text-left">Floor</th>
            <th className="py-2 text-left">Temperature</th>
            <th className="py-2 text-left">CO₂</th>
            <th className="py-2 text-left">Status</th>
          </tr>
        </thead>

        <tbody>
          {filteredRooms.map((room) => (
            <tr key={room.id} className="border-t ">
              <td className="py-2">{room.name}</td>
              <td className="py-2">{room.floor}</td>
              <td className="py-2">{room.temperature} °C</td>
              <td className="py-2">{room.co2} ppm</td>
              <td className="py-2">
                <StatusBadge status={room.status} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
