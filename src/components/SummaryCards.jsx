import { Bolt, Thermometer, Wind } from 'lucide-react';

export default function SummaryCards({ summary }) {
  const safe = summary ?? {
    energyTodayKwh: 0,
    avgTemperature: 0,
    avgCO2: 0,
  };

  const items = [
    {
      key: 'energy',
      label: 'Total Energy Today',
      value: `${safe.energyTodayKwh} kWh`,
      icon: <Bolt className="w-5 h-5 text-indigo-600" />,
    },
    {
      key: 'temp',
      label: 'Average Temperature',
      value: `${safe.avgTemperature} °C`,
      icon: <Thermometer className="w-5 h-5 text-orange-500" />,
    },
    {
      key: 'co2',
      label: 'Average CO₂',
      value: `${safe.avgCO2} ppm`,
      icon: <Wind className="w-5 h-5 text-emerald-600" />,
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {items.map((item) => (
        <div key={item.key} className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 hover:shadow-md transition">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-gray-50 rounded-lg">{item.icon}</div>
            <p className="text-sm text-gray-600">{item.label}</p>
          </div>

          <p className="text-3xl font-semibold text-gray-900 mt-4">{item.value}</p>
        </div>
      ))}
    </div>
  );
}
