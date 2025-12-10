import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

export default function EnergyChart({ energyTrend }) {
  return (
    <div className="bg-white rounded-xl shadow-lg p-4">
      <h2 className="text-lg font-semibold mb-4">Energy Consumption (kWh)</h2>

      <ResponsiveContainer width="100%" height={250}>
        <LineChart data={energyTrend}>
          <XAxis dataKey="hour" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="kwh" stroke="#6366f1" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
