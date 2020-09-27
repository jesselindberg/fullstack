import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <Header header='give feedback' />
      <div>
        <Button name="good" onClick={() => setGood(good + 1)} />
        <Button name="neutral" onClick={() => setNeutral(neutral + 1)} />
        <Button name="bad" onClick={() => setBad(bad + 1)} />
      </div>
      <Header header='statistics' />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

const Header = (props) => {
  return (
    <h1>{props.header}</h1>
  )
}

const Button = (props) => {
  return (
    <button onClick={props.onClick}>
      {props.name}
    </button>
  )
}

const Statistics = (props) => {
  console.log(props)
  let { good, neutral, bad } = props
  let all = good + neutral + bad
  let average = (good * 1 + neutral * 0 + bad * -1) / all
  let positive = good / all
  if (all > 0) {
    return (
      <table>
        <tbody>
          <tr>
            <td>good</td>
            <td>{good}</td>
          </tr>
          <tr>
            <td>neutral</td>
            <td>{neutral}</td>
          </tr>
          <tr>
            <td>bad</td>
            <td>{bad}</td>
          </tr>
          <tr>
            <td>all</td>
            <td>{all}</td>
          </tr>
          <tr>
            <td>average</td>
            <td>{average}</td>
          </tr>
          <tr>
            <td>positive</td>
            <td>{positive} %</td>
          </tr>
        </tbody>
      </table>
    )
  } else {
    return (
      <p>No feedback given</p>
    )
  }
}

ReactDOM.render(<App />,
  document.getElementById('root')
)