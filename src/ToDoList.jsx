import React from 'react';
import styles from './ToDoList.module.css';
import imagemListaTarefas from './assets/imagemlistatarefas.jpg';
import ListaTarefas from './ListaTarefas';
import ButtonAdicionar from './ButtonAdicionar';

const ToDoList = () => {
  const [listaTarefas, setListaTarefas] = React.useState([]);
  const [tarefa, setTarefa] = React.useState('');
  const tarefasConcluidas = listaTarefas.filter((tesk) => tesk.concluida);

  function handleSubmit(event) {
    event.preventDefault();
    setTarefa('');
  }

  function handleChange(event) {
    setTarefa(event.target.value);
  }

  return (
    <div className={styles.container}>
      <div>
        <img src={imagemListaTarefas} alt="Lista de Tarefas" />
      </div>
      <div className={styles.containerList}>
        <form className={styles.inputTarefa} onSubmit={handleSubmit}>
          <input
            className={styles.input}
            type="text"
            value={tarefa}
            onChange={handleChange}
            placeholder="Escreva aqui sua tarefa..."
          />
          <ButtonAdicionar
            listaTarefas={listaTarefas}
            setListaTarefas={setListaTarefas}
            tarefa={tarefa}
          />
        </form>
        <div className={styles.informacoestarefas}>
          <span className={styles.tarefascriadas}>
            Tarefas criadas:{' '}
            <span className={styles.numerotarefa}>{listaTarefas.length}</span>
          </span>
          <span className={styles.tarefascriadas}>
            Tarefas concluidas:{' '}
            <span className={styles.numerotarefa}>
              {tarefasConcluidas ? tarefasConcluidas.length : 0} de{' '}
              {listaTarefas.length}
            </span>
          </span>
        </div>
        <ListaTarefas
          listaTarefas={listaTarefas}
          setListaTarefas={setListaTarefas}
        />
      </div>
    </div>
  );
};

export default ToDoList;
