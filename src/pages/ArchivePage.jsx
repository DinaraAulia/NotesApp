import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import NoteAppHeader from '../components/NoteAppHeader';
import NoteList from '../components/NoteList';
import { getAllNotes, deleteNote, archiveNote, unarchiveNote } from '../utils/local-data';

class ArchivePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: getAllNotes(),
      keyword: this.props.keyword,
    };
    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onArchiveHandler = this.onArchiveHandler.bind(this);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.keyword !== this.props.keyword) {
      this.setState({ keyword: this.props.keyword });
    }
  }

  onDeleteHandler(id) {
    deleteNote(id);
    this.setState({ notes: getAllNotes() });
  }

  onArchiveHandler(id) {
    const note = this.state.notes.find(n => n.id === id);
    if (note.archived) {
      unarchiveNote(id);
    } else {
      archiveNote(id);
    }
    this.setState({ notes: getAllNotes() });
  }

  render() {
    const { keyword } = this.state;
    const { onSearch } = this.props;

    const filteredNotes = this.state.notes.filter((note) =>
      note.title.toLowerCase().includes(keyword.toLowerCase())
    );
    const archivedNotes = filteredNotes.filter((note) => note.archived);

    return (
      <div className="app-container">
        <NoteAppHeader keyword={keyword} onSearch={onSearch} />
        <main>
          <h2>Catatan Arsip</h2>
          <div className="search-bar">
            <input 
              type="text" 
              placeholder="Cari berdasarkan judul..."
              value={keyword}
              onChange={(e) => onSearch(e.target.value)}
            />
          </div>
          {archivedNotes.length > 0 ? (
            <NoteList notes={archivedNotes} onDelete={this.onDeleteHandler} onArchive={this.onArchiveHandler} />
          ) : (
            <p className="notes-list-empty">Tidak ada catatan yang diarsipkan.</p>
          )}
        </main>
      </div>
    );
  }
}

function ArchivePageWrapper() {
  const location = useLocation();
  const navigate = useNavigate();
  const searchParams = new URLSearchParams(location.search);
  const keyword = searchParams.get('keyword') || '';

  const onSearch = (newKeyword) => {
    searchParams.set('keyword', newKeyword);
    navigate(`?${searchParams.toString()}`);
  };

  return <ArchivePage keyword={keyword} onSearch={onSearch} />;
}

export default ArchivePageWrapper;