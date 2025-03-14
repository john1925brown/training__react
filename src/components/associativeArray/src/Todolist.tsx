import React, { ChangeEvent, KeyboardEvent, useState } from 'react';
import { FilterValuesType } from './AssotiativeArray';

type TaskType = {
  id: string;
  title: string;
  isDone: boolean;
};

type PropsType = {
  title: string;
  tasks: Array<TaskType>;
  removeTask: (taskId: string, todoListId: string) => void;
  changeFilter: (value: FilterValuesType, todoListId: string) => void;
  addTask: (title: string, todoListId: string) => void;
  changeTaskStatus: (
    taskId: string,
    isDone: boolean,
    todoListId: string
  ) => void;
  filter: FilterValuesType;
  todoListId: string;
};

export function Todolist(props: PropsType) {
  let [title, setTitle] = useState('');
  let [error, setError] = useState<string | null>(null);

  const addTask = () => {
    if (title.trim() !== '') {
      props.addTask(title.trim(), props.todoListId);
      setTitle('');
    } else {
      setError('Title is required');
    }
  };

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.currentTarget.value);
  };

  const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
    setError(null);
    if (e.charCode === 13) {
      addTask();
    }
  };

  const onAllClickHandler = () => props.changeFilter('all', props.todoListId);
  const onActiveClickHandler = () =>
    props.changeFilter('active', props.todoListId);
  const onCompletedClickHandler = () =>
    props.changeFilter('completed', props.todoListId);

  return (
    <div>
      <h3>{props.title}</h3>
      <div>
        <input
          value={title}
          onChange={onChangeHandler}
          onKeyPress={onKeyPressHandler}
          className={error ? 'error' : ''}
        />
        <button onClick={addTask}>+</button>
        {error && <div className="error-message">{error}</div>}
      </div>
      <ul>
        {props.tasks.map((t) => {
          const onClickHandler = () => props.removeTask(t.id, props.todoListId);
          const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
            props.changeTaskStatus(
              t.id,
              e.currentTarget.checked,
              props.todoListId
            );
          };

          return (
            <li key={t.id} className={t.isDone ? 'is-done' : ''}>
              <input
                type="checkbox"
                onChange={onChangeHandler}
                checked={t.isDone}
              />
              <span>{t.title}</span>
              <button onClick={onClickHandler}>x</button>
            </li>
          );
        })}
      </ul>
      <div>
        <button
          className={props.filter === 'all' ? 'active-filter' : ''}
          onClick={onAllClickHandler}
        >
          All
        </button>
        <button
          className={props.filter === 'active' ? 'active-filter' : ''}
          onClick={onActiveClickHandler}
        >
          Active
        </button>
        <button
          className={props.filter === 'completed' ? 'active-filter' : ''}
          onClick={onCompletedClickHandler}
        >
          Completed
        </button>
      </div>
    </div>
  );
}
