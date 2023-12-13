import React from 'react';

function App() {
  const handleClick = () => {
    alert('Button clicked!'); // You can customize the alert message
  };

  return (
    <>
      <h1>Welcome to React</h1>
      <p>Hello, I am [Jade Quintero]. I love working with React!</p>
      <button onClick={handleClick}>Click me</button>
    </>
  );
}

export default App;
