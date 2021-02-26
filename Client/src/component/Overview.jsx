import React, { useState } from 'react';

const Overview = () => {
  const [todos, setTodos] = useState([{ text: 'Learn Hooks' }]);

  return (
    <div>Hello Beautiful World!!!</div>
    <div>It's a Beautiful morning!</div>
  );
};

export default Overview;
