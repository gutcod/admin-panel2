import React from 'react';
import './searchbox.style.css'

export const SearchBox = ({placeholder, handleChange}) => (
    <div>
    <input 
      className= "search"
      type= "search" 
      placeholder= {placeholder} 
      onChange= {handleChange}
      />
    </div>
)