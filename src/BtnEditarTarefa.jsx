import React from 'react';
import styles from './BtnEditarTarefa.module.css';

const BtnEditarTarefa = ({
  listaTarefas,
  setListaTarefas,
  taskEdited,
  id,
  setEditar,
}) => {
  function handleclick() {
    const novaListaTarefas = listaTarefas.map((tasks) =>
      tasks.id === id ? { ...tasks, nomeTarefa: taskEdited } : tasks,
    );

    setListaTarefas(novaListaTarefas);
    setEditar(false);

    window.localStorage.setItem(
      'listaTarefas',
      JSON.stringify(novaListaTarefas),
    );
  }
  return (
    <button className={styles.btnEditar} onClick={() => handleclick(id)}>
      Editar
    </button>
  );
};

export default BtnEditarTarefa;
