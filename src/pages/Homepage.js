import React, {Component} from 'react';
import "./style.css";

class Homepage extends Component {

    state= {
    }

  render(){
  
    return (
        <>
        <header class='masthead'>
        <p class='masthead-intro'>Hi I'm</p>
        <h1 class='masthead-heading'>Danielli Franquim</h1>
    </header>
    <section class="details">

      <h1>Introduction</h1>
      <p> Curiosity is what drives me to learn new things.</p>

      <h1>GitHub Account</h1>
      <h3>GitHub</h3>
      <a link href="https://github.com/Elli360">Check it out!</a>

      <h1>Linkedin Account</h1>
      <h3>Linkedin</h3>
      <a link href="http://linkedin.com/in/danielli-franquim-85224570">Check it out!</a>

      <h1>PROJECTS</h1>

      <h2>Work Day Scheduler</h2>
      <h3>Scheduler</h3>
      <a link href="https://elli360.github.io/Workdayscheduler/">Check it out!</a>

      <h2>Team Project 1</h2>
      <h3>Mask Free Adventures</h3>
      <a link href="https://elli360.github.io/MaskFreeAdventures/">Check it out!</a>

      <h2>Team Project 2</h2>
      <h3>Da.Mo.Jo Virtual CLoset</h3>
      <a link href="https://project2-damojo.herokuapp.com/">Check it out!</a>

    </section>
    <footer class="footer text-right">
        <p class="text-muted small mb-0">Copyright2020</p>
    </footer>
    </>
    );
  }
}

export default Homepage;