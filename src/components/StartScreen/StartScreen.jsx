import { useEffect } from 'react';
import styles from './StartScreen.module.css';
import clsx from 'clsx';
import { toast } from 'react-toastify';

export default function StartScreen ({showQuiz}) {

    //use useEffect to show the toast when the compoenent mounts
    useEffect(() => {
      toast('Welcome to Quizzical!', {
        position: 'top-center', 
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined  
      });
    }, []);

    return (
        <section className={clsx(styles['start-screen'])}>
          <h1 className={clsx(styles['start-screen__title'])}>Quizzical</h1>
          <p className={clsx(styles['start-screen__intro-text'])}>A music trivia quiz. <br></br>Click the button to begin!</p>
          
          <button 
            className={clsx(styles['start-screen__btn'])}
            onClick={showQuiz}
          >
                Start quiz
          </button>
        </section>
    )
}