// imports
import "./App.css" // css file
import Header from "./MyComponents/Header"; // Header from Mycomponent
import { Todos } from "./MyComponents/Todos"; // Header from Mycomponent
import { Footer } from "./MyComponents/Footer"; // Footer from Mycomponent
import { AddTodo } from "./MyComponents/AddTodo"; // AddTodo from Mycomponent
import { About } from "./MyComponents/About"; // About from Mycomponent
import React, { useState, useEffect } from 'react'; // useState and useEffect from React

// routing init
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

// function
function App() {

  // create variable named initTodo
  let initTodo;

  // condition --> if todos items is null set initTodo into empty array
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  }
  // else --> initTodo is not null then display all the elements
  else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }

  // onDelete fuction --> to perform delete task
  const onDelete = (todo) => {

    // filtering the element when we delete the element
    setTodos(todos.filter((e) => {
      return e !== todo;
    }));
    // then pusing to the local storage the new array after deleting
    localStorage.setItem("todos", JSON.stringify(todos));
  }

  
  // addTodo function --> to add todos
  const addTodo = (title, desc) => {

    // create variable sno
    let sno;
    // conditions --> checking when there is empty element in array then init sno varibale into 0
    if (todos.length === 0) {
      sno = 0;
    }
    // giving sno to the new element
    else {
      sno = todos[todos.length - 1].sno + 1;
    }

    // object
    const myTodo = {
      sno: sno,
      title: title,
      desc: desc,
    }
    setTodos([...todos, myTodo]);
  }

  // useState statment
  const [todos, setTodos] = useState(initTodo);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos])


  // returning the components
  return ( 
    <> 
    <Router> {/* router to create rout*/}

      {/* header component */}
      <Header title="Notefy" searchBar={false} /> 

      {/* creating switch */}
      <Switch>

          {/* when user go to the home rout show this  */}
          <Route exact path="/" render={()=>{
            return(
            <>
            <AddTodo addTodo={addTodo} />
            <Todos todos={todos} onDelete={onDelete} /> 
            </>)
          }}> 
          </Route>

           {/* when user go to the about rout show this  */}
          <Route exact path="/about">
            <About />
          </Route> 

        </Switch> 

      <Footer />

    </Router>
    </>
  );
}

export default App;
