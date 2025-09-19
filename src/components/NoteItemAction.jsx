<<<<<<< HEAD
import React from "react";
import PropTypes from 'prop-types';

function NoteItemAction({ id, onDelete, onArchive, archived }) {
  return (
    <div className="note-item__action">
      <button className="note-item__delete-button" type="button" onClick={() => onDelete(id)}>Delete</button>
      <button className="note-item__archive-button" type="button" onClick={() => onArchive(id)}>{archived ? "Unarchive" : "Archive"}</button>
    </div>
  );
}
=======
import React from 'react';
import PropTypes from 'prop-types';

const NoteItemAction = ({ id, onDelete, onArchive, archived }) => {
  return (
    <div className="note-item__action">
      <button className="note-item__delete-button" type="button" onClick={() => onDelete(id)}>Delete</button>
      <button className="note-item__archive-button" type="button" onClick={() => onArchive(id)}>{archived ? 'Unarchive' : 'Archive'}</button>
    </div>
  );
};
>>>>>>> 41550f9 (Menambahkan file dari versi lokal-mememperbarui dg menambahkan react hooks)

NoteItemAction.propTypes = {
  id: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
  onArchive: PropTypes.func.isRequired,
  archived: PropTypes.bool.isRequired,
<<<<<<< HEAD
}
=======
};
>>>>>>> 41550f9 (Menambahkan file dari versi lokal-mememperbarui dg menambahkan react hooks)

export default NoteItemAction;