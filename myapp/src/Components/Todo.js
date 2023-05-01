import React,{useEffect, useState} from 'react';
import './Todo.css';

const Todo = () => {
    const[inputData,setInputData]=useState('');
    const[editId,setEditId]=useState('');
    const[item, setItem]=useState([]);
    const[toggle,setToggle]=useState(true);
    
    const addData=()=>{
        if(!inputData){
            alert("This is Empty");
        }  
        
        else if(inputData && !toggle){
            setItem(
                item.map((elem)=>{
                    if(elem.id===editId){
                        return {...elem, name:inputData};
                    }
                    return elem;
                })
            )
            setEditId('');
            setInputData('');
            setToggle(true);
    }
     else{
            const allInputData={id:new Date().getTime().toString(), name:inputData};
            setItem([...item,allInputData]);
            setInputData('');
        }
       
    }
    const deleteItem=(index)=>{
        
        const updatedItem=item.filter((elem)=>{
            return index !== elem.id;
        });
        setItem(updatedItem)
    }
    const editItem=(indx,name)=>{
        setEditId(indx)
        setInputData(name);
        setToggle(false);
    }
    useEffect(()=>{
        console.log(editId)
    },[editId])
  return (
    <>

        <div className='main-div'>
            <p>This is javaScript</p>
            <div className='child-div'>
                <figure>
                    <figcaption>Todo List ✌</figcaption>
                </figure>
                <div className='add-items'>
                    <input type='text' placeholder='✍ Add items...'
                    value={inputData} 
                    onChange={(e)=>setInputData(e.target.value)}></input>
                    {
                        toggle? <i class="bi bi-plus-circle-fill add-btn" title='add-item' onClick={addData} ></i>
                        :<i class="bi bi-pencil-square add-btn" title='updated-item' onClick={addData}></i>
                    }
                    
                </div>
                <div className='show-item'>
                    {
                        item.map((element)=>{
                            return(
                                <div className='each-item' key={element.id}>
                                    <p>{element.name}</p>
                                    <div className='todo-btn'>
                                        <i class="bi bi-pencil-square add-btn" title='edit-item' onClick={()=>editItem(element.id,element.name)} ></i>
                                        <i class="bi bi-trash3 add-btn" title='delete-item' onClick={()=>deleteItem(element.id)} ></i>
                                    </div>
                                </div>
                            )
                            
                        })
                    }
                    
                </div>
    
            </div>
        </div>
    </>

  )
}

export default Todo