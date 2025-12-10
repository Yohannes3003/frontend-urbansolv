export default function Navbar({ buildingName }) {
  return (
    <header className="bg-gray-200 text-black px-6 py-4">
      <h1 className="text-xl font-semibold">Urbansolv Smart Building Dashboard</h1>
      <p className="text-sm opacity-80">{buildingName}</p>
    </header>
  );
}
