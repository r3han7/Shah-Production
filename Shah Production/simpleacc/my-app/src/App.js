import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from './navbar';
import './navbar.css';
import About from './About';

function App()
{
  
  return (
    
   <>


    <header class="header">
		<h1 class="logo"><a href="#">simple accounts</a></h1>
      <ul class="main-nav">
          <li><a href="home.js">Home</a></li>
          <li><a href="about.js">About</a></li>
          <li><a href="#">profile</a></li>
          <li><a href="#">Contact</a></li>
      </ul>
      
	</header> 

  

  <h1>the company introduction</h1>
    <p1>
    Positive thinking is an attitude or mindset characterized by optimism and happiness. A positive person hopes for the  Although most people consider piranhas to be quite dangerous, they are, except in two main situations, entirely harmless. Piranhas rarely feed on large animals; they eat smaller fish and aquatic plants. When confronted with humans, piranhas’ instinct is to flee, not attack. But there are two situations in which a piranha bite is likely. The first is when a frightened piranha is lifted out of the water—for example, if it has been caught in a fishing net. The second is when the water level in pools where piranhas are living falls too low
    <img src="r.jpg" alt="Italian Trulli"></img>
    <button type="button" onClick={"home"}>home </button>
    </p1>

    <h1>the pillar of company</h1>

   <div>
   <div>
    <p2> Although most people consider piranhas to be quite dangerous, they are, for 
     
    <img src="g.jpg" width="100" height="100" alt=" "></img>
    </p2>
    </div>
    <button type="button" onClick={"about"}>about </button>
    </div>

    <h3>
      the company data
    </h3>
    <p3>
    Once you have mastered the use of topic sentences, you may decide that the topic sentence for a particular paragraph really shouldn’t be the first sentence of the paragraph. This is fine—the topic sentence can actually go at the beginning, middle, or end of a paragraph; what’s important is that it is in there somewhere so that readers know what the main idea of the paragraph is and how it relates back to the thesis of your paper. Suppose that we wanted to start the piranha paragraph with a transition sentence—something that reminds the reader of what happened in the previous paragraph—rather than with the topic sentence. Let’s suppose that the previous paragraph was about all kinds of animals that people are afraid of, like sharks, snakes, and spiders. Our paragraph might look like this (the topic sentence is bold):
    </p3>
    <img src="OIP.jpg" alt=" "></img>
    <button type="button" onClick={"profile"}>profile </button>
<body>

<footer class="footer">
  <div class="waves">
    <div class="wave" id="wave1"></div>
    <div class="wave" id="wave2"></div>
    <div class="wave" id="wave3"></div>
    <div class="wave" id="wave4"></div>
  </div>
  <ul class="social-icon">
    <li class="social-icon__item"><a class="social-icon__link" href="#">
        <ion-icon name="logo-facebook"></ion-icon>
      </a></li>
    <li class="social-icon__item"><a class="social-icon__link" href="#">
        <ion-icon name="logo-twitter"></ion-icon>
      </a></li>
    <li class="social-icon__item"><a class="social-icon__link" href="#">
        <ion-icon name="logo-linkedin"></ion-icon>
      </a></li>
    <li class="social-icon__item"><a class="social-icon__link" href="#">
        <ion-icon name="logo-instagram"></ion-icon>
      </a></li>
  </ul>
  <ul class="menu">
    <li class="menu__item"><a class="menu__link" href="#">Home</a></li>
    <li class="menu__item"><a class="menu__link" href="#">About</a></li>
    <li class="menu__item"><a class="menu__link" href="#">Services</a></li>
    <li class="menu__item"><a class="menu__link" href="#">Team</a></li>
    <li class="menu__item"><a class="menu__link" href="#">Contact</a></li>

  </ul>
  
<ul class="wrapper">
  <li class="icon facebook">
    <span class="tooltip">Facebook</span>
    <span><i class="fab fa-facebook-f"></i></span>
  </li>
  <li class="icon twitter">
    <span class="tooltip">Twitter</span>
    <span><i class="fab fa-twitter"></i></span>
  </li>
  <li class="icon instagram">
    <span class="tooltip">Instagram</span>
    <span><i class="fab fa-instagram"></i></span>
  </li>
  <li class="icon github">
    <span class="tooltip">Github</span>
    <span><i class="fab fa-github"></i></span>
  </li>
  <li class="icon youtube">
    <span class="tooltip">Youtube</span>
    <span><i class="fab fa-youtube"></i></span>
  </li>
</ul>
  <p>&copy;2021 Nadine Coelho | All Rights Reserved</p>
</footer>
<script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
<script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>
  </body>


</>

  );
}
const value= ReactDOM.createRoot(document.getElementById('root'));
value.render(<Navbar/>);

const data= ReactDOM.createRoot(document.getElementById('root'));
data.render(<About/>);

export default App;