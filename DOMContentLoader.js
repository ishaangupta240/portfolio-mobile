document.addEventListener("DOMContentLoaded", () => {
    const counter = document.querySelector(".counter");
    const loader = document.querySelector(".loader");
    const elementsToAnimate = document.querySelectorAll(
      "p:not(.intro), .logo h1"
    );
    const introTag  = document.querySelector(".intro");
    let animationIntialized = false;
  
    function shuffleText(finalText, duration, callback){
      let i = 0;
      const shuffleInterval = setInterval(() => {
        if(i < duration){
          counter.innerHTML = Math.random().toString(36).substring(2,8);
          i++;
        }
        else{
          clearInterval(shuffleInterval);
          counter.innerHTML = finalText;
          if(callback) callback();
        }
      }, 100)
    }
  
  
  function removeLetters(){
    let text = counter.innerHTML;
    const removeInterval = setInterval(()=>{
      if(text.length > 0){
        text = text.substring(0, text.length - 1);
        counter.innerHTML = text;
      }
      else{
        clearInterval(removeInterval);
        
        if(!animationIntialized){
          animateElements();
          animateIntroTag();
        }
        fadeOutLoader();
      }
    }, 100);
  }
  
  function animateElements(){
    if(animationIntialized) return;
    animationIntialized = true;
  
    elementsToAnimate.forEach((element) =>{
      let originalText = element.textContent;
      let index = 0;
  
      const shuffleElement = setInterval(() => {
        if (index < originalText.length){
          let shuffledText = "";
          for(let i = 0; i<=index; i++){
            shuffledText +=
            i < index ? originalText[i] : Math.random().toString(36)[2];
          }
          element.textContent = 
            shuffledText + originalText.substring(index + 1);
          index++;
        }
        else{
          clearInterval(shuffleElement);
          element.textContent = originalText;
        }
      }, 100);
    } );
  }
  
  function animateIntroTag(){
    let originalText = introTag.textContent;
    let currentText = "";
    let index = 0;
  
    const revealText = setInterval(()=> {
      if(index < originalText.length){
        currentText += originalText[index];
        introTag.textContent = currentText;
        index++;
      }
      else {
        clearInterval(revealText);
      }
    }, 20);
  }
  
  function animateMasks() {
    const masks = document.querySelectorAll(".hero-img .mask");
    const clipPathValues = [
        "polygon(0% 0%, 5.5% 0%, 5.5% 100%, 0% 100%)",
        "polygon(5% 0%, 10.5% 0%, 10.5% 100%, 5% 100%)",
        "polygon(10% 0%, 15.5% 0%, 15.5% 100%, 10% 100%)",
        "polygon(15% 0%, 20.5% 0%, 20.5% 100%, 15% 100%)",
        "polygon(20% 0%, 25.5% 0%, 25.5% 100%, 20% 100%)",
        "polygon(25% 0%, 30.5% 0%, 30.5% 100%, 25% 100%)",
        "polygon(30% 0%, 35.5% 0%, 35.5% 100%, 30% 100%)",
        "polygon(35% 0%, 40.5% 0%, 40.5% 100%, 35% 100%)",
        "polygon(40% 0%, 45.5% 0%, 45.5% 100%, 40% 100%)",
        "polygon(45% 0%, 50.5% 0%, 50.5% 100%, 45% 100%)",
        "polygon(50% 0%, 55.5% 0%, 55.5% 100%, 50% 100%)",
        "polygon(55% 0%, 60.5% 0%, 60.5% 100%, 55% 100%)",
        "polygon(60% 0%, 65.5% 0%, 65.5% 100%, 60% 100%)",
        "polygon(65% 0%, 70.5% 0%, 70.5% 100%, 65% 100%)",
        "polygon(70% 0%, 75.5% 0%, 75.5% 100%, 70% 100%)",
        "polygon(75% 0%, 80.5% 0%, 80.5% 100%, 75% 100%)",
        "polygon(80% 0%, 85.5% 0%, 85.5% 100%, 80% 100%)",
        "polygon(85% 0%, 90.5% 0%, 90.5% 100%, 85% 100%)",
        "polygon(90% 0%, 95.5% 0%, 95.5% 100%, 90% 100%)",
        "polygon(95% 0%, 100% 0%, 100% 100%, 95% 100%)",
    ];
  
    setTimeout(()=> {
      masks.forEach((mask,index) => {
        gsap.to(mask, {
          clipPath: clipPathValues[index % clipPathValues.length],
          duration: 1,
          delay: index * 0.1,
        });
      });
    });
  }
  
  gsap.to(counter, {
    innerHTML: 100 +"%",
    duration: 2.5,
    snap: "innerHTML",
    ease: "none",
    onComplete: () => {
      setTimeout(
        () =>
          shuffleText("ISAN/24", 5, () =>{
            setTimeout(removeLetters, 800);
          }),
          800
      );
    },
  });
  
  function fadeOutLoader () {
    gsap.to(loader, {
      opacity: 0,
      pointerEvents: "none",
      duration: 1,
      onComplete: () => {
        animateMasks();
      },
    });
  }
  });
  
  