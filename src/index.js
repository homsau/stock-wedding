import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './fonts/Nickainley-Normal.ttf';
import './fonts/Tangerine-Bold.ttf';
import './fonts/Tangerine-Regular.ttf';
import './fonts/Vacations Brush.ttf';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

// import React from "react";
// import ReactDOM from "react-dom";
// import { App, Page, Section, Hero, Navbar, HorizontalSplit } from "neal-react";
 
// ReactDOM.render((
//   <App>
//     <Page>
//       <Navbar brand="hello"></Navbar>
//       <Hero className="text-center"> <h1>Hello World</h1> </Hero>
//       <Section heading="Hello!">
//         <HorizontalSplit padding="md"></HorizontalSplit>
//       </Section>
//       { /* More ... */ }
//     </Page>
//   </App>
// ), document.getElementById("root"));
