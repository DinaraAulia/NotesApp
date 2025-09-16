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