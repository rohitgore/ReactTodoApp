import './App.css';
import { Routes,Route } from 'react-router-dom';
import Header from './component/Header';
import List from './component/List';
import Addtodo from './component/Addtodo';
import NoMatch from './component/NoMatch';
import React, { Children,createContext, useContext, useState, useSyncExternalStore } from 'react';
import Edittodo from './component/Edittodo';

export const myContext = React.createContext();
function App() {

  const [state, setstate] = useState([]);
  
  return (
    <div classNameName="App">
      <myContext.Provider value={{state,setstate}}>
        <Header></Header>
        <Routes>
          <Route path='/' element={<List value="{List}"/>}></Route>
          <Route path='/add' element={<Addtodo/>}></Route>
          <Route path='/edit/:id' element={<Edittodo/>}></Route>
          <Route path='*' element={<NoMatch/>}></Route>
        </Routes>
        </myContext.Provider>
    </div>
  );
}

export default App;
