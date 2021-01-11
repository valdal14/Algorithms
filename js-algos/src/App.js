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
import syntaxParser from './components/CodeSnippets/5-SyntaxParser';
import nvp from './components/CodeSnippets/6-NVP-Objects';
import globalEnv from './components/CodeSnippets/7-GlobalEnv';
import hoisting from './components/CodeSnippets/8-Hoisting';
import creation from './components/CodeSnippets/9-CreationContext';
import functionInvocation from './components/CodeSnippets/10-FunctionInvocation';
import contextVariables from './components/CodeSnippets/11-ContextVariables';

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
    },
    {
      id: 4,
      title: 'Syntax Parsers, Execution Contexts, and Lexical Environments',
      url: 'syntaxParser',
      codeId: 'c4',
      codeRes: 'cs4'
    },
    {
      id: 5,
      title: 'Name/Value Pairs and Objects',
      url: 'nvpAndObject',
      codeId: 'c5',
      codeRes: 'cs5'
    },
    {
      id: 6,
      title: 'The Global Environment and The Global Object',
      url: 'globalEnv',
      codeId: 'c6',
      codeRes: 'cs6'
    },
    {
      id: 7,
      title: 'The Execution Context - Creation and Hoisting',
      url: 'hoisting',
      codeId: 'c7',
      codeRes: 'cs7'
    },
    {
      id: 8,
      title: 'The Execution Context - Code Execution',
      url: 'creation',
      codeId: 'c8',
      codeRes: 'cs8'
    },
    {
      id: 9,
      title: 'Function Invocation and the Execution Stack',
      url: 'functionInvocation',
      codeId: 'c9',
      codeRes: 'cs9'
    },
    {
      id: 10,
      title: 'Functions, Context, and Variable Environments',
      url: 'contextVariables',
      codeId: 'c10',
      codeRes: 'cs10'
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
        <hr />
        <Code codeId={sections[4].codeId} resId={sections[4].codeRes} sectionUrl={sections[4].url} title={sections[4].title} exampleOne={syntaxParser} size={50} />
        <hr />
        <Code codeId={sections[5].codeId} resId={sections[5].codeRes} sectionUrl={sections[5].url} title={sections[5].title} exampleOne={nvp} size={30} />
        <hr />
        <Code codeId={sections[6].codeId} resId={sections[6].codeRes} sectionUrl={sections[6].url} title={sections[6].title} exampleOne={globalEnv} size={50} />
        <hr />
        <Code codeId={sections[7].codeId} resId={sections[7].codeRes} sectionUrl={sections[7].url} title={sections[7].title} exampleOne={hoisting} size={70} />
        <hr />
        <Code codeId={sections[8].codeId} resId={sections[8].codeRes} sectionUrl={sections[8].url} title={sections[8].title} exampleOne={creation} size={30} />
        <hr />
        <Code codeId={sections[9].codeId} resId={sections[9].codeRes} sectionUrl={sections[9].url} title={sections[9].title} exampleOne={functionInvocation} size={60} />
        <hr />
        <Code codeId={sections[10].codeId} resId={sections[10].codeRes} sectionUrl={sections[10].url} title={sections[10].title} exampleOne={contextVariables} size={60} />

      </div>
    </div>
  );
}

export default App;
