import './App.scss';
import React from 'react';
import logo from './logo.svg';
import { QueryClient, QueryClientProvider, useQuery } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

// components
import List from './Components/List';
import NewItem from './Components/NewItem';

function App() {

  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
        //staleTime: 5000,
      },
    },
  })

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <div className="relative w-screen h-screen overflow-hidden flex bg-reactBlue">
          <div className="items-center flex flex-col w-full pt-10">
            <div className="flex">
              <span className="text-5xl text-lightBlue">To-Do List</span>
              <img src={logo} className="App-logo" alt="logo" />
            </div>
            <div className="flex flex-col w-full px-64 pb-16 flex-grow text-lightBlue">
              <NewItem />
              <List />
              {/* <NewItem onSave={onSave} forEdit={forEdit} editedItem={editedItem}/>
                    <List collection={taskList} deleteHandler={deleteFunction} editHandler={sendEdit}/> */}
            </div>
          </div>
        </div>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </>
  );
}

export default App;
