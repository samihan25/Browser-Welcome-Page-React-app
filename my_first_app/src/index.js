import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const my_name = "Samihan"
const last_name = "Deshmukh"

var today_date = new Date();

ReactDOM.render(
/*
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
*/

  // The React Way
  <React.Fragment>
    <h1>Hello {my_name} !</h1>
    <h2>2 + 3 = {2 + 3}</h2>
    <h2>Random number = {Math.round(Math.random() * 100)}</h2>
    <h2>{`My full name is : ${my_name} ${last_name}`}</h2>
    <h2>{`Today's date is : ${today_date.toLocaleDateString()}`}</h2>
    <h2>{`Current local time is : ${today_date.toLocaleTimeString ()}`}</h2>
    <h1>Notes:</h1>
    <p contenteditable="true">This text is editable. Try to change this text. Click here and type something</p>
    <h2 className="heading">Random Image Gallery</h2>
    <div className="img_div">
      <img src="https://picsum.photos/200/300" alt="Some random images" />
      <img src="https://picsum.photos/201/301" alt="Some random images" />
      <img src="https://picsum.photos/202/302" alt="Some random images" />
      <img src="https://picsum.photos/203/303" alt="Some random images" />
      <img src="https://picsum.photos/204/304" alt="Some random images" />
    </div>
  </React.Fragment>,  // Also known as JSX (javascript extension or javascript XML) using babble
  document.getElementById('root')
  );

  // The Simple Javascrippt way
  var h2 = document.createElement("h2");
  h2.innerHTML = "Hi World !";
  document.getElementById('root').appendChild(h2);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
