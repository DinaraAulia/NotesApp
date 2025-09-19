<<<<<<< HEAD
import React from 'react';
import { useNavigate } from 'react-router-dom';
import NoteAppHeader from '../components/NoteAppHeader';
import { addNote } from '../utils/local-data';
import { FaCheck } from 'react-icons/fa';

class AddNotePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      body: '',
      charLimit: 50,
    };
    this.onTitleChange = this.onTitleChange.bind(this);
    this.onBodyChange = this.onBodyChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onTitleChange(event) {
    if (event.target.value.length <= this.state.charLimit) {
      this.setState({
        title: event.target.value,
      });
    }
  }

  onBodyChange(event) {
    this.setState({
      body: event.target.value,
    });
  }

  onSubmit(event) {
    event.preventDefault();
    if (this.state.title.trim() && this.state.body.trim()) {
      addNote({
        title: this.state.title,
        body: this.state.body,
      });
      this.props.navigate('/');
    }
  }

  render() {
    return (
      <div className="app-container">
        <NoteAppHeader />
        <main>
          <div className="add-new-page">
            <form onSubmit={this.onSubmit} className="add-new-page__input">
              <p className="note-input__title__char-limit">Sisa karakter: {this.state.charLimit - this.state.title.length}</p>
              <input
                className="add-new-page__input__title"
                type="text"
                placeholder="Judul Catatan"
                value={this.state.title}
                onChange={this.onTitleChange}
                required
              />
              <textarea
                className="add-new-page__input__body"
                type="text"
                placeholder="Tuliskan catatanmu di sini..."
                value={this.state.body}
                onChange={this.onBodyChange}
                required
              />
              <div className="add-new-page__action">
                <button type="submit" className="action">
                  <FaCheck />
                </button>
              </div>
            </form>
          </div>
        </main>
      </div>
    );
  }
}

function AddNotePageWrapper() {
  const navigate = useNavigate();
  return <AddNotePage navigate={navigate} />;
}

export default AddNotePageWrapper;
=======
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { addNote } from '../utils/network-data';
import { FaCheck } from 'react-icons/fa';
import useInput from '../hooks/useInput';
import { useLocale } from '../contexts/LocaleContext';

const AddNotePage = () => {
  const navigate = useNavigate();
  const [title, onTitleChange] = useInput('');
  const [body, onBodyChange] = useInput('');
  const [charLimit] = useState(50);
  const { locale } = useLocale();

  const localizedText = {
    id: {
      pageTitle: 'Tambahkan Catatan Baru',
      charRemaining: 'Sisa karakter:',
      titlePlaceholder: 'Judul Catatan',
      bodyPlaceholder: 'Tuliskan catatanmu di sini...',
    },
    en: {
      pageTitle: 'Add New Note',
      charRemaining: 'Characters remaining:',
      titlePlaceholder: 'Note Title',
      bodyPlaceholder: 'Write your note here...',
    },
  };

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    const { error } = await addNote({ title, body });
    if (!error) {
      navigate('/');
    }
  };

  const onTitleChangeHandler = (event) => {
    if (event.target.value.length <= charLimit) {
      onTitleChange(event);
    }
  };

  return (
    <div className="add-new-page">
      <h2>{localizedText[locale].pageTitle}</h2>
      <form onSubmit={onSubmitHandler} className="add-new-page__input">
        <p className="note-input__title__char-limit">
          {localizedText[locale].charRemaining} {charLimit - title.length}
        </p>
        <input
          className="add-new-page__input__title"
          type="text"
          placeholder={localizedText[locale].titlePlaceholder}
          value={title}
          onChange={onTitleChangeHandler}
          required
        />
        <textarea
          className="add-new-page__input__body"
          placeholder={localizedText[locale].bodyPlaceholder}
          value={body}
          onChange={onBodyChange}
          required
        />
        <div className="add-new-page__action">
          <button type="submit" className="action">
            <FaCheck />
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddNotePage;
>>>>>>> 41550f9 (Menambahkan file dari versi lokal-mememperbarui dg menambahkan react hooks)
