import { useState } from 'react'

const Display = ({type, text}) => type == "title" ? <h1>{text}</h1> : <p>{text}</p>

const Button = ({handleClick, text}) => <button onClick={handleClick}>{text}</button>

const App = () => {
  // guarda los clics de cada botón en su propio estado
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGood = () => setGood(good + 1)
  const handleNeutral = () => setNeutral(neutral + 1)
  const handleBad = () => setBad(bad + 1)

  return (
    <div>
    <Display type="title" text="give feedback" />
    <Button handleClick={handleGood} text="good" />
    <Button handleClick={handleNeutral} text="neutral" />
    <Button handleClick={handleBad} text="bad" />
    <Display type="title" text="statistics" />
    <Display text={`good ${good}`} />
    <Display text={`neutral ${neutral}`} />
    <Display text={`bad ${bad}`} />
    
    </div>
  )
}

export default App