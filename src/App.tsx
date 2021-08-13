import './App.scss';
import React from 'react';
import logo from './logo.svg';
import { QueryClient, QueryClientProvider, useQuery } from 'react-query';
//import initItems from "./data.json";

// components
import List from './Components/List';
import NewItem from './Components/NewItem';

function App() {

  const queryClient = new QueryClient()


  const fetchTodoList = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    console.log(res)
    return res.json()
  }

  //const todos = () => {
  //const todos = useQuery('todos', fetchTodoList);
  //console.log(todos);
  //}


  return (
    <>
      <QueryClientProvider client={queryClient}>
        <div className="relative w-screen h-screen overflow-hidden flex bg-reactBlue">
          <div className="items-center flex flex-col w-full pt-10">
            <div className="flex">
              <span className="text-5xl text-lightBlue">To-Do List</span>
              <img src={logo} className="App-logo" alt="logo" />
            </div>
            <div className="flex flex-col w-full px-64 pb-16 flex-grow">
              <NewItem />
              <List />
              {/* <NewItem onSave={onSave} forEdit={forEdit} editedItem={editedItem}/>
                    <List collection={taskList} deleteHandler={deleteFunction} editHandler={sendEdit}/> */}
            </div>
          </div>
        </div>
      </QueryClientProvider>
    </>
  );
}

export default App;
