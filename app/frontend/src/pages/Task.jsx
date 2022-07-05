import { useState, useEffect } from 'react';
import { BoardTask } from '../components/BoardTask';
import { FormTask } from '../components/FormTask';
import {getTasks} from '../services/API/request';

export function Task() {
  const token = localStorage.getItem('token');
  const [taskList, setTaskList] = useState([]);

  useEffect(() => {
    getTasks(token).then(({ data }) => setTaskList(data));
  });

  return(
    <>
      <FormTask token={ token } />
      <BoardTask setTaskList={ setTaskList } taskList={ taskList } />
    </>
  );
}
