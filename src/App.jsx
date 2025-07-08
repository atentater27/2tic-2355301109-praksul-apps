import React, { useState } from 'react';
import { Triangle } from 'lucide-react'; // pastikan sudah install lucide-react

const App = () => {
  const [alas, setAlas] = useState('');
  const [tinggi, setTinggi] = useState('');
  const [hasil, setHasil] = useState(null);

  const hitungLuas = () => {
    if (alas && tinggi) {
      const luas = 0.5 * parseFloat(alas) * parseFloat(tinggi);
      setHasil(luas.toFixed(2));
    } else {
      setHasil(null);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-white to-purple-100 flex items-center justify-center p-4">
      <div className="bg-white/80 backdrop-blur-md shadow-xl rounded-2xl p-8 w-full max-w-md border border-blue-200">
        <div className="flex items-center justify-center gap-2 mb-6">
          <Triangle className="text-blue-500 w-8 h-8" />
          <h1 className="text-3xl font-extrabold text-blue-700 drop-shadow-md">
            Kalkulator Luas Segitiga
          </h1>
        </div>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Alas</label>
            <input
              type="number"
              value={alas}
              onChange={(e) => setAlas(e.target.value)}
              placeholder="Masukkan alas"
              className="w-full px-4 py-2 border border-blue-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Tinggi</label>
            <input
              type="number"
              value={tinggi}
              onChange={(e) => setTinggi(e.target.value)}
              placeholder="Masukkan tinggi"
              className="w-full px-4 py-2 border border-blue-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-400 transition"
            />
          </div>

          <button
            onClick={hitungLuas}
            className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-bold py-2 px-4 rounded-xl shadow-lg transform hover:scale-105 transition duration-200"
          >
            Hitung
          </button>
        </div>

        <div className="mt-6">
          <h2 className="text-xl font-semibold text-gray-800">Hasil:</h2>
          <p className="text-gray-600 italic mt-1">
            {hasil !== null
              ? `Luas segitiga adalah ${hasil}`
              : 'Silakan isi alas & tinggi lalu tekan "Hitung"'}
          </p>
        </div>
      </div>
    </div>
  );
};

export default App;
