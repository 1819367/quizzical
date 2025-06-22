import styles from './Questions.module.css'
import questionData from '../../Questions' //for practice
import { decode } from "html-entities"
import clsx from 'clsx'

export default function Questions({questions}) {
    // console.log(questions)
    if (!questions.length) {
        return <div>Loading questions ...</div>
    }

    return (
        <>
            {questions.map((data, idx) => {
                // combine correct and incorrect answers
                const allAnswers = [...data.incorrect_answers, data.correct_answer];
                // Shuffle the answers
                allAnswers.sort(() => Math.random() - 0.5);

                return (
                    <fieldset className={clsx(styles['question__fieldset'])}  key={idx}>

                        <legend className={clsx(styles['question__legend'])}>
                            {decode(data.question)}
                        </legend>  
                        <div className={clsx(styles['question__answers'])}>
                            {allAnswers.map((answer, aIdx) => (
                                <label className={clsx(styles['question__answer-label'])} key={aIdx}>
                                    <input 
                                        className={clsx(styles['question__answer-input'])} 
                                        type='radio' 
                                        name={`question${idx + 1}`}
                                        value={answer}
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