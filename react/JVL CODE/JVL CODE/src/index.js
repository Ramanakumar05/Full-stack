import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';


import Garage from './Props/Garage';


// props in class
import InclassCar from './Props/InclassCar';
// useState
import FromStateComponent from './State/FromStateComponent';
import Exusestate from './State/Exusestate';

//Conditional rendering
import Interface from './Conditional Render/Interface';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App/>



    {/* garage used in props it as car comp */}
    <Garage/>



    {/* props in class componet */}
    {/* <InclassCar/>
    <Exusestate/>  */}


    {/* conditional rendering */}
    <Interface/>


    {/* from state */}
    <FromStateComponent/>
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
