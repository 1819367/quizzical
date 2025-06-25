import { useState, useEffect } from 'react'
import styles from './QuizScreen.module.css'
import clsx from 'clsx' 
import Questions from '../Questions/Questions'

export default function QuizScreen ({ returnToStart }) {
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
 
    // Calculate the score based on the question
    const score = questions.filter(q => q.selected_answer === q.correct_answer).length;

    // Shuffle when the Questions are set
    function shuffle(array) {
        return array
            .map(value => ({ value, sort: Math.random() }))
            .sort((a, b) => a.sort - b.sort)
            .map(({ value }) => value);
    }

    // Extract fetch logic to a function
    function fetchQuestions() {
        fetch('https://opentdb.com/api.php?amount=5&&category=12&difficulty=medium&type=multiple')
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
    }
    //call fetchQuestions in UseEffect (on Mount)
    useEffect(() => {
        fetchQuestions();
    }, []);

    return (
       <>
        <section>
            <form className={clsx(styles['quiz-screen__form'])}>
                <Questions
                    questions={questions}
                    onAnswerSelect={handleAnswerSelect}
                    quizCompleted={quizCompleted}
                />
            </form>
        </section>

        <section className={clsx(styles['quiz-screen__actions'])}>

            {quizCompleted &&           
            <p className={clsx(styles['quiz-screen__results-text'])}>You scored {score}/{questions.length} correct answers.</p>}
           
            <button 
                className={clsx(styles['quiz-screen__action-btn'])}
                onClick={e => {
                    e.preventDefault();
                    // setQuizCompleted(prev => !prev) //placeholder handler to toggle quizCompleted
                    if (quizCompleted) {
                        setQuizCompleted(false); //reset state to false
                        fetchQuestions(); //fetch new quetions
                    } else {
                        setQuizCompleted(true); //for 'checked answers'
                    }
                }}
                >
             {quizCompleted ? 'Play again' : 'Check answers'}
                </button>

            {quizCompleted && (
                <button
                    className={clsx(styles['quiz-screen__return-btn'])}
                    onClick={() => {
                    setQuizCompleted(false);
                    setQuestions([]);
                    returnToStart();
                    }}
                >
                     Return to Start
                </button>
        )}

        </section>
       </> 
     

    )
}