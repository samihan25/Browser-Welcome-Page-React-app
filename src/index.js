import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import * as serviceWorker from './serviceWorker';

const my_name = "Samihan"
const last_name = "Deshmukh"

var today_date = new Date();
//var today_date = new Date(2020, 7, 18, 7);  //for morning 7:00 AM
//var today_date = new Date(2020, 7, 18, 14);  //for afternoon 2:00 PM
//var today_date = new Date(2020, 7, 18, 21);  //for night 10:00 PM

var greeting = "";
var curr_hours = today_date.getHours();
if (curr_hours >= 1 && curr_hours <= 11){
  greeting = "Good Morning";
} else if (curr_hours >= 12 && curr_hours <= 19){
  greeting = "Good Afternoon";
} else {
  greeting = "Good Night";
}

var weekday = new Array(7);
weekday[0] = "Sunday";
weekday[1] = "Monday";
weekday[2] = "Tuesday";
weekday[3] = "Wednesday";
weekday[4] = "Thursday";
weekday[5] = "Friday";
weekday[6] = "Saturday";

var day_of_week = weekday[today_date.getDay()];

ReactDOM.render(
/*
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
*/

  // The React Way
  <React.Fragment>
    <h1 className="center_text">Hello {my_name}, {greeting} !</h1>
    <div className="time_box"></div>
    
    <h1 className="time_text">{today_date.toLocaleTimeString()}</h1>

    <h1 className="center_text">{day_of_week}</h1>
    <h2 className="center_text">{today_date.toLocaleDateString('en-GB')}</h2>
    <br /><br /><br />
    {/*
    <h2>2 + 3 = {2 + 3}</h2>
    <h2>Random number = {Math.round(Math.random() * 100)}</h2>
    <h2>{`My full name is : ${my_name} ${last_name}`}</h2>
    <h2>{`Today's date is : ${today_date.toLocaleDateString()}`}</h2>
    <h2>{`Current local time is : ${today_date.toLocaleTimeString ()}`}</h2>
    */}

    <h1 className="heading boxed">Notes:</h1>
    <p contenteditable="true" className="center_text">This text is editable. Try to change this text. Click here and type something</p>
    <br /><br /><br /><br /><br /><br /><br /><br />
    {/*}
    <h2 className="heading">Random Image Gallery</h2>
    <br />
    <div className="img_div">
      <img src="https://picsum.photos/200/300" alt="Some random images" />
      <img src="https://picsum.photos/201/301" alt="Some random images" />
      <img src="https://picsum.photos/202/302" alt="Some random images" />
      <img src="https://picsum.photos/203/303" alt="Some random images" />
      <img src="https://picsum.photos/204/304" alt="Some random images" />
    </div>
    <br /><br /><br />
    <div className="img_div">
      <img src="https://picsum.photos/205/305" alt="Some random images" />
      <img src="https://picsum.photos/206/306" alt="Some random images" />
      <img src="https://picsum.photos/207/307" alt="Some random images" />
      <img src="https://picsum.photos/208/308" alt="Some random images" />
      <img src="https://picsum.photos/209/309" alt="Some random images" />
    </div>
    <br /><br /><br />
    {*/}
    <h4 className="center_text">{`${my_name} ${last_name}`}</h4>  
  </React.Fragment>,  // Also known as JSX (javascript extension or javascript XML) using babble
  document.getElementById('root')
  );


  // The Simple Javascrippt way
  /*
  var h2 = document.createElement("h2");
  h2.innerHTML = "Hi World !";
  document.getElementById('root').appendChild(h2);
  */

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
