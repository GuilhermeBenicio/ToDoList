import React from 'react';
import editar from './assets/editar.svg';
import './App.css';

const EditarTarefa = ({
  id,
  setEditar,
  setEditingTaskId,
  nomeTarefa,
  setTaskEdited,
}) => {
  function handleclick(id) {
    setEditar(true);
    setEditingTaskId(id);
    setTaskEdited(nomeTarefa);
  }
  return (
    <button className="editar">
      <img src={editar} alt="Editar" onClick={() => handleclick(id)} />
    </button>
  );
};

export default EditarTarefa;
