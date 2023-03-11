import React from 'react'
import './search.scss'

const Search = ({ onSearch }) => {
  const handleFormSubmit = (event) => {
    event.preventDefault();
    onSearch('car');
  }
  return (
    <form onSubmit={handleFormSubmit} className='search-area'>
      <label className='search-area--title'>What are you looking?</label>
      <input className='search-area--input' placeholder="Search" />
    </form>
  )
}

export default Search