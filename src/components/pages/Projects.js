import React from 'react';
import quiz from "../../images/Quiz.png"
import starwars from "../../images/Star-Wars.png"
import radar from "../../images/radar-menu.png"

export default function Projects() {
  return (
    <div>
      <h1>Projects</h1>
      <section class="quiz">
        Coding Quiz
      <a href="https://rtleib.github.io/code-quiz-challenge-04/">
      <img class="img-responsive" src={quiz} alt="picture of quiz" width="330" height="170"/>
      </a>
      <a href="https://github.com/rtleib/code-quiz-challenge-04" target="_blank">
      <button>GitHub Repo</button>
      </a>
      <a href="https://rtleib.github.io/code-quiz-challenge-04/" target="_blank">
      <button>Deployed Page</button>
      </a>
      </section>
      <section class="starwars">
      Star Wars Weekly Scheduler
      <a href="https://rtleib.github.io/Star-Wars-Weekly-Scheduler/">
      <img class="img-responsive" src={starwars} alt="picture of star wars weekly scheduler"  width="330" height="170"/>
      </a>
      <a href="https://github.com/rtleib/Star-Wars-Weekly-Scheduler" target="_blank">
      <button>GitHub Repo</button>
      </a>
      <a href="https://rtleib.github.io/Star-Wars-Weekly-Scheduler/" target="_blank">
      <button>Deployed Page</button>
      </a>
      </section>
      <section class="radar">
      Radar Menu
      <a href="https://radar-menu.herokuapp.com/">
      <img class="img-responsive" src={radar} alt="picture of radar menu"  width="330" height="170"/>
      </a>
      <a href="https://github.com/rtleib/radar-menu" target="_blank">
      <button>GitHub Repo</button>
      </a>
      <a href="https://radar-menu.herokuapp.com/" target="_blank">
      <button>Deployed Page</button>
      </a>
      </section>
    </div>
  );
}
