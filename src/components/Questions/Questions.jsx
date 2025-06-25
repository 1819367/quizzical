import styles from './Questions.module.css'
import { decode } from "html-entities"
import clsx from 'clsx'

export default function Questions({questions, onAnswerSelect, quizCompleted}) {
    // console.log(questions)
    if (!questions.length) {
        return <div>Loading questions ...</div>
    }

    return (
        <>
            {questions.map((data, idx) => {

                return (
                    <fieldset className={clsx(styles['question__fieldset'])}  key={idx}>

                        <legend className={clsx(styles['question__legend'])}>
                            {decode(data.question)} 
                        </legend>  
                        <div className={clsx(styles['question__answers'])}>
                            {data.all_answers.map((answer, aIdx) => (
                                <label 
                                    className={clsx(
                                        styles['question__answer-label'],
                                        {   //highlight the checked answer
                                            [styles['answer-checked']]: !quizCompleted && answer === data.selected_answer,
                                            //highlight the correct answer after the quiz is completed.
                                            [styles['answer-correct']]: quizCompleted && answer === data.correct_answer,
                                            //highlight the user's wrong selction after quiz is completed.
                                            [styles['answer-incorrect']]: 
                                                quizCompleted && 
                                                answer === data.selected_answer &&
                                                answer !== data.correct_answer
                                        }
                                    )} 
                                    key={aIdx}
                                >
                                    <input 
                                        className={clsx(styles['question__answer-input'])} 
                                        type='radio' 
                                        name={`question${idx + 1}`}
                                        value={answer}
                                        checked={data.selected_answer === answer}
                                        onChange={() => onAnswerSelect(idx, answer)}
                                    />
                                    {decode(answer)}
                                </label>
                    ))}    
                    </div>
                </fieldset>
                );
            })}
        </>
    );
}