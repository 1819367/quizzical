import styles from './Questions.module.css';
import { decode } from "html-entities";
import clsx from 'clsx';;
import { nanoid } from 'nanoid' // <-- Import nanoid

export default function Questions({questions, onAnswerSelect, quizCompleted}) {
    if (!questions.length) {
        return <div>Loading questions ...</div>
    }

    return (
        <>
            {questions.map((data, idx) => (
                <fieldset className={clsx(styles['question__fieldset'])} key={idx}>
                    <legend className={clsx(styles['question__legend'])}>
                        {decode(data.question)} 
                    </legend>  
                    <div className={clsx(styles['question__answers'])}>
                        {data.all_answers.map((answer, aIdx) => {
                            const inputId = nanoid(); // Generate a unique ID for each answer
                            return (
                                <label 
                                    key={inputId} //set key to the input's id
                                    htmlFor={inputId} // <-- Set htmlFor to the input's id
                                    className={clsx(
                                        styles['question__answer-label'],
                                        {   
                                            [styles['answer-checked']]: !quizCompleted && answer === data.selected_answer,
                                            [styles['answer-correct']]: quizCompleted && answer === data.correct_answer,
                                            [styles['answer-incorrect']]: 
                                                quizCompleted && 
                                                answer === data.selected_answer &&
                                                answer !== data.correct_answer
                                        }
                                    )} 
                                >
                                    <input 
                                        id={inputId} // <-- Assign the unique id here
                                        className={clsx(styles['question__answer-input'])} 
                                        type='radio' 
                                        name={`question${idx + 1}`}
                                        value={answer}
                                        checked={data.selected_answer === answer}
                                        onChange={() => onAnswerSelect(idx, answer)}
                                    />
                                    {decode(answer)}
                                </label>
                            );
                        })}    
                    </div>
                </fieldset>
            ))}
        </>
    );
}