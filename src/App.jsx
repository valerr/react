import React from 'react';
import Card from './1_Components/Card';
import Definitions from './4_colls/Definitions';
import Progress from './5_jsx_html_diff/Progress';
import Alert from './6_classnames/Alert';
import ListGroup from './7_children/ListGroup';
import BtnGroup from './8_state/BtnGroup';
import Carousel from './9_events/Carousel';
import Collapse from './10_automaton/Collapse';
import MyForm from './11_forms/MyForm';
import Log from './12_immutability/Log';
import TodoBox from './13_nested/TodoBox';
import Card2 from './14_func_components/Card';
import Component from './15_virtual_dom/Component';
import MarkdownEditor from './18_refs/MarkdownEditor';
import 'bootstrap-markdown/js/bootstrap-markdown';
import 'bootstrap-markdown/css/bootstrap-markdown.min.css';

function App() {
  return (
    <>
    <div className="container m-3">
      <Card />
    </div>
    <div className="container m-3">
      <Definitions data={[ { dt: 'one', dd: 'two' }, { dt: 'another term', dd: 'another description' } ]} />
    </div>
    <div className="container m-3">
      <Progress percentage={85} />
    </div>
    <div className="container m-3">
      <Alert type='warning' text='Text!' />
    </div>
    <div className="container m-3">
      <ListGroup> <p>one</p><p>two</p> </ListGroup>
    </div>
    <div className="container m-3">
      <BtnGroup />
    </div>
    <div className="container m-3 col-7">
      <Carousel images={['/images/1.jpg', '/images/2.jpg', '/images/3.jpg']} />
    </div>
    <div className="container m-3">
      <Collapse text={'collapse me'} opened={false} />
    </div>
    <div className="container m-3">
      <MyForm />
    </div>
    <div className="container m-3">
      <Log />
    </div>
    <div className="container m-3">
      <TodoBox />
    </div>
    <div className="container m-3">
      <Card2>
        <Card2.Body>
          <Card2.Title>Title</Card2.Title>
          <Card2.Text>Text</Card2.Text>
        </Card2.Body>
      </Card2>
    </div>
    <div className="container m-3">
      <Component />
    </div>
    <div className="container m-3">
      <MarkdownEditor onContentChange={console.log} />
    </div>
    </>
  )
}

export default App;