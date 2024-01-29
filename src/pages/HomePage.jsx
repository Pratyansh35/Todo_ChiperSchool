/* eslint-disable react/prop-types */


import AddTodoForm from "./../Components/AddTodoForm";
import TodoList from "./../Components/TodoList";
import styles from "./../App.Module.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


function HomePage({todos,setTodos}) {
 
  function addTodo(newTodo) {
    setTodos((prevTodos) => [...prevTodos, newTodo]);
  }
  function toggleCompleted(id) {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed: !todo.completed };
        } else {
          return { ...todo };
        }
      })
    );
  }
  function deleteTodo(id) {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  }
  function updateTitle(id, title) {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, title: title };
        } else {
          return { ...todo };
        }
      })
    );
  }
  return (
    <>
    <ToastContainer
      position="bottom-center"
      autoClose={2000}
      hideProgressBar={true}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="dark"
    />
    <div className={styles.App}>
      <h1 className={styles.heading}>ToDo App</h1>
      <AddTodoForm addTodo={addTodo} />
      <TodoList
        todos={todos}
        deleteTodo={deleteTodo}
        toggleCompleted={toggleCompleted}
        updateTitle={updateTitle}
      />
      {todos.length > 0 ? (
        <button
          className={styles.clearAllTodosBtn}
          onClick={() => {
            setTodos([]);
          }}
        >
          Clear All Todos
        </button>
      ) : null}
    </div>
  </>
  );
}

export default HomePage;