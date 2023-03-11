import './App.scss';
import Search from './components/Search';
import searchImages from './api';

function App() {
  const handleSubmit = (term) => {
    searchImages(term);
  }

  return (
    <div className="App">
      <Search onSearch={handleSubmit} />
    </div>
  );
}

export default App;
