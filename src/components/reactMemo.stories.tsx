import { memo, useState } from 'react';

export default {
  title: 'ReactMemo demo',
};

const NewMessagesCounter = (props: { count: number }) => {
  return <div>{props.count}</div>;
};

const UsersSecret = (props: { users: string[] }) => {
  console.log('user render');
  return (
    <div>
      {props.users.map((u, i) => {
        return <div key={i}>{u}</div>;
      })}
    </div>
  );
};

const Users = memo(UsersSecret);

export const Example1 = () => {
  const [count, setCount] = useState(0);
  const [users, setUsers] = useState(['a', 'b']);

  const addUser = () => {
    setUsers([...users, `c ${new Date().getTime()}`]);
  };

  return (
    <>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        +
      </button>
      <button onClick={addUser}>add user</button>
      <NewMessagesCounter count={count} />
      <Users users={users} />
    </>
  );
};
