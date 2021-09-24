import React from 'react';
import {useSelector} from 'react-redux'
import Form from './formSimple'

function App() {
  const result = useSelector(state => state.pagina)
  return (
    <div>
      <h5>{result}</h5>
      <h2>
      teste
      </h2>
      <Form />
      </div>
  );
}

export default App;
