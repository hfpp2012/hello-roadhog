import React from 'react';
import axios from 'axios';

import './Example.scss';

// import './Example.css';
//
// import styles from './Example.css';

const Example = () => {
  return (
    <div>
      <h1>hello</h1>
      <h1>blue hello</h1>
      Example
      <button onClick={ () => axios.get('/api/users') }>send ajax</button>
    </div>
  );
};

Example.propTypes = {
};

export default Example;
