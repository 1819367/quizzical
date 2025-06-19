import { useState } from 'react'
import styles from './QuizScreen.module.css'
import clsx from 'clsx' /*plan to implement*/

export default function QuizScreen () {
    const [ quizCompleted, setQuizCompleted ] = useState(false);

    return (
       <>
        <section>
            <form className={styles['quiz-screen__form']}>

            <fieldset className={styles['quiz-screen__question']}>

                <legend className={styles['quiz-screen__legend']}>How would one say goodbye in Spanish?</legend>
                
                <div className={styles['quiz-screen__answers']}>

                <label className={styles['quiz-screen__answer-label']}>
                    <input className={styles['quiz-screen__answer-input']} type='radio' name='question1' value='A'/>
                    Adios
                </label>

                <label className={styles['quiz-screen__answer-label']}>
                    <input className={styles['quiz-screen__answer-input']} type='radio' name='question1' value='B'/>
                    Hola
                </label >

                <label  className={styles['quiz-screen__answer-label']} >
                    <input className={styles['quiz-screen__answer-input']} type='radio' name='question1' value='C'/>
                    Au Revoir
                </label>

                <label className={styles['quiz-screen__answer-label']} >
                    <input className={styles['quiz-screen__answer-input']} type='radio' name='question1' value='D'/>
                    Salir
                </label>
                </div>
            </fieldset>

            <fieldset className={styles['quiz-screen__question']}>

                <legend className={styles['quiz-screen__legend']}>Which best sell toy of 1983 caused hysteria, resulting in riots breaking in stores?</legend>
                <div className={styles['quiz-screen__answers']}>

                <label className={styles['quiz-screen__answer-label']} >
                    <input className={styles['quiz-screen__answer-input']} type='radio' name='question2' value='A'/>
                    Cabbage Patch Kids
                </label>

                <label className={styles['quiz-screen__answer-label']} >
                    <input className={styles['quiz-screen__answer-input']} type='radio' name='question2' value='B'/>
                    Transformers
                </label>

                <label className={styles['quiz-screen__answer-label']} >
                    <input className={styles['quiz-screen__answer-input']} type='radio' name='question2' value='C'/>
                    Care Bears
                </label>

                <label className={styles['quiz-screen__answer-label']} >
                    <input className={styles['quiz-screen__answer-input']} type='radio' name='question2' value='D'/>
                    Rubik's Cube
                </label>

                </div>
            </fieldset>

            <fieldset className={styles['quiz-screen__question']}>

                <legend className={styles['quiz-screen__legend']}>What is the hottest planet in our Solar System?</legend>
                
                <div className={styles['quiz-screen__answers']}>
                
                <label  className={styles['quiz-screen__answer-label']}>
                    <input className={styles['quiz-screen__answer-input']} type='radio' name='question3' value='A'/>
                    Mercury
                </label>
                <label  className={styles['quiz-screen__answer-label']}>
                    <input className={styles['quiz-screen__answer-input']} type='radio' name='question3' value='B'/>
                    Venus
                </label>

                <label className={styles['quiz-screen__answer-label']}>
                    <input className={styles['quiz-screen__answer-input']} type='radio' name='question3' value='C'/>
                    Mars
                </label>

                <label className={styles['quiz-screen__answer-label']}>
                    <input className={styles['quiz-screen__answer-input']} type='radio' name='question3' value='D'/>
                    Saturn
                </label>

                </div>
            </fieldset>

            <fieldset className={styles['quiz-screen__question']}>

                <legend className={styles['quiz-screen__legend']}>In which country as the ceasar salad invented?</legend>
                
                <div className={styles['quiz-screen__answers']}>

                <label className={styles['quiz-screen__answer-label']}>
                    <input className={styles['quiz-screen__answer-input']} type='radio' name='question4' value='A'/>
                    Italy 
                </label>

                <label className={styles['quiz-screen__answer-label']}> 
                    <input className={styles['quiz-screen__answer-input']} type='radio' name='question4' value='B'/>
                    Portugal
                </label>

                <label className={styles['quiz-screen__answer-label']} >
                    <input className={styles['quiz-screen__answer-input']} type='radio' name='question4' value='C'/>
                    Mexico
                </label>

                <label className={styles['quiz-screen__answer-label']}>
                    <input className={styles['quiz-screen__answer-input']} type='radio' name='question4' value='D'/>
                    France
                </label>

                </div>
            </fieldset>

            <fieldset className={styles['quiz-screen__question']}>

                <legend className={styles['quiz-screen__legend']}>How many hearts does an octopus have?</legend>
                
                <div className={styles['quiz-screen__answers']}>

                <label className={styles['quiz-screen__answer-label']}>
                    <input className={styles['quiz-screen__answer-input']} type='radio' name='question5' value='A'/>
                    one
                </label>

                <label className={styles['quiz-screen__answer-label']}>
                    <input className={styles['quiz-screen__answer-input']} type='radio' name='question5' value='B'/>
                    two
                </label>

                <label className={styles['quiz-screen__answer-label']}>
                    <input className={styles['quiz-screen__answer-input']} type='radio' name='question5' value='C'/>
                    three
                </label>
                <label className={styles['quiz-screen__answer-label']}>
                    <input className={styles['quiz-screen__answer-input']} type='radio' name='question5' value='D'/>
                    four
                </label>

                </div>
            </fieldset>
            </form>
        </section>

        <section className={styles['quiz-screen__actions']}>

            {quizCompleted &&           
                <p className={styles['quiz-screen__results-text']}>You scored 4/5 correct answers.</p>}
           
            <button className={styles['quiz-screen__action-btn']}>

                {quizCompleted ? 'Play again' : 'Check answers'}

            </button>
        </section>
       </> 
     

    )
}