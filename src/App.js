import logo from './logo.svg';
import './App.css';
import Todos from './components/todos/Todos';
import AddTodo from './components/todos/AddTodo';

function App() {
  return (
    <div className="App">
      <AddTodo/>
      <Todos/>
    </div>
  );
}

export default App;
