import { useState } from 'react';
import './Search.css';
import useDebounce from '../../hooks/useDebounce';

function Search({ updateSearchTerm }) {
  const deBouncedCallback = useDebounce((e) => updateSearchTerm(e.target.value));

  return (
    <div className="search-wrapper">
      <input
        type="text"
        id="pokemon-name-search"
        placeholder="Search Pokémon by name..."
        onChange={deBouncedCallback}
        aria-label="Search Pokémon by name" // Accessibility label
        className="search-input"
      />
    </div>
  );
}

export default Search;
