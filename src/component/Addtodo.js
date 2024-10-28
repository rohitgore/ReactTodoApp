import React, { useContext, useState } from 'react';
import { myContext } from '../App';
import { useNavigate } from 'react-router-dom';


function Addtodo() {
  const navigate = useNavigate();
  const {state,setstate} = useContext(myContext)
  const [todoName, settodoName] = useState('');

  const addHandler = () =>{
    setstate([...state,todoName]);
    navigate('/');
    settodoName('');
  }

  return (
    <div className='card' style={{ width: '18rem', margin: 'auto'}}>
      <div className='card-header'>
        <h4>Add ToDo</h4>
      </div>
      <div className='card-body'>
        <div className='row'>
          <input type='text' placeholder='Add todo name' onChange={(e)=>{settodoName(e.target.value)}}/>
        </div>
      </div>
      <div className='card-footer'>
        <button className='btn btn-success' onClick={addHandler}>Add</button>
        <button className='btn btn-secondary ml-2'>Back</button>
      </div>   
    </div>
  );
}

export default Addtodo;
