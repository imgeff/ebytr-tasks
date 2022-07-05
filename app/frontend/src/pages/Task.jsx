import { useState, useEffect } from 'react';
import { BoardTask } from '../components/BoardTask';
import { FormTask } from '../components/FormTask';
import {getTasks} from '../services/API/request';

const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjU2OTk0MTM0LCJleHAiOjE2NTcwMDQ5MzR9.juum5qlIkhIk_LcIRLZMDF56RV-t1rv1wy0NEBVFmyE';

export function Task() {
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
