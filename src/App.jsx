import './index.css';
import Navbar from './components/Navbar';
import Building3D from './components/Building3D';
import EnergyChart from './components/EnergyChart';
import SummaryCards from './components/SummaryCards';
import RoomsTable from './components/RoomsTable';
import data from './data/building.json';

function App() {
  return (
    <main className="p-8 space-y-8 bg-gray-50 min-h-screen max-w-7xl mx-auto">
      <Navbar buildingName={data.building} />
      <SummaryCards summary={data.summary} />
      <EnergyChart energyTrend={data.energyTrend} />
      <RoomsTable rooms={data.rooms} />
      <section className="bg-white rounded-xl shadow-lg border border-gray-100 p-4">
        <h3 className="text-lg font-semibold mb-2">3D Building View</h3>
        <p className="text-sm text-gray-500 mb-4">Interactive visualization of the building</p>

        <Building3D />
      </section>
    </main>
  );
}

export default App;
