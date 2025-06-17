import React from 'react'
import './App.css'

export default function App() {

  return (
    <main>
      <section className='start-screen'>
          <h1>Quizzical</h1>
          <p class='intro-text'>Click the button to begin.</p>
          <button class='start-btn'>Start Quiz</button>
      </section>

      <section>
        <form class='quiz-form'>
          <fieldset class='question-block'>
            <legend>How would one say goodbye in Spanish?</legend>
            <div class='answers'>
              <label>
                <input type='radio' name='question1' value='A'/>
                Adios
              </label>
              <label>
                <input type='radio' name='question1' value='B'/>
                Hola
              </label>
              <label>
                <input type='radio' name='question1' value='C'/>
                Au Revoir
              </label>
              <label>
                <input type='radio' name='question1' value='D'/>
                Salir
              </label>
            </div>
          </fieldset>

          <fieldset class='question-block'>
            <legend>Which best sell toy of 1983 caused hysteria, resulting in riots breaking in stores?</legend>
            <div class='answers'>
              <label>
                <input type='radio' name='question2' value='A'/>
                Cabbage Patch Kids
              </label>
              <label>
                <input type='radio' name='question2' value='B'/>
                Transformers
              </label>
              <label>
                <input type='radio' name='question2' value='C'/>
                Care Bears
              </label>
              <label>
                <input type='radio' name='question2' value='D'/>
                Rubik's Cube
              </label>
            </div>
          </fieldset>

          <fieldset class='question-block'>
            <legend>What is the hottest planet in our Solar System?</legend>
            <div class='answers'>
              <label>
                <input type='radio' name='question3' value='A'/>
                Mercury
              </label>
              <label>
                <input type='radio' name='question3' value='B'/>
                Venus
              </label>
              <label>
                <input type='radio' name='question3' value='C'/>
                Mars
              </label>
              <label>
                <input type='radio' name='question3' value='D'/>
                Saturn
              </label>
            </div>
          </fieldset>

          <fieldset class='question-block'>
            <legend>In which country as the ceasar salad invented?</legend>
            <div class='answers'>
              <label>
                <input type='radio' name='question4' value='A'/>
                Italy
              </label>
              <label>
                <input type='radio' name='question4' value='B'/>
                Portugal
              </label>
              <label>
                <input type='radio' name='question4' value='C'/>
                Mexico
              </label>
              <label>
                <input type='radio' name='question4' value='D'/>
                France
              </label>
            </div>
          </fieldset>

          <fieldset class='question-block'>
            <legend>How many hearts does an octopus have?</legend>
            <div class='answers'>
              <label>
                <input type='radio' name='question5' value='A'/>
                one
              </label>
              <label>
                <input type='radio' name='question5' value='B'/>
                two
              </label>
              <label>
                <input type='radio' name='question5' value='C'/>
                three
              </label>
              <label>
                <input type='radio' name='question5' value='D'/>
                four
              </label>
            </div>
          </fieldset>
        </form>
      </section>

      <section class='results-screen'>
        <h2>You scored 4/5 correct answers.</h2>
        <button class='play-again-btn'>Play Again</button>
      </section>

    </main>
  )
}

