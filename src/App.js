//import logo from './logo.svg';
import './App.css';
import React from 'react'

export default function App() {
  
  const [count,setCount] = React.useState(0)

  const onClickPlus = () => {
    setCount(count+1);
  }
  const onClickMinus = () => {
    setCount(count-1);
  }
  return (
    <>
      <div className='main-div'>
        <h2 className="header">
          Счетчик:
        </h2>
        <span className='counter'>
          {count}
          
        </span>

        <div className="btn-div">
          <button onClick={onClickPlus} className='plus'>
            Плюс
          </button>

          <button onClick={onClickMinus} className='minus'>
            Минус
          </button>
        </div>
      </div>

    </>


    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}


