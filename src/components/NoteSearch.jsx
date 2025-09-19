import React from 'react';
import PropTypes from 'prop-types';
<<<<<<< HEAD

class NoteSearch extends React.Component {
  constructor(props) {
    super(props);

    this.onSearchChange = this.onSearchChange.bind(this);
  }

  onSearchChange(event) {
    this.props.onSearch(event.target.value);
  }

  render() {
    return (
      <div className="note-search">
        <input
          type="text"
          placeholder="Cari catatan..."
          value={this.props.keyword}
          onChange={this.onSearchChange}
        />
      </div>
    );
  }
}
=======
import useInput from '../hooks/useInput';

const NoteSearch = ({ keyword, onSearch }) => {
  const [searchKeyword, onSearchChange] = useInput(keyword);
  
  React.useEffect(() => {
    onSearch(searchKeyword);
  }, [searchKeyword, onSearch]);

  return (
    <div className="note-search">
      <input
        type="text"
        placeholder="Cari catatan..."
        value={searchKeyword}
        onChange={onSearchChange}
      />
    </div>
  );
};
>>>>>>> 41550f9 (Menambahkan file dari versi lokal-mememperbarui dg menambahkan react hooks)

NoteSearch.propTypes = {
  onSearch: PropTypes.func.isRequired,
  keyword: PropTypes.string.isRequired,
<<<<<<< HEAD
}
=======
};
>>>>>>> 41550f9 (Menambahkan file dari versi lokal-mememperbarui dg menambahkan react hooks)

export default NoteSearch;