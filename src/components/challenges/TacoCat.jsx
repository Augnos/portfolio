import { React, useState } from 'react';
import { Row, Col } from 'react-bootstrap';

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


  return (

    <Row className='tacocat h-100'>

      <div className="col-xl-5 col-10 m-auto">
        <h1>TacocaT</h1>
        <h4>A palindrome checker</h4>
        <div className="lead text-start">
          <p>A palindrome is a word, phrase, or other sequence of characters which reads the same backward as forward, such as madam or racecar.</p>
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

      </div>

      <div className="col-xl-5 col-10 m-auto pt-3 text-start bg-midnight opacity-75 rounded rounded-3">
        <pre><code className='text-white'>const isPalindrome = {String(isPalindrome)}</code></pre>
      </div>


    </Row>

  )
}
