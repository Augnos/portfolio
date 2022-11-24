import { React, useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/hljs';

export default function TacoCat() {
  const [input, setInput] = useState("");
  const [palindrome, setPalindrome] = useState("Try for yourself!");


  const isPalindrome = (palindrome) => {
    setInput(palindrome);
    if (palindrome === "") {
      return setPalindrome("Try for yourself!");
    }

    let chars = palindrome.replace(/[^a-zA-Z]+/g, '').toLowerCase();

    for (let i = 0; i < (chars.length / 2); i++) {
      if (chars[i] != chars[chars.length - i - 1]) {
        return setPalindrome("Not a palindrome")
      }
    }

    return setPalindrome("Palindrome!");
  }


  const isPalindromeStr = `
    const isPalindrome = (palindrome) => {
      // regex removes all spaces and punctuation, converts to all lower case
      let chars = palindrome.replace(/[^a-zA-Z]+/g, '').toLowerCase();
  
      // for loop will check first and last characters,
      // and work inwards after every check
      for (let i = 0; i < (chars.length / 2); i++) {

        // if there's a mismatch, return false
        if (chars[i] != chars[chars.length - i - 1]) {
          return false
        }
      }
  
      // if there were no mismatches after reaching the middle...
      return true;
    }`;


  return (
    <Row className='tacocat py-3 mb-auto'>
      <div className="col-xl-4 col-10 m-xl-auto mx-auto">
        <h1>TacocaT</h1>
        <h4>A palindrome checker</h4>
        <div className="lead text-start">
          <p>Given a string, this code checks whether the string is a palindrome or not.</p>
          <p>A palindrome is a word, phrase, or other sequence of characters which reads the same backward as forward, such as <i>madam</i> or <i>racecar</i>.</p>
          <p><strong>Note:</strong> This function ignores spaces and punctuation.</p>
        </div>
        <table className="table table-dark table-striped text-lavender">
          <thead>
            <tr>
              <th scope="col">Prompt</th>
              <th scope="col">Palindrome?</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><code>{"taco cat"}</code></td>
              <td>✅</td>
              <td><button type="button" className='btn btn-sky btn-sm' onClick={() => isPalindrome("taco cat")}>Test</button></td>
            </tr>
            <tr>
              <td><code>{"taco dog"}</code></td>
              <td>❌</td>
              <td><button type="button" className='btn btn-sky btn-sm' onClick={() => isPalindrome("taco dog")}>Test</button></td>
            </tr>
            <tr>
              <td><code>{"Murder for a jar of red rum."}</code></td>
              <td>✅</td>
              <td><button type="button" className='btn btn-sky btn-sm' onClick={() => isPalindrome("Murder for a jar of red rum.")}>Test</button></td>
            </tr>
            <tr>
              <td><code>{"vaporwave is dead (its not)"}</code></td>
              <td>❌</td>
              <td><button type="button" className='btn btn-sky btn-sm' onClick={() => isPalindrome("vaporwave is dead")}>Test</button></td>
            </tr>
          </tbody>
        </table>
        <h5 >{palindrome}</h5>
        <div className='input-group mb-3'>
          <input className='form-control input font-monospace' onChange={e => isPalindrome(e.target.value)} value={input} />
          <td><button type="button" className='btn btn-outline-midnight' onClick={() => isPalindrome("")}>Clear</button></td>
        </div>

        <div>
          <a href="https://github.com/Augnos/portfolio/blob/master/src/components/challenges/TacoCat.jsx" target="_blank" className='text-royal fs-5 fw-light'>
            See full component code on GitHub.
          </a>
        </div>

      </div>

      <div className="col-xl-7 col-10 m-auto pt-3 text-start bg-midnight opacity-75 rounded rounded-3">
        <SyntaxHighlighter language='javascript' style={dracula}>
          {isPalindromeStr}
        </SyntaxHighlighter>
      </div>

    </Row>
  )
}
