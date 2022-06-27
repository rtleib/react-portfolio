import React from 'react';
import quiz from "../../images/Quiz.png"
import starwars from "../../images/Star-Wars.png"
import radar from "../../images/radar-menu.png"

export default function Projects() {
  return (
    <div>
      <h1>Projects</h1>
      <section>
      <a href="https://rtleib.github.io/code-quiz-challenge-04/">
      <img class="img-responsive" src={quiz} alt="picture of quiz" width="330" height="170"/>
      </a>
      </section>
      <section>
      <a href="https://rtleib.github.io/Star-Wars-Weekly-Scheduler/">
      <img class="img-responsive" src={starwars} alt="picture of star wars weekly scheduler"  width="330" height="170"/>
      </a>
      </section>
      <section>
      <a href="https://radar-menu.herokuapp.com/">
      <img class="img-responsive" src={radar} alt="picture of radar menu"  width="330" height="170"/>
      </a>
      </section>
    </div>
  );
}
