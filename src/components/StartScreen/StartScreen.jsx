import './StartScreen.module.css'
import clsx from 'clsx'

export default function StartScreen () {
    return (
        <section className='section-start-screen'>
          <h1>Quizzical</h1>
          <p className='intro-text'>Click the button to begin.</p>
          <button className='start-btn'>Start Quiz</button>
        </section>
    )
}