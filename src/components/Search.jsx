import { useState } from 'react';
import { useGlobalContext } from '../context';

const Search = () => {
  const { setSearchTerm, fetchRandomMeal } = useGlobalContext();
  const [ text, setText ] = useState("");

  const handleChange = (event) => {
    setText(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    if (text) setSearchTerm(text);
  }

  const handleRandomMeal = () => {
    setText("");
    setSearchTerm("");
    fetchRandomMeal();
  }
  
  return (
    <header className='search-container'>
      <form onSubmit={handleSubmit}>
        <input 
          type='text' 
          value={text}
          placeholder='type your favorite meals' 
          className='form-input'
          onChange={handleChange}
        />
        <button type='submit' className='btn'>Search</button>
        <button 
          type='button' 
          className='btn btn-hipster'
          onClick={handleRandomMeal}
        >
          Surprise Me!
        </button>
      </form>
    </header>
  )
}

export default Search;
