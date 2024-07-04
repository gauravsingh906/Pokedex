import { useState } from 'react';
import './Search.css';
import useDebounce from '../../hooks/useDebounce';
function Search({updateSearchTerm}){
  const deBouncedCallback=useDebounce((e)=>updateSearchTerm(e.target.value))
  return (
    <div className="search-wrapper">
    <input type="text" id="pokemon-name-search" placeholder="pokemon name...."

    onChange={deBouncedCallback }/>
    {/*  onChange={(e)=>deBouncedCallback(e, 123)}/> */}
    
    </div>
  )
}
export default Search;