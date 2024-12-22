import React, { useState } from 'react';
import './App.css';
import { Todolist } from './Todolist';
import { v1 } from 'uuid';

export type FilterValuesType = 'all' | 'active' | 'completed';
type todolistsType = {
  id: string;
  title: string;
  filter: FilterValuesType;
};

function AssotiativeArray() {
  let todolistID1 = v1();
  let todolistID2 = v1();

  let [todolists, setTodolists] = useState<Array<todolistsType>>([
    { id: todolistID1, title: 'What to learn', filter: 'all' },
    { id: todolistID2, title: 'What to buy', filter: 'all' },
  ]);

  let [tasks, setTasks] = useState({
    [todolistID1]: [
      { id: v1(), title: 'HTML&CSS', isDone: true },
      { id: v1(), title: 'JS', isDone: true },
      { id: v1(), title: 'ReactJS', isDone: false },
      { id: v1(), title: 'Rest API', isDone: false },
      { id: v1(), title: 'GraphQL', isDone: false },
    ],
    [todolistID2]: [
      { id: v1(), title: 'HTML&CSS2', isDone: true },
      { id: v1(), title: 'JS2', isDone: true },
      { id: v1(), title: 'ReactJS2', isDone: false },
      { id: v1(), title: 'Rest API2', isDone: false },
      { id: v1(), title: 'GraphQL2', isDone: false },
    ],
  });

  function removeTask(id: string, todoListId: string) {
    let filteredTasks = tasks[todoListId].filter((t) => t.id != id);
    tasks[todoListId] = filteredTasks;
    setTasks({ ...tasks });
  }

  function addTask(title: string, todoListId: string) {
    let task = { id: v1(), title: title, isDone: false };
    const newTasks = [task, ...tasks[todoListId]];
    tasks[todoListId] = newTasks;
    setTasks({ ...tasks });
  }

  function changeStatus(taskId: string, isDone: boolean, todoListId: string) {
    let task = tasks[todoListId].find((t) => t.id === taskId);
    if (task) {
      task.isDone = isDone;
      setTasks({ ...tasks });
    }
  }

  function changeFilter(value: FilterValuesType, todoListId: string) {
    const currentTodoList = todolists.find((todo) => todo.id === todoListId);
    if (currentTodoList) {
      currentTodoList.filter = value;
      setTodolists([...todolists]);
    }
  }

  return (
    <div className="App">
      {todolists.map((todo) => {
        let tasksForTodolist = tasks[todo.id];

        if (todo.filter === 'active') {
          tasksForTodolist = tasks[todo.id].filter((t) => t.isDone === false);
        }
        if (todo.filter === 'completed') {
          tasksForTodolist = tasks[todo.id].filter((t) => t.isDone === true);
        }
        return (
          <Todolist
            key={todo.id}
            title={todo.title}
            tasks={tasksForTodolist}
            removeTask={removeTask}
            changeFilter={changeFilter}
            addTask={addTask}
            changeTaskStatus={changeStatus}
            filter={todo.filter}
            todoListId={todo.id}
          />
        );
      })}
    </div>
  );
}

export default AssotiativeArray;
