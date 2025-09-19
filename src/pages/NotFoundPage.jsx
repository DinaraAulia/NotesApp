import React from 'react';
import { Link } from 'react-router-dom';
<<<<<<< HEAD

function NotFoundPage() {
  return (
    <div className="not-found-page">
      <h1>404 - Halaman Tidak Ditemukan</h1>
      <p>Maaf, halaman yang Anda cari tidak ada.</p>
      <Link to="/">
        Kembali ke halaman utama
      </Link>
    </div>
  );
}
=======
import { useLocale } from '../contexts/LocaleContext';

const NotFoundPage = () => {
  const { locale } = useLocale();

  const localizedText = {
    id: {
      title: '404 - Halaman Tidak Ditemukan',
      message: 'Maaf, halaman yang Anda cari tidak ada.',
      linkText: 'Kembali ke halaman utama',
    },
    en: {
      title: '404 - Page Not Found',
      message: 'Sorry, the page you are looking for does not exist.',
      linkText: 'Back to home page',
    },
  };

  return (
    <div className="not-found-page">
      <h1>{localizedText[locale].title}</h1>
      <p>{localizedText[locale].message}</p>
      <Link to="/">
        {localizedText[locale].linkText}
      </Link>
    </div>
  );
};
>>>>>>> 41550f9 (Menambahkan file dari versi lokal-mememperbarui dg menambahkan react hooks)

export default NotFoundPage;