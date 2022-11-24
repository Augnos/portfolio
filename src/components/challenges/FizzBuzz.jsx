import { React, useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/hljs';

export default function FizzBuzz() {
  const [fizz, setFizz] = useState(3);
  const [buzz, setBuzz] = useState(5);
  const [fizzbuzz, setFizzbuzz] = useState([]);


  const findFizzbuzz = ( fizz=3, buzz=5) => {
    setFizz(fizz);
    setBuzz(buzz);

    let results = [];

    for (i = 1; i <= 100; i++){
      if (i % fizz === 0 && i % buzz === 0) results.push("FizzBuzz");
      else if (i % fizz === 0) results.push("Fizz");
      else if (i % buzz === 0) results.push("Buzz");
      else results.push(i.toString());
    }

    return setFizzbuzz(results);
  }


  const isPalindromeStr = ``;


  return (
    <Row className='tacocat py-3 mb-auto'>
      <div className="col-xl-4 col-10 m-xl-auto mx-auto">
        <h1>FizzBuzz</h1>
        <div className="lead text-start">
          <p>Given a pair of integers, this code returns "Fizz" and "Buzz" when either are </p>
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
