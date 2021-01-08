import React, { useState } from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Header from './components/header/Header';
import Jumbotron from './components/Jumbotron/Jumbotron';
import Agenda from './components/Agenda/Agenda';
import Code from './components/Sections/Code';
// Code samples
import firstExample from './components/CodeSnippets/1-FirstExample';
import frequencyCurrentPattern from './components/CodeSnippets/2-FrequencyCounterPattern';
import anagrams from './components/CodeSnippets/3-Anagrams';
import multiplePointers from './components/CodeSnippets/4-MultiplePointers';

function App() {

  const [sections, setSection] = useState([
    {
      id: 0,
      title: 'Chars Count example',
      url: 'charsCountExample',
      codeId: 'c0',
      codeRes: 'cs0'
    },
    {
      id: 1,
      title: 'Frequency Current Pattern',
      url: 'frequencyCurrentPattern',
      codeId: 'c1',
      codeRes: 'cs1'
    },
    {
      id: 2,
      title: 'Anagrams',
      url: 'anagrams',
      codeId: 'c2',
      codeRes: 'cs2'
    },
    {
      id: 3,
      title: 'Multiple Pointers',
      url: 'multiplePointers',
      codeId: 'c3',
      codeRes: 'cs3'
    }
  ]);

  return (
    <div className="App">
      <Header />
      <Jumbotron />
      <Agenda agendaTopics={sections} />
      <hr />
      <div className='container'>
        <Code codeId={sections[0].codeId} resId={sections[0].codeRes} sectionUrl={sections[0].url} title={sections[0].title} exampleOne={firstExample} size={46} />
        <hr />
        <Code codeId={sections[1].codeId} resId={sections[1].codeRes} sectionUrl={sections[1].url} title={sections[1].title} exampleOne={frequencyCurrentPattern} size={20} />
        <hr />
        <Code codeId={sections[2].codeId} resId={sections[2].codeRes} sectionUrl={sections[2].url} title={sections[2].title} exampleOne={anagrams} size={26} />
        <hr />
        <Code codeId={sections[3].codeId} resId={sections[3].codeRes} sectionUrl={sections[3].url} title={sections[3].title} exampleOne={multiplePointers} size={35} />
      </div>
    </div>
  );
}

export default App;
