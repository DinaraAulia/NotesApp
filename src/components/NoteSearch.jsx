import React from 'react';
import PropTypes from 'prop-types';

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

NoteSearch.propTypes = {
  onSearch: PropTypes.func.isRequired,
  keyword: PropTypes.string.isRequired,
}

export default NoteSearch;