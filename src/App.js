import React from 'react';
import List from './List';
import STORE from './store';
import './App.css';


function App(props) {
  const lists = props.lists.map(list => {
    return (
    <List key={list.id} header= {list.header} cards={list.cardIds.map(id => props.allCards[id])} />
    )
  })
  return (
    <main className='App'>
      <header>
        <h1>TrelloYes!</h1>
      </header>
      <div className='App-list'>
        {lists}
      </div>
    </main>
  );
}

export default App;