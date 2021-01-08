import React, { useState } from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Header from './components/header/Header';
import Jumbotron from './components/Jumbotron/Jumbotron';
import Agenda from './components/Agenda/Agenda';
import Code from './components/Sections/Code';
// Code samples
import firstExample from './components/CodeSnippets/1-FirstExample';

function App() {

  const [sections, setSection] = useState([
    {
      id: 0,
      title: 'Chars Count example',
      url: 'charsCountExample',
      codeId: 'c0',
      codeRes: 'cs0'
    }
  ]);

  return (
    <div className="App">
      <Header />
      <Jumbotron />
      <Agenda agendaTopics={sections} />
      <hr />
      <div className='container'>
        <Code codeId={sections[0].codeId} resId={sections[0].codeRes} sectionUrl={sections[0].url} title={sections[0].title} exampleOne={firstExample} size={30} />
        <hr />
      </div>
    </div>
  );
}

export default App;
