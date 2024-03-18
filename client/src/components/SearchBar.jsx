import React, { useState } from 'react';
import { MDBInputGroup, MDBBtn } from 'mdb-react-ui-kit';

export default function SearchBar({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    // Call the parent component's onSearch function with the search term
    onSearch(searchTerm);
  };

  return (
    <MDBInputGroup>
      <input
        type="text"
        placeholder="Enter search term"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <MDBBtn onClick={handleSearch}>Search</MDBBtn>
    </MDBInputGroup>
  );
}
