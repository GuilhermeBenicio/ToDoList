import React from 'react';
import styles from './ListaTarefas.module.css';
import DeletarTarefa from './DeletarTarefa';
import EditarTarefa from './EditarTarefa';
import BtnEditarTarefa from './BtnEditarTarefa';

const ListaTarefas = ({ listaTarefas, setListaTarefas }) => {
  const [editar, setEditar] = React.useState(false);
  const [editingTaskId, setEditingTaskId] = React.useState('');
  const [taskEdited, setTaskEdited] = React.useState('');

  const storage = window.localStorage.getItem('listaTarefas');

  React.useEffect(() => {
    if (storage) {
      setListaTarefas(JSON.parse(storage));
    }
  }, []);

  function handlechecked(id) {
    const novaListaTarefas = listaTarefas.map((tasks) =>
      tasks.id === id ? { ...tasks, concluida: !tasks.concluida } : tasks,
    );

    setListaTarefas(novaListaTarefas);

    window.localStorage.setItem(
      'listaTarefas',
      JSON.stringify(novaListaTarefas),
    );
  }

  function handlechange(event) {
    setTaskEdited(event.target.value);
  }

  return (
    <div>
      {listaTarefas &&
        listaTarefas.map(({ nomeTarefa, id, concluida }, index) => (
          <div className={styles.tarefas} key={index}>
            {editar && editingTaskId === id ? (
              <div className={styles.edittask}>
                <textarea
                  className={styles.textarea}
                  value={taskEdited}
                  onChange={handlechange}
                ></textarea>
                <BtnEditarTarefa
                  listaTarefas={listaTarefas}
                  taskEdited={taskEdited}
                  setListaTarefas={setListaTarefas}
                  id={id}
                  setEditar={setEditar}
                />
              </div>
            ) : (
              <>
                <div className={styles.tarefa}>
                  <input
                    type="checkbox"
                    checked={concluida}
                    name="tarefas"
                    onChange={() => handlechecked(id)}
                  />
                  <span className={concluida ? 'concluida' : ''}>
                    {nomeTarefa}
                  </span>
                </div>
                <div className={styles.btn}>
                  <EditarTarefa
                    listaTarefas={listaTarefas}
                    setListaTarefas={setListaTarefas}
                    id={id}
                    setEditar={setEditar}
                    setEditingTaskId={setEditingTaskId}
                    nomeTarefa={nomeTarefa}
                    setTaskEdited={setTaskEdited}
                  />
                  <DeletarTarefa
                    listaTarefas={listaTarefas}
                    setListaTarefas={setListaTarefas}
                    id={id}
                  />
                </div>
              </>
            )}
          </div>
        ))}
    </div>
  );
};

export default ListaTarefas;
