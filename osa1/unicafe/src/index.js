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
      <div>
        <StatisticLine text="good" value={good} />
        <StatisticLine text="neutral" value={neutral} />
        <StatisticLine text="bad" value={bad} />
        <StatisticLine text="all" value={all} />
        <StatisticLine text="average" value={average} />
        <StatisticLine text="positive" value={positive} />
      </div>
    )
  } else {
    return (
      <p>No feedback given</p>
    )
  }
}

const StatisticLine = (props) => {
  return (
    <p>{props.text} {props.value}</p>
  )
}

ReactDOM.render(<App />,
  document.getElementById('root')
)