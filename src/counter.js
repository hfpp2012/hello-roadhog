import React from 'react';
import ReactDom from 'react-dom';

const Counter = (props) => {
  return (
    <div>Hi, Counter</div>
  )
}

ReactDom.render(<Counter />, document.getElementById('root'));
