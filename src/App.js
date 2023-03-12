import './App.scss';
import Search from './components/Search';
import searchImages from './api';
import { useState } from 'react';
import ImageList from './components/ImageList';

function App() {
  const [images, setImages] = useState([])
  const handleSubmit = async (term) => {
    const result = await searchImages(term);
    setImages(result)
  }

  return (
    <div className="App">
      <Search onSearch={ handleSubmit } />
      <ImageList imagesPlaceholder={ images } />
    </div>
  );
}

export default App;
