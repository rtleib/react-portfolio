import React from 'react';
import quiz from "../../images/Quiz.png"

export default function Projects() {
  return (
    <div>
      <h1>Projects Page</h1>
      <section>
      <a href="https://rtleib.github.io/code-quiz-challenge-04/">
      <p class="img-responsive" src={quiz} alt="picture of quiz" width="330" height="170"/>
      </a>
        <li>
        <a href="https://rtleib.github.io/Star-Wars-Weekly-Scheduler/">
          </a>
          </li>
          <li>
          <a href="https://radar-menu.herokuapp.com/">
            </a>
            </li>
      </section>
    </div>
  );
}
