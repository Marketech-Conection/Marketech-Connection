import React from 'react'
import Header from './Components/Header/header'
import Message from './Components/Message/message'
import ContentBar from './Components/ContentBar'
import Footer from './Components/Footer'
import './styles/global.css'
function App() {
  return (
    <div className="App">
      <head>
        Marketech Connection
      </head>
      <Header/>
      <Message/>
      <ContentBar/>
      <div>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
