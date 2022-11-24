import { React, useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/hljs';

export default function BracketStacks() {
  const [input, setInput] = useState("");
  const [balance, setBalance] = useState("Try for yourself!");


  const isBalanced = (input) => {
    setInput(input); // updates state of input box
    if (input === "") return setBalance("Try for yourself!");

    let stack = [];       // working array
    let detected = false; // variable for detecting brackets in input
    let openBrack = ["(", "[", "{"];  // an array of all open brackets
    let closeBrack = [")", "]", "}"]; // an array of all close brackets

    // this object is called to check closing brackets against the previous bracket
    const pairedBracks = {
      "(": ")",
      "[": "]",
      "{": "}"
    };

    for (let i = 0; i < input.length; i++) {
      let item = input[i];

      // when open bracket detected, it is pushed to the stack
      if (openBrack.includes(item)) {
        detected = true;
        stack.push(item);
        continue;
      }

      // when close bracket detected...
      if (closeBrack.includes(item)) {
        detected = true;
        let popped = stack.pop();
        // return statement when closing bracket doesn't match previous bracket
        if (pairedBracks[popped] != item) return setBalance("NOT balanced");
        continue;
      }
    }
    // return statement when input made but no brackets present
    if (!detected) return setBalance("Waiting for brackets...");

    // returns true if the stack is clear after the for loop completes.
    return setBalance(stack[0] === undefined ? "Balanced!" : "NOT balanced");
  }


  const isBalancedStr = `
    const isBalanced = (input) => {
      setInput(input); // updates state of input box
      if (input === "") return setBalance("Try for yourself!");

      let stack = [];       // working array
      let detected = false; // variable for detecting brackets in input
      let openBrack = ["(", "[", "{"];  // an array of all open brackets
      let closeBrack = [")", "]", "}"]; // an array of all close brackets

      // this object is called to check closing brackets against the previous bracket
      const pairedBracks = {
        "(": ")",
        "[": "]",
        "{": "}"
      };

      for (let i = 0; i < input.length; i++) {
        let item = input[i];

        // when open bracket detected, it is pushed to the stack
        if (openBrack.includes(item)) {
          detected = true;
          stack.push(item);
          continue;
        }

        // when close bracket detected...
        if (closeBrack.includes(item)) {
          detected = true;
          let popped = stack.pop();
          // return statement when closing bracket doesn't match previous bracket
          if (pairedBracks[popped] != item) return setBalance("NOT balanced");
          continue;
        }
      }
      // return statement when input made but no brackets present
      if (!detected) return setBalance("Waiting for brackets...");

      // returns true if the stack is clear after the for loop completes.
      return setBalance(stack[0] === undefined ? "Balanced!" : "NOT balanced");
    }`;


  return (
    <Row className='bracketstacks py-3'>
      <div className="col-xl-4 col-10 mx-auto">
        <h1>BracketStacks</h1>
        <h4>Bracket balance checker</h4>
        <div className="lead text-start">
          <p>Given a string with <code>{"(parantheses)"}</code>, <code>{"[square brackets]"}</code>, and <code>{"{curly braces}"}</code>,
            this code determines if all brackets have a matching counterpart and close properly.</p>
          <p>What are balanced brackets?</p>
        </div>
        <table className="table table-dark table-striped text-lavender">
          <thead>
            <tr>
              <th scope="col">Brackets</th>
              <th scope="col">Balanced?</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><code>{"([{ }])"}</code></td>
              <td>✅</td>
              <td><button type="button" className='btn btn-sky btn-sm' onClick={() => isBalanced("([{ }])")}>Test</button></td>
            </tr>
            <tr>
              <td><code>{"func{(param) [array]}"}</code></td>
              <td>✅</td>
              <td><button type="button" className='btn btn-sky btn-sm' onClick={() => isBalanced("func{(param) [array]}")}>Test</button></td>
            </tr>
            <tr>
              <td><code>{")"}</code></td>
              <td>❌</td>
              <td><button type="button" className='btn btn-sky btn-sm' onClick={() => isBalanced(")")}>Test</button></td>
            </tr>
            <tr>
              <td><code>{"{[]"}</code></td>
              <td>❌</td>
              <td><button type="button" className='btn btn-sky btn-sm' onClick={() => isBalanced("{[]")}>Test</button></td>
            </tr>
            <tr>
              <td><code>{"[(])"}</code></td>
              <td>❌</td>
              <td><button type="button" className='btn btn-sky btn-sm' onClick={() => isBalanced("[(])")}>Test</button></td>
            </tr>
          </tbody>
        </table>
        <h5 >{balance}</h5>
        <div className='input-group mb-3'>
          <input className='form-control input font-monospace' onChange={e => isBalanced(e.target.value)} value={input} />
          <td><button type="button" className='btn btn-outline-midnight' onClick={() => isBalanced("")}>Clear</button></td>
        </div>
        <div>
          <a href="https://github.com/Augnos/portfolio/blob/master/src/components/challenges/BracketStacks.jsx" target="_blank" className='text-royal fs-5 fw-light'>
            See full component code on GitHub.
          </a>
        </div>

      </div>

      <div className="col-xl-7 col-10 m-auto pt-3 text-start bg-midnight opacity-75 rounded rounded-3">
        <SyntaxHighlighter language='javascript' style={dracula}>
          {isBalancedStr}
        </SyntaxHighlighter>
      </div>

    </Row>
  )
}
