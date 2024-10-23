// import React from "react";
// import './App.css';
// import {createElement} from 'react';
// const Hello=()=>{
//   return React.createElement(
//     'div',{id: 'hello', className: 'exc'},
//   createElement('h2',null,'Single User'),
//   createElement('h2',null,'Double User'),
//   createElement('h2',null,'Triple User'),
  
//   );
// }
// export default Hello;

// import './App.css';
// export default function ExampleJsx(){
//   // Rule 1: return a single root element
//   return(
//     // <div>
//     // <h1>Welcome to JSX</h1>
//     // <p>This is a paragraph</p>
//     // </div>

//     //fragment
//     <>
//     <div>
//       <h2>Single User</h2>
//       <h1>$149</h1>
//       <p>500 GB Storage</p>
//       <p>1 Granted Userd</p>
//       <p>Send upto 2 GB</p>
//       <button>Start Trial </button>
//     </div>

//     <div>
//     <h2>Double User</h2>
//       <h1>$149</h1>
//       <p>500 GB Storage</p>
//       <p>1 Granted Userd</p>
//       <p>Send upto 2 GB</p>
//       <button>Start Trial </button>
//     </div>

//     <div>
//     <h2>Triple User</h2>
//       <h1>$149</h1>
//       <p>500 GB Storage</p>
//       <p>1 Granted Userd</p>
//       <p>Send upto 2 GB</p>
//       <button>Start Trial </button>
//     </div>

//     </>
//     //Rule 2: Close all the tags
//   )
// }

/** 
import './App.css';
import React from 'react';
import { createElement } from 'react';

const Website = () =>{
  return createElement(
    'div',
    {className: 'horizontal-container'},
    createElement('div',{className: 'centered-container'},
      createElement('h1',null,'Vivek'),
      createElement('h2',null,'$149'),
      createElement('h2',null,'500 GB Storage'),
      createElement('h2',null,'1 Granted User'),
      createElement('h2',null,'Send upto 2GB'),
      createElement('button',null,'Start Trial')
    ),

    createElement('div',{className: 'centered-container'},
      createElement('h1',null,'Double User'),
      createElement('h2',null,'$149'),
      createElement('h2',null,'500 GB Storage'),
      createElement('h2',null,'1 Granted User'),
      createElement('h2',null,'Send upto 2GB'),
      createElement('button',null,'Start Trial')
    ),
    createElement('div',{className: 'centered-container'},
      createElement('h1',null,'Triple User'),
      createElement('h2',null,'$149'),
      createElement('h2',null,'500 GB Storage'),
      createElement('h2',null,'1 Granted User'),
      createElement('h2',null,'Send upto 2GB'),
      createElement('button',null,'Start Trial')
    ),
  )
}

export default Website;

*/


import './App.css';
import React from 'react';
import { createElement } from 'react';

const myWebsite = () => {
  return createElement(
    'div',
    { className: 'form-container' },
    createElement('h1', null, 'Signup'),
    createElement(
      'form',
      null,
      createElement('div', { className: 'input-container' },
        createElement('label', null, 'Email: '),
        createElement('input', { type: 'email' })
      ),
      createElement('br', null),
      createElement('div', { className: 'input-container' },
        createElement('label', null, 'Password: '),
        createElement('input', { type: 'password' })
      ),
      createElement('br', null),
      createElement(
        'button',
        { type: 'submit' },
        'Submit'
      )
    )
  );
};

export default myWebsite;
