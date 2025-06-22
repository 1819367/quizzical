import { useState, useEffect } from 'react'
import styles from './QuizScreen.module.css'
import clsx from 'clsx' 
import Questions from '../Questions/Questions';

export default function QuizScreen () {
    const [ quizCompleted, setQuizCompleted ] = useState(false);
    const [ questions, setQuestions ] = useState([])

    // fetch, extract and save the questions array
    useEffect(() => {
        fetch('https://opentdb.com/api.php?amount=5&type=multiple')
            .then(res => res.json())
            .then(data => {``
                // Defensive check
                if (data && Array.isArray(data.results)) {
                    setQuestions(
                        data.results.map((question) => ({
                            question: question.question,
                            incorrect_answers: question.incorrect_answers,
                            correct_answer: question.correct_answer,
                            selected_answer: undefined
                        }))
                    );
                } else {
                    setQuestions([]);
                    console.error("No questions found or API error:", data);
                }
            })
            .catch(error => {
                setQuestions([]);
                console.error("Fetch error:", error);
            });
    }, []);

    return (
       <>
        <section>
            <form className={clsx(styles['quiz-screen__form'])}>
                <Questions
                    questions={questions}
                />
            </form>
        </section>

        <section className={clsx(styles['quiz-screen__actions'])}>

            {quizCompleted &&           
            <p className={clsx(styles['quiz-screen__results-text'])}>You scored 4/5 correct answers.</p>}
           
            <button className={clsx(styles['quiz-screen__action-btn'])}>

             {quizCompleted ? 'Play again' : 'Check answers'}

            </button>
        </section>
       </> 
     

    )
}