import PropTypes from 'prop-types';
import './style.css';

export function BoardTask({ taskList }) {
  const pendingTasks = taskList.filter((task) => task['status.name'] === 'pendente');
  const inProgressTasks = taskList.filter((task) => task['status.name'] === 'em andamento');
  const readyTasks = taskList.filter((task) => task['status.name'] === 'pronto');
  return (
    <div id="board-tasks">
      <div id="board-tasks-header">
        <h2>Pendente</h2>
        <h2>Em andamento</h2>
        <h2>Pronto</h2>
      </div>
      <div id="board-tasks-body">
        <div className="board-content">
          { pendingTasks.map(({task}) => {
            return (
              <div className="board-card" key={ task } >
                <p>{ task }</p>
              </div>
            );
          })}
        </div>
        <div className="board-content">
        { inProgressTasks.map(({task}) => {
            return (
              <div className="board-card" key={ task } >
                <p>{ task }</p>
              </div>
            );
          })}
        </div>
        <div className="board-content">
        { readyTasks.map(({task}) => {
            return (
              <div className="board-card" key={ task } >
                <p>{ task }</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

BoardTask.propTypes = {
  taskList: PropTypes.arrayOf(PropTypes.object).isRequired,
};
