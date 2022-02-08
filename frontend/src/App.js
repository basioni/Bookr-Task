import { React } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Menu from './components/Menu';
import Home from './components/Home';
import Todos from './components/todos/Todos';
import AddTodo from './components/todos/AddTodo';
import TodoView from './components/todos/TodoView';
import TodoEditView from './components/todos/TodoEditView';
import NoPage from "./components/NoPage";
import { useAuth0 } from "@auth0/auth0-react";

function App() {
  const { user, isAuthenticated} = useAuth0();
  return ( 
  
    <div className="App">
        <div class="wrapper">
          <BrowserRouter>
            <Menu/>
            <Routes>
                <Route path="/">
                  <Route index element={<Home />} />
                  <Route path="home" element={<Home />} />
                  <Route path="todos" element={<Todos />} />
                  <Route path="AddTodo" element={<AddTodo />} />
                  <Route path="TodoView" element={<TodoView />} />
                  <Route path="TodoEditView" element={<TodoEditView />} />
                  <Route path="*" element={<NoPage />} />
                </Route >
            </Routes>
          </BrowserRouter>
        </div>
    </div>
  )
  
}

export default App;
