import styles from './StartScreen.module.css'
import clsx from 'clsx'

export default function StartScreen () {
    return (
        <section className={clsx(styles['start-screen'])}>
          <h1 className={clsx(styles['start-screen__title'])}>Quizzical</h1>
          <p className={clsx(styles['start-screen__intro-text'])}>Click the button to begin!</p>
          <button className={clsx(styles['start-screen__btn'])}>Start quiz</button>
        </section>
    )
}