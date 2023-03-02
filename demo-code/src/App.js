import React from 'react';

function App() {

  return (
    <div className='layout'>
      <h1>Count provider</h1>
      <h2>The count is: 0</h2>
      <button
        onClick={'increment'}
        className='btn btn-primary'
      >
        count++
      </button>
      <button
        onClick={'decrement'}
        className='btn btn-primary'
      >
        count--
      </button>
    </div>
  );
}

export { App };
