
//Projects Randomizer
const availableLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

let animationInterval = null;

document.getElementById("proj-btn").onmouseover = event => {  
  let animationIteration = 0;
  const targetElement = document.getElementById("project-text");
  
  clearInterval(animationInterval);
  
  animationInterval = setInterval(() => {
    targetElement.innerText = targetElement.innerText
      .split("")
      .map((letter, index) => {
        if(index < animationIteration) {
          return targetElement.dataset.value[index];
        }
      
        return availableLetters[Math.floor(Math.random() * 26)];
      })
      .join("");
    
    if(animationIteration >= targetElement.dataset.value.length){ 
      clearInterval(animationInterval);
    }
    
    animationIteration += 1;
  }, 30);
}


//Info Randomizer
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

let interval = null;

document.getElementById("info-btn").onmouseover = event => {  
  let iteration = 0;
  const targetElement = document.getElementById("info-text");
  
  clearInterval(interval);
  
  interval = setInterval(() => {
    targetElement.innerText = targetElement.dataset.value
      .split("")
      .map((letter, index) => {
        if(index < iteration) {
          return targetElement.dataset.value[index];
        }
      
        return letters[Math.floor(Math.random() * 26)];
      })
      .join("");
    
    if(iteration >= targetElement.dataset.value.length){ 
      clearInterval(interval);
    }
    
    iteration += 0.75;
  }, 30);
}



//Visit Randomizer
const letterPool = "!@#$%&?";

let animationIntervalId = null;

document.getElementById("visit-btn").onmouseover = mouseOverEvent => {  
  let currentIteration = 0;
  
  clearInterval(animationIntervalId);
  
  animationIntervalId = setInterval(() => {
    mouseOverEvent.target.innerText = mouseOverEvent.target.innerText
      .split("")
      .map((letter, index) => {
        if(index < currentIteration) {
          return mouseOverEvent.target.dataset.value[index];
        }
      
        return letterPool[Math.floor(Math.random() * 7)];
      })
      .join("");
    
    if(currentIteration >= mouseOverEvent.target.dataset.value.length){ 
      clearInterval(animationIntervalId);
    }
    
    currentIteration += 0.7;
  }, 30);
};

//Project Name Randomizer
const letterPool1 = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

let animationTimer = null;

document.getElementById("project-id").onmouseover = event => {  
  let iteration = 0;
  
  clearInterval(animationTimer);
  
  animationTimer = setInterval(() => {
    event.target.innerText = event.target.innerText
      .split("")
      .map((letter, index) => {
        if(index < iteration) {
          return event.target.dataset.value[index];
        }
      
        return letterPool1[Math.floor(Math.random() * 26)];
      })
      .join("");
    
    if(iteration >= event.target.dataset.value.length){ 
      clearInterval(animationTimer);
    }
    
    iteration += 0.75;
  }, 30);
}

const projectNameLetterPool = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

let projectNameAnimationTimer = null;

document.getElementById("prev").onmouseover = projectNameEvent => {  
  let projectNameIteration = 0;
  
  clearInterval(projectNameAnimationTimer);
  
  projectNameAnimationTimer = setInterval(() => {
    projectNameEvent.target.innerText = projectNameEvent.target.innerText
      .split("")
      .map((projectNameLetter, index) => {
        if(index < projectNameIteration) {
          return projectNameEvent.target.dataset.value[index];
        }
      
        return projectNameLetterPool[Math.floor(Math.random() * 26)];
      })
      .join("");
    
    if(projectNameIteration >= projectNameEvent.target.dataset.value.length){ 
      clearInterval(projectNameAnimationTimer);
    }
    
    projectNameIteration += 0.38;
  }, 30);
}

// Updated Project Name Randomizer
const projectTitleLetterPool = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

let projectTitleAnimationTimer = null;

document.getElementById("next").onmouseover = projectTitleEvent => {  
  let projectTitleIteration = 0;
  
  clearInterval(projectTitleAnimationTimer);
  
  projectTitleAnimationTimer = setInterval(() => {
    projectTitleEvent.target.innerText = projectTitleEvent.target.innerText
      .split("")
      .map((projectTitleLetter, index) => {
        if(index < projectTitleIteration) {
          return projectTitleEvent.target.dataset.value[index];
        }
      
        return projectTitleLetterPool[Math.floor(Math.random() * 26)];
      })
      .join("");
    
    if(projectTitleIteration >= projectTitleEvent.target.dataset.value.length){ 
      clearInterval(projectTitleAnimationTimer);
    }
    
    projectTitleIteration += 0.38;
  }, 30);
}
