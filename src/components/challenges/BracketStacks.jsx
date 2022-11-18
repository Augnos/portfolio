import { React, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

export default function BracketStacks() {
  const [input, setInput] = useState("");
  const [balance, setBalance] = useState("Try for yourself!");

  const isBalanced = (brackets) => {
    setInput(brackets);
    if (brackets === "") return setBalance("Try for yourself!");

    let stack = [];       // used to check brackets
    let detected = false; // variable for detecting brackets in input
    let openBrack = ["(", "[", "{"];  // an array of all open brackets
    let closeBrack = [")", "]", "}"]; // an array of all close brackets

    // this objects is called to check closing brackets against the previous bracket
    const pairedBracks = {
      "(": ")",
      "[": "]",
      "{": "}"
    };

    for (let i = 0; i < brackets.length; i++) {
      let item = brackets[i];
      if (openBrack.includes(item)) {
        detected = true;
        stack.push(item);
        continue;
      }
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

    // empty stack array after loop will return true.
    return setBalance(stack[0] === undefined ? "Balanced!" : "NOT balanced");
  }


  return (
    <Col xl={10} lg={9} className="w-75 my-auto mx-auto bg-lavender text-midnight bg-gradient">
      <Row>

        <div className="col">
          <h1>BracketStacks</h1>
          <p className="lead text-start">Given the string <code>{"[()]{ }{[()()]()}"}</code>, write a function that takes a string parameter containing brackets, determine if all brackets have a matching counterpart. If all brackets in the string form balanced pairs, return true. If not, return false.</p>
          <p className="lead">What are balanced brackets?</p>
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
                <td><code>{"[(])"}</code></td>
                <td>❌</td>
                <td><button type="button" className='btn btn-sky btn-sm' onClick={() => isBalanced("[(])")}>Test</button></td>
              </tr>
              <tr>
                <td><code>{"{(})[]"}</code></td>
                <td>❌</td>
                <td><button type="button" className='btn btn-sky btn-sm' onClick={() => isBalanced("{(})[]")}>Test</button></td>
              </tr>
              <tr>
                <td><code>{"{()[]}"}</code></td>
                <td>✅</td>
                <td><button type="button" className='btn btn-sky btn-sm' onClick={() => isBalanced("{()[]}")}>Test</button></td>
              </tr>
            </tbody>
          </table>
          <h5 >{balance}</h5>
          <div className='input-group mb-3'>
            <input className='form-control input font-monospace' onChange={e => isBalanced(e.target.value)} value={input} />
            <td><button type="button" className='btn btn-orchid' onClick={() => isBalanced("")}>Clear</button></td>
          </div>

        </div>

        <div className="d-none d-lg-flex col">
          <img src="/images/brackets.png" className="img-fluid" />
        </div>

      </Row>
    </Col>
  )
}
