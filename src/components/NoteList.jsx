import React from 'react';
import PropTypes from 'prop-types';
import NoteItem from './NoteItem';
import { Link } from 'react-router-dom';

<<<<<<< HEAD
function NoteList({ notes, onDelete, onArchive }) {
=======
const NoteList = ({ notes, onDelete, onArchive }) => {
>>>>>>> 41550f9 (Menambahkan file dari versi lokal-mememperbarui dg menambahkan react hooks)
  if (notes.length === 0) {
    return (
      <div className="notes-list-empty">
        <p>Tidak ada catatan</p>
      </div>
    );
  }
  return (
    <div className="notes-list">
      {notes.map((note) => (
        <Link to={`/notes/${note.id}`} key={note.id} style={{ textDecoration: 'none', color: 'inherit' }}>
          <NoteItem {...note} onDelete={onDelete} onArchive={onArchive} />
        </Link>
      ))}
    </div>
  );
<<<<<<< HEAD
}
=======
};
>>>>>>> 41550f9 (Menambahkan file dari versi lokal-mememperbarui dg menambahkan react hooks)

NoteList.propTypes = {
  notes: PropTypes.arrayOf(PropTypes.object).isRequired,
  onDelete: PropTypes.func.isRequired,
  onArchive: PropTypes.func.isRequired,
};

export default NoteList;