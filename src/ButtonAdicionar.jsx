import React from 'react';
import styles from './ButtonAdicionar.module.css';

const ButtonAdicionar = ({ listaTarefas, setListaTarefas, tarefa }) => {
  const [idContador, setIdContador] = React.useState(() => {
    const savedIdContador = localStorage.getItem('idContador');
    return savedIdContador ? parseInt(savedIdContador, 10) : 0;
  });

  React.useEffect(() => {
    localStorage.setItem('idContador', idContador.toString());
  }, [idContador]);

  function handleClick() {
    setListaTarefas((prevListaTarefas) => {
      const novaListaTarefas = [
        ...prevListaTarefas,
        {
          id: idContador,
          nomeTarefa: tarefa,
          concluida: false,
        },
      ];

      window.localStorage.setItem(
        'listaTarefas',
        JSON.stringify(novaListaTarefas),
      );

      return novaListaTarefas;
    });

    setIdContador(idContador + 1);
  }

  return (
    <button className={styles.button} onClick={handleClick}>
      Adicionar
    </button>
  );
};

export default ButtonAdicionar;
