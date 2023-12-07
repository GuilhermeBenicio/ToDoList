import React from 'react';
import deletar from './assets/delete.svg';

const DeletarTarefa = ({ listaTarefas, setListaTarefas, id }) => {
  function handleclick(id) {
    const novaListaTarefas = listaTarefas.filter(
      (tasks) => tasks.id !== id && tasks,
    );

    setListaTarefas(novaListaTarefas);
    window.localStorage.setItem(
      'listaTarefas',
      JSON.stringify(novaListaTarefas),
    );
  }
  return (
    <button className="deletar" onClick={() => handleclick(id)}>
      <img src={deletar} alt="Deletar" />
    </button>
  );
};

export default DeletarTarefa;
