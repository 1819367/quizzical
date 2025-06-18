import { useState } from 'react'
import './App.css'
import clsx from 'clsx'
import StartScreen from './components/StartScreen/StartScreen'
import QuizScreen from './components/QuizScreen/QuizScreen'
import imagetop from './images/shape-1.png'
import imageBottom from './images/shape-2.png'

export default function App() {
  // State values
  const [ showQuiz, setShowQuiz ] = useState(false)


  return (
    <main>
      <img className="img-top" src={imagetop} alt='Image shape top' />
      <StartScreen />

      {showQuiz && 
        
        <QuizScreen 
        />}
      
      <img className="img-bottom" src={imageBottom} alt='Image shape bottom'/>
    </main>
  )
}

