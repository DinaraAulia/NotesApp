import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getNote, deleteNote, archiveNote, unarchiveNote } from '../utils/local-data';
import { showFormattedDate } from '../utils/index';
import NoteAppHeader from '../components/NoteAppHeader';
import { FaTrash, FaArchive, FaUndo } from 'react-icons/fa';

function NoteDetailPageWrapper() {
  const { id } = useParams();
  const navigate = useNavigate();
  const note = getNote(id);

  if (!note) {
    return (
      <div className="app-container">
        <NoteAppHeader />
        <main>
          <p className="notes-list-empty">Catatan tidak ditemukan!</p>
        </main>
      </div>
    );
  }
  
  const onDeleteHandler = () => {
    deleteNote(id);
    navigate('/');
  };

  const onArchiveHandler = () => {
    if (note.archived) {
      unarchiveNote(id);
    } else {
      archiveNote(id);
    }
    navigate('/');
  };

  return (
    <div className="app-container">
      <NoteAppHeader />
      <main>
        <div className="detail-page">
          <h1 className="detail-page__title">{note.title}</h1>
          <p className="detail-page__createdAt">{showFormattedDate(note.createdAt)}</p>
          <div className="detail-page__body">{note.body}</div>
          <div className="detail-page__action">
            <button className="action" onClick={onDeleteHandler}>
              <FaTrash />
            </button>
            <button className="action" onClick={onArchiveHandler}>
              {note.archived ? <FaUndo /> : <FaArchive />}
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}

export default NoteDetailPageWrapper;