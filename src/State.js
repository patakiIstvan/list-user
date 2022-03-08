import React, { useState } from "react";

export default ({ children }) => {
  const [users, setUsers] = useState({});
  const addUser = (user, id) => {
    id = id || new Date().getTime();
    const newUsers = { ...users };
    newUsers[id] = { ...user, id };
    setUsers(newUsers);
    return id;
  };

  const removeUser = (id) => {
    const newUsers = { ...users };
    delete newUsers[id];
    setUsers(newUsers);
  };

  const updateUser = (id, user) => {
    const newUsers = { ...users };
    newUsers[id] = { ...(newUsers[id] || {}), ...user };
    setUsers(newUsers);
  };
  return React.Children.map(children, (child) => {
    return (
      <child.type
        {...child.props}
        users={Object.values(users)}
        addUser={addUser}
        removeUser={removeUser}
        updateUser={updateUser}
      />
    );
  });
};
