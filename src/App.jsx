import { useState } from 'react';
import './App.css';
import StartScreen from './components/StartScreen/StartScreen';
import QuizScreen from './components/QuizScreen/QuizScreen';
import imagetop from './images/shape-1.png';
import imageBottom from './images/shape-2.png';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function App() {
  // State values
  const [ showQuiz, setShowQuiz ] = useState(false)

  return (
    <main>
      <img className="img-top" src={imagetop} alt='Image shape top' />

      { showQuiz ? 
        <QuizScreen returnToStart={() => setShowQuiz(false)} /> 
         :
        <StartScreen 
          showQuiz={() => setShowQuiz(true)}
        />  
    }      
      <img className="img-bottom" src={imageBottom} alt='Image shape bottom'/>
       <ToastContainer />
    </main>
  )
}

