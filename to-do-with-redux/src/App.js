import './App.css';
import AddTodo from './components/AddTodo';
import Todos from './components/Todos.js';

function App() {
  return (
    <div className="App">
      <AddTodo/>
      <Todos />
    </div>
  );
}

export default App;
