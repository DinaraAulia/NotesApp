import React from 'react';
import { showFormattedDate } from '../utils';
import PropTypes from 'prop-types';

<<<<<<< HEAD
function NoteItemBody({ title, createdAt, body }) {
=======
const NoteItemBody = ({ title, createdAt, body }) => {
>>>>>>> 41550f9 (Menambahkan file dari versi lokal-mememperbarui dg menambahkan react hooks)
  return (
    <div className="note-item__content">
      <h2 className="note-item__title">{title}</h2>
      <p className="note-item__date">{showFormattedDate(createdAt)}</p>
      <p className="note-item__body">{body}</p>
    </div>
  );
<<<<<<< HEAD
}
=======
};
>>>>>>> 41550f9 (Menambahkan file dari versi lokal-mememperbarui dg menambahkan react hooks)

NoteItemBody.propTypes = {
  title: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
<<<<<<< HEAD
}
=======
};
>>>>>>> 41550f9 (Menambahkan file dari versi lokal-mememperbarui dg menambahkan react hooks)

export default NoteItemBody;