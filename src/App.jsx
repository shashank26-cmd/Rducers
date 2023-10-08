import { useReducer } from 'react'
import './App.css'
import AddTodo from './components/AddTodo/AddTodo.jsx';
import TodoList from './components/TodoList/TodoList'
import TodoContext from './components/context/TodoContext'
import todoReducers from './components/reducer/todoReducers'
import TodoDispatch from './components/context/TodoDispatch';
function App() {
  const [list, dispatch] = useReducer(todoReducers, []);

  return (
    <TodoContext.Provider value={{ list }}>
      <TodoDispatch.Provider value={{dispatch}}>


      <AddTodo />
      <TodoList />

      </TodoDispatch.Provider>
    
    </TodoContext.Provider>
  );
}

export default App;
