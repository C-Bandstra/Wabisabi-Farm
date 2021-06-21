import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/app/App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router } from 'react-router-dom'

ReactDOM.render(
  <Router>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Router>,
  document.getElementById('root')
);

const pulseElements = document.querySelectorAll('.animation');

pulseElements.type = "pulse"

const expandElements = document.querySelectorAll('.animation-2');

expandElements.type = "expand"

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    let element = entry.target;
    entry.isIntersecting ?
    element.classList.add(element.dataset.animation) :
    element.classList.remove(element.dataset.animation);
  });
});

const animations = [pulseElements, expandElements];

animations.forEach(animation => {
  animation.forEach(element => {

    element.dataset.animation = animation.type;
    observer.observe(element);

  })
});

reportWebVitals();
