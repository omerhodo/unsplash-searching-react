import React, { useState } from 'react'
import './search.scss'

const Search = ({ onSearch }) => {
  const [value, setValue] = useState('');

  const handleFormSubmit = (event) => {
    event.preventDefault();
    onSearch(value);
  }

  const handleChange = (e) => {
    setValue(e.target.value)
  }

  return (
    <form onSubmit={handleFormSubmit} className='search-area'>
      <label className='search-area--title'>What are you looking?</label>
      <input className='search-area--input' placeholder="Search" value={value} onChange={handleChange} />
    </form>
  )
}

export default Search