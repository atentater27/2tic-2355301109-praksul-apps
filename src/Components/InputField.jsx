export default function InputField({ label, value, setValue }) {
  return (
    <div className="mb-4">
      <label className="block text-white font-medium mb-1">{label}</label>
      <input
        type="number"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="w-full p-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder={`Masukkan ${label.toLowerCase()}`}
      />
    </div>
  );
}
