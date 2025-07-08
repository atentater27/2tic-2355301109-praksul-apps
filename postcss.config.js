import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';

export default {
  plugins: [
    tailwindcss(),   // ← HARUS ada tanda ()
    autoprefixer(),  // ← HARUS juga pakai ()
  ],
}
