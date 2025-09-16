import React from "react";
import PropTypes from 'prop-types';

class NoteInput extends React.Component {
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
      this.setState(() => ({
        title: event.target.value,
      }));
    }
  }

  onBodyChange(event) {
    this.setState(() => ({
      body: event.target.value,
    }));
  }

  onSubmit(event) {
    event.preventDefault();
    if (this.state.title.trim() && this.state.body.trim()) {
      this.props.addNote({
        title: this.state.title,
        body: this.state.body,
      });
      this.setState(() => ({
        title: '',
        body: '',
      }));
    }
  }

  render() {
    return (
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
      </form>
    );
  }
}

NoteInput.propTypes = {
  addNote: PropTypes.func.isRequired,
};

export default NoteInput;