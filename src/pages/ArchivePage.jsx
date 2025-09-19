<<<<<<< HEAD
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
=======
import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import NoteList from '../components/NoteList';
import { getArchivedNotes, deleteNote, unarchiveNote } from '../utils/network-data';
import { useLocale } from '../contexts/LocaleContext';

const ArchivePage = () => {
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);
>>>>>>> 41550f9 (Menambahkan file dari versi lokal-mememperbarui dg menambahkan react hooks)
  const location = useLocation();
  const navigate = useNavigate();
  const searchParams = new URLSearchParams(location.search);
  const keyword = searchParams.get('keyword') || '';
<<<<<<< HEAD
=======
  const { locale } = useLocale();

  const localizedText = {
    id: {
      archiveTitle: 'Catatan Arsip',
      searchPlaceholder: 'Cari berdasarkan judul...',
      emptyArchiveMessage: 'Tidak ada catatan yang diarsipkan.',
      loadingMessage: 'Memuat catatan arsip...',
    },
    en: {
      archiveTitle: 'Archived Notes',
      searchPlaceholder: 'Search by title...',
      emptyArchiveMessage: 'No archived notes found.',
      loadingMessage: 'Loading archived notes...',
    },
  };

  useEffect(() => {
    async function fetchArchivedNotes() {
      setLoading(true);
      const { data } = await getArchivedNotes();
      setNotes(data);
      setLoading(false);
    }
    fetchArchivedNotes();
  }, []);

  const onDeleteHandler = async (id) => {
    await deleteNote(id);
    const { data } = await getArchivedNotes();
    setNotes(data);
  };

  const onUnarchiveHandler = async (id) => {
    await unarchiveNote(id);
    const { data } = await getArchivedNotes();
    setNotes(data);
  };
>>>>>>> 41550f9 (Menambahkan file dari versi lokal-mememperbarui dg menambahkan react hooks)

  const onSearch = (newKeyword) => {
    searchParams.set('keyword', newKeyword);
    navigate(`?${searchParams.toString()}`);
  };

<<<<<<< HEAD
  return <ArchivePage keyword={keyword} onSearch={onSearch} />;
}

export default ArchivePageWrapper;
=======
  const filteredNotes = notes.filter((note) =>
    note.title.toLowerCase().includes(keyword.toLowerCase()),
  );

  if (loading) {
    return <p>{localizedText[locale].loadingMessage}</p>;
  }

  return (
    <main>
      <h2>{localizedText[locale].archiveTitle}</h2>
      <div className="search-bar">
        <input 
          type="text" 
          placeholder={localizedText[locale].searchPlaceholder}
          value={keyword}
          onChange={(e) => onSearch(e.target.value)}
        />
      </div>
      {filteredNotes.length > 0 ? (
        <NoteList notes={filteredNotes} onDelete={onDeleteHandler} onArchive={onUnarchiveHandler} />
      ) : (
        <p className="notes-list-empty">{localizedText[locale].emptyArchiveMessage}</p>
      )}
    </main>
  );
};

export default ArchivePage;
>>>>>>> 41550f9 (Menambahkan file dari versi lokal-mememperbarui dg menambahkan react hooks)
