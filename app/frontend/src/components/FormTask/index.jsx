import { useState, useEffect } from 'react';
import { getStatus } from '../../services/API/request';
import './style.css';

const defaultStatus = { id: 0, name: 'Qual é o status da tarefa?' };

export function FormTask() {
  const [task, setTask] = useState('');
  const [statusSelected, setStatusSelected] = useState(defaultStatus);
  const [statusList, setStatusList] = useState([]);

  useEffect(() => {
    getStatus()
    .then(({ data }) => setStatusList(data));
  }, []);

  const changeTask = ({ target: { value }}) => setTask(value);

  const changeStatus = ({ target: { value }}) => {
    const status = statusList.find((status) => status.name === value);
    setStatusSelected(status);
  };

  const createTask = (event) => {
    event.preventDefault();
    const { id: statusId } = statusSelected;
    const newTask = { userId: 1, statusId, task };
    // enviar para a API e armazenar localmente
    setTask('');
    setStatusSelected(defaultStatus);
  };

  return(
    <form id="task-form" onSubmit={ createTask }>
      <div id="task-form-content">
        <label className="task-label" htmlFor="task-input">
          <span className="daisy-label-text">Tarefa</span>
          <input
            id="task-input"
            type="text"
            name="task"
            placeholder="Sua nova tarefa aqui..."
            onChange={ changeTask }
            value={ task }
            spellCheck="false"
            className="input"
          />
        </label>
        <label className="task-label">
          <span className="daisy-label-text">Status</span>
          <select
            className="daisy-select daisy-select-bordered"
            name='status'
            value={ statusSelected.name }
            onChange={ changeStatus }
          >
            <option disabled selected>Qual é o status da tarefa?</option>
            {statusList.map(({ name }) => <option key={ name }>{ name }</option>)}
          </select>
        </label>
        <button type="submit" className="daisy-btn daisy-btn-info">Adicionar</button>
      </div>
    </form>
  );
}


