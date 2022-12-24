import React, { useState } from "react";
import "./App.css";
import Satellite from "./Pages/Satellite";
import store from "./redux/Store";
import { Provider } from "react-redux";
const App = () => {
  const [satellite, setS_page] = useState(false);
  const Toggle = ()=>{
    setS_page(!satellite);
  }
  return (
    <>
     <div className="toggletab">
        <div className="tabstyle" onClick={Toggle} style={{borderBottom:satellite?"1px solid brown":""}}>Satellite</div>
       <div className="tabstyle" onClick={Toggle} style={{borderBottom:satellite==false?"1px solid brown":""}}>History</div> 
      </div> 
      <Provider store={store}>
        {satellite? <Satellite type="satellite"/>:<Satellite type="history"/>}
      </Provider>
    </>
  );
};

export default App;
