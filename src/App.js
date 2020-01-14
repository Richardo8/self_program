import React from 'react';
import logo from './logo.svg';
import './App.css';
import { add, multiply } from 'components/add'
import isArray from 'lodash/isArray'
import { Modal, PageHeader } from 'antd'

function App() {
    console.log(add(1,2))
    console.log(isArray([1]))
    console.log(multiply(1,3))
  return (

    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
    {/*<Button>test</Button>*/}
    <Modal>test</Modal>
        <PageHeader>2</PageHeader>

    </header>
    </div>
  );
}

export default App;
