<<<<<<< HEAD
import React from "react";
import PropTypes from 'prop-types';
import { showFormattedDate } from '../utils/index';

function NoteItem({ title, createdAt, body }){
=======
import React from 'react';
import PropTypes from 'prop-types';
import { showFormattedDate } from '../utils/network-data'; 

const NoteItem = ({ title, createdAt, body }) => {
>>>>>>> 41550f9 (Menambahkan file dari versi lokal-mememperbarui dg menambahkan react hooks)
  return (
    <div className="note-item">
      <div className="note-item__content">
        <h2 className="note-item__title">{title}</h2>
        <p className="note-item__createdAt">{showFormattedDate(createdAt)}</p>
        <p className="note-item__body">{body}</p>
      </div>
    </div>
  );
<<<<<<< HEAD
}
=======
};
>>>>>>> 41550f9 (Menambahkan file dari versi lokal-mememperbarui dg menambahkan react hooks)

NoteItem.propTypes = {
  title: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
};

export default NoteItem;