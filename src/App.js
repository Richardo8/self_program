import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
// import { add, multiply } from 'components/add'
import { Apple, Person } from 'components/components'
import isArray from 'lodash/isArray'
import { Button } from 'antd'
// import ContentComponent from "components/ContentComponents/ContentComponent";

const appleModel = new Apple({
  model: 'IphoneX'
})

console.log(appleModel.getModel())

function App() {
  // let ContentComponent
  const [ content, setContent ] = useState('')
  const [ content1, setContent1 ] = useState('')

  async function handleClick(){
    // const {add, multiply} = await import(/*webpackChunkName: "add" */ 'components/add')
    let { ContentComponent } = await import(/*webpackChunkName: "content" */ 'components/ContentComponents/ContentComponent')
    let { AnotherContent } = await import(/*webpackChunkName: "content2" */ 'components/AnotherContent/AnotherContent')
    setContent(ContentComponent)
    setContent1(AnotherContent)
    // console.log(add(1,2))
    // console.log(isArray([1]))
    // console.log(multiply(1,3))
    console.log(ContentComponent)
  }


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
          <Button onClick={handleClick}>test</Button>
        {
          content
        }
        {
          content1
        }

    </header>
    </div>
  );
}

export default App;
