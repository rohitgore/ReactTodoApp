import React, { useContext,useEffect, useState } from 'react';
import { myContext } from '../App';
import { useNavigate, useNavigation, useParams } from 'react-router-dom';


function Edittodo() {
    const navigate = useNavigate();
    const {state,setstate} = useContext(myContext);
    const {id} = useParams();
    const [name, setname] = useState(state[id]);

    useEffect(() => {
      console.log(state);
      console.log(id);
    });

    const editHandler = (e) =>{
        setname(e.target.value);
    }
    const edit = () =>{
        let newList = [...state]
        newList[id] = name;
        setstate([...newList]);
        navigate('/');
    }
  return (
    <div className='card' style={{ width: '18rem', margin: 'auto'}}>
      <div className='card-header'>
        <h4>Edit ToDo</h4>
      </div>
      <div className='card-body'>
        <div className='row'>
          <input type='text' value={name} onChange={editHandler} placeholder='Edit todo name' />
        </div>
      </div>
      <div className='card-footer'>
        <button className='btn btn-success' onClick={edit}>Edit</button>
        <button className='btn btn-secondary ml-2'>Back</button>
      </div>   
    </div>
  );
}

export default Edittodo;
