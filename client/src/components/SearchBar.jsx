import React, { useState } from 'react';
import { MDBInputGroup, MDBBtn } from 'mdb-react-ui-kit';
import { useRouter } from 'next/router';

export default function SearchBar({ onSearch }) {
  const router = useRouter(); // Initialize the router
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    // Call the parent component's onSearch function with the search term
    onSearch(searchTerm);
    router.push('/search')
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
