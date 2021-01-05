import React, { useState } from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Header from './components/header/Header';
import Jumbotron from './components/Jumbotron/Jumbotron';
import Agenda from './components/Agenda/Agenda';
import Documentation from './components/Sections/Documentation';
import Installation from './components/Sections/Installation';
import Compilation from './components/Sections/Compilation';
import Code from './components/Sections/Code';
// Code samples
import firstExample from './components/CodeSnippets/1-FirstExample';

function App() {

  const [sections, setSection] = useState([
    {
      id: 0,
      title: 'Useful Link',
      url: 'docs'
    },
    {
      id: 1,
      title: 'Installation',
      url: 'install'
    },
    {
      id: 2,
      title: 'Compilation',
      url: 'compile'
    },
    {
      id: 3,
      title: 'First code sample',
      url: 'firstExample'
    }
  ]);

  return (
    <div className="App">
      <Header />
      <Jumbotron />
      <Agenda agendaTopics={sections} />
      <hr />
      <div className='container'>
        <Documentation sectionUrl={sections[0].url} title={sections[0].title} />
        <hr />
        <hr />
        <Installation sectionUrl={sections[1].url} title={sections[1].title} />
        <hr />
        <Compilation sectionUrl={sections[2].url} title={sections[2].title} />
        <hr />
        <Code sectionUrl={sections[3].url} title={sections[3].title} exampleOne={firstExample} size={30} />
        <hr />
      </div>
    </div>
  );
}

export default App;
