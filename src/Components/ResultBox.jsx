export default function ResultBox({ luas }) {
  return (
    <div className="mt-6 p-4 bg-white/10 text-white rounded-lg border border-white/20">
      <h2 className="font-semibold text-lg mb-2">Hasil:</h2>
      {luas === null ? (
        <p className="italic text-sm">Silakan isi alas & tinggi lalu tekan "Hitung"</p>
      ) : (
        <p className="text-xl font-bold text-green-300">
          Luas Segitiga adalah {luas}
        </p>
      )}
    </div>
  );
}
