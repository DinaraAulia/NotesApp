<<<<<<< HEAD
import React from "react";
import { useLocation, useNavigate, Link } from 'react-router-dom';
import NoteAppHeader from "../components/NoteAppHeader";
import NoteList from "../components/NoteList";
import { getAllNotes, deleteNote, archiveNote, unarchiveNote } from "../utils/local-data";
import { FaPlus } from 'react-icons/fa';

class HomePage extends React.Component {
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
    const note = this.state.notes.find((n) => n.id === id);
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

    const filteredNotes = this.state.notes.filter((note) => note.title.toLowerCase().includes(this.state.keyword.toLowerCase()));
    const activeNotes = filteredNotes.filter((note) => !note.archived);

    return (
      <div className="app-container">
        <NoteAppHeader keyword={keyword} onSearch={onSearch} />
        <main>
          <h2>Catatan Aktif</h2>
          <div className="search-bar">
            <input 
              type="text" 
              placeholder="Cari berdasarkan judul..."
              value={keyword}
              onChange={(e) => onSearch(e.target.value)}
            />
          </div>
          {activeNotes.length > 0 ? (
            <NoteList notes={activeNotes} onDelete={this.onDeleteHandler} onArchive={this.onArchiveHandler} />
          ) : (
            <p className="notes-list-empty">Tidak ada catatan.</p>
          )}
        </main>
        <div className="homepage__action">
          <Link to="/notes/new" className="action">
            <FaPlus />
          </Link>
        </div>
      </div>
    );
  }
}

function HomePageWrapper() {
=======
import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import NoteList from '../components/NoteList';
import { getActiveNotes, deleteNote, archiveNote } from '../utils/network-data';
import { FaPlus } from 'react-icons/fa';
import { useLocale } from '../contexts/LocaleContext';

const HomePage = () => {
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
      activeNotesTitle: 'Catatan Aktif',
      searchPlaceholder: 'Cari berdasarkan judul...',
      emptyNotesMessage: 'Tidak ada catatan.',
      loadingMessage: 'Memuat catatan aktif...',
    },
    en: {
      activeNotesTitle: 'Active Notes',
      searchPlaceholder: 'Search by title...',
      emptyNotesMessage: 'No notes found.',
      loadingMessage: 'Loading active notes...',
    },
  };

  useEffect(() => {
    async function fetchActiveNotes() {
      setLoading(true);
      const { data } = await getActiveNotes();
      setNotes(data);
      setLoading(false);
    }
    fetchActiveNotes();
  }, []);

  const onDeleteHandler = async (id) => {
    await deleteNote(id);
    const { data } = await getActiveNotes();
    setNotes(data);
  };

  const onArchiveHandler = async (id) => {
    await archiveNote(id);
    const { data } = await getActiveNotes();
    setNotes(data);
  };

>>>>>>> 41550f9 (Menambahkan file dari versi lokal-mememperbarui dg menambahkan react hooks)
  const onSearch = (newKeyword) => {
    searchParams.set('keyword', newKeyword);
    navigate(`?${searchParams.toString()}`);
  };

<<<<<<< HEAD
  return <HomePage keyword={keyword} onSearch={onSearch} />;
}

export default HomePageWrapper;
=======
  const filteredNotes = notes.filter((note) =>
    note.title.toLowerCase().includes(keyword.toLowerCase()),
  );

  if (loading) {
    return <p>{localizedText[locale].loadingMessage}</p>;
  }

  return (
    <main>
      <h2>{localizedText[locale].activeNotesTitle}</h2>
      <div className="search-bar">
        <input 
          type="text" 
          placeholder={localizedText[locale].searchPlaceholder}
          value={keyword}
          onChange={(e) => onSearch(e.target.value)}
        />
      </div>
      {filteredNotes.length > 0 ? (
        <NoteList notes={filteredNotes} onDelete={onDeleteHandler} onArchive={onArchiveHandler} />
      ) : (
        <p className="notes-list-empty">{localizedText[locale].emptyNotesMessage}</p>
      )}
      <div className="homepage__action">
        <Link to="/notes/new" className="action">
          <FaPlus />
        </Link>
      </div>
    </main>
  );
};

export default HomePage;
>>>>>>> 41550f9 (Menambahkan file dari versi lokal-mememperbarui dg menambahkan react hooks)
