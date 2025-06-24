import { useState, useEffect } from 'react'
import styles from './QuizScreen.module.css'
import clsx from 'clsx' 
import Questions from '../Questions/Questions';

export default function QuizScreen () {
    const [ quizCompleted, setQuizCompleted ] = useState(false);
    const [ questions, setQuestions ] = useState([])

    //add a handler function to update selected answer
    function handleAnswerSelect(questionIndex, answer) {
        setQuestions(prevQuestions => {
            return prevQuestions.map((q, idx) => {
                if(idx === questionIndex) {
                    return {
                        ...q,
                        selected_answer: answer
                    };
                } else {
                    return q;
                }
            });
        })
    }
 
    // Shuffle when the Questions are set
    function shuffle(array) {
        return array
            .map(value => ({ value, sort: Math.random() }))
            .sort((a, b) => a.sort - b.sort)
            .map(({ value }) => value);
    }

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
                            all_answers: shuffle([...question.incorrect_answers, question.correct_answer]),
                            selected_answer: null
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
                    onAnswerSelect={handleAnswerSelect}
                />
            </form>
        </section>

        <section className={clsx(styles['quiz-screen__actions'])}>

            {quizCompleted &&           
            <p className={clsx(styles['quiz-screen__results-text'])}>You scored 4/5 correct answers.</p>}
           
            <button 
                className={clsx(styles['quiz-screen__action-btn'])}
                onClick={e => {
                    e.preventDefault();
                    setQuizCompleted(prev => !prev) //placeholder handler to toggle quizCompleted
                }}
                >

             {quizCompleted ? 'Play again' : 'Check answers'}

            </button>
        </section>
       </> 
     

    )
}