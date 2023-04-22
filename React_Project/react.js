import React, { useState } from 'react';

function App() {
  return (
    <div>
      <Header title="My Website" />
      <Content />
    </div>
  );
}

function Header(props) {
  return <h1>{props.title}</h1>;
}

function Content() {
  const [text, setText] = useState('Click the button to change this text.');

  function handleClick() {
    setText('You clicked the button!');
  }

  return (
    <div>
      <p>{text}</p>
      <button onClick={handleClick}>Click me!</button>
    </div>
  );
}

export default App;
