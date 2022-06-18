import React from 'react';
import { TodoContext } from '../TodoContext';
import './TodoSearch.css';

function TodoSearch() {
  const {searchValue, setSearchValue} = React.useContext(TodoContext);
  const onSearchValueChange = (e) => {
    setSearchValue(e.target.value)
  };
  return (
    <React.StrictMode>
      <label className="searchLabel">
        Buscador de tareas:
      </label>
      <input
        placeholder = "Ingresa acá el nombre de la tarea a buscar"
        className = "TodoSearch"
        value = {searchValue}
        onChange = {onSearchValueChange}
      />
    </React.StrictMode>
  );
}
export { TodoSearch };