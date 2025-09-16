import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function NoteAppHeader({ keyword, onSearch }) {
  return (
    <header>
      <h1>Aplikasi Catatan</h1>
      <div className="navigation">
        <ul>
          <li><Link to="/">Beranda</Link></li>
          <li><Link to="/archives">Arsip</Link></li>
        </ul>
      </div>
    </header>
  );
}

NoteAppHeader.propTypes = {
  keyword: PropTypes.string.isRequired,
  onSearch: PropTypes.func.isRequired,
};

export default NoteAppHeader;