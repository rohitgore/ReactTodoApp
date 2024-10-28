import React, { useContext, useEffect } from 'react';
import { Link,useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlus, faPencil, faTrash } from '@fortawesome/free-solid-svg-icons';
import { myContext } from '../App';

function List() {
    const {state,setstate} = useContext(myContext)
    const navigate = useNavigate();
    useEffect(() => {
      return () => {
        console.log(state);
       
      };
    }, []);

    const deletehandler = (val) =>{
        let newList = [...state]
        newList.splice(val,1);
        setstate([...newList])
    }

    return (

        <div className='card' style={{ width: '18rem', margin: 'auto'}}>
            <div className='card-header d-flex justify-content-between'>
                <div>
                    ToDo List
                </div>
                <div>
                    <a style={{cursor:'pointer'}} onClick={()=>navigate('/add')}><FontAwesomeIcon icon={faCirclePlus}></FontAwesomeIcon></a>
                </div>

            </div>
            <div className='card-body'>
                <table className='table table-bordered table-stripped'>
                    <thead>
                        <tr>
                            <th>Serial #</th>
                            <th>Name</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                    {state.map((x,index) => (
                        <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{x}</td>
                                    <td>
                                        <a style={{cursor:'pointer'}} onClick={()=>navigate(`/edit/${index}`)}><FontAwesomeIcon icon={faPencil}></FontAwesomeIcon></a> | <a style={{cursor:'pointer'}} onClick={()=> deletehandler(index)}><FontAwesomeIcon icon={faTrash}></FontAwesomeIcon></a>
                                    </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
            <div className='card-footer'>
                <button className='btn btn'></button>
            </div>
        </div>
    );
}

export default List;
