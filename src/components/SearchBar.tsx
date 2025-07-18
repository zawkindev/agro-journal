import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { type ChangeEvent } from 'react';

interface SearchBarProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  placeholder?: string;
}

const SearchBar: React.FC<SearchBarProps> = ({ searchQuery, setSearchQuery, placeholder = "Search..." }) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className="flex items-center bg-white w-full max-w-md p-3 rounded-md focus-within:ring-2 focus-within:ring-crimson transition group">
      <input
        type="text"
        value={searchQuery}
        onChange={handleChange}
        placeholder={placeholder}
        className="w-full h-full bg-white focus:outline-none"
      />
      <FontAwesomeIcon icon={faSearch} className='text-gray-400 group-focus-within:text-crimson' />
    </div>
  );
};

export default SearchBar;
