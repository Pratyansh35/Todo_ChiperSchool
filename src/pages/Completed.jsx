/* eslint-disable react/prop-types */

import styles from "../Components/Todo.module.css";
function Completed({todos}) {
  return (

    <>
    <h1 style={{textAlign:"center"}}>Completed Tasks : </h1>
    
    {todos.map((todo) => 
       {
        if(todo.completed)
        {
        return(
          <>  
       <div className={styles.todo}> 
       <h3>{todo.title}</h3>
    </div>
    </>
        )
        }
        else{
          return(
            <>
        
            </>
          )
        }
       })}
    </>
  )
}

export default Completed;