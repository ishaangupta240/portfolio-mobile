const values = [
    "BLEND DESIGN",
    "REWORK RENDER",
    "VIDEO EDITING",
    "ISAN",
    "TECHFEST 2017",
    "FRAME FUSION"
  ];
  
  
  
  let currentIndex = 0;
  
  const ProjectDataValue = document.getElementById("project-id");
  const ProjectLink = document.getElementById("project-link");
  const yearIndex = document.getElementById("year-info");
  const roleIndex = document.getElementById("role-info");
  const awardsIndex = document.getElementById("awards-info");
  const agencyIndex = document.getElementById("agency-info");
  const projectCounter = document.getElementById("project-counter-id");
  const pageBar = document.getElementById("progress");

  
  if (currentIndex===0){
    ProjectDataValue.innerHTML = "BLEND DESIGN";
    ProjectDataValue.setAttribute("data-value","BLEND DESIGN");
    ProjectLink.setAttribute("href", "/Blend Design.html");
    yearIndex.innerHTML = "2023";
    roleIndex.innerHTML = "3D/ DESIGN";
    awardsIndex.innerHTML = "SECOND";
    agencyIndex.innerHTML = "CODE WEEK BY APEEJAY SCHOOL NOIDA";
    projectCounter.innerHTML = "P /01";
  }
  
  
  const paragraph = document.getElementById('project-id');
  
  let isAnimating = false;

  function updateParagraph() {
    if(isAnimating || isAnimating2 || isAnimating3 || isAnimating4 || isAnimating5 || isAnimating6 || isAnimating7 || isAnimating8 || isAnimating9 || isAnimating10 || isAnimating11 || isAnimating12) return;
    
    currentIndex = (currentIndex + 1) % values.length;
    pageProgress = (currentIndex) % values.length;
    const projectDataValue = document.getElementById("project-id");
  
  if (currentIndex===0){
    ProjectDataValue.innerHTML = "BLEND DESIGN";
    ProjectDataValue.setAttribute("data-value","BLEND DESIGN");
    ProjectLink.setAttribute("href", "/Blend Design.html");
    yearIndex.innerHTML = "2023";
    roleIndex.innerHTML = "3D/ DESIGN";
    awardsIndex.innerHTML = "SECOND";
    agencyIndex.innerHTML = "CODE WEEK BY APEEJAY SCHOOL NOIDA";
    projectCounter.innerHTML = "P /01";
    animateMasksOut6(".project-a-tag .hero-img .maskP5");
  }
  
  if (currentIndex===1){
    ProjectDataValue.innerHTML = "REWORK RENDER";
    ProjectDataValue.setAttribute("data-value","REWORK RENDER");
    ProjectLink.setAttribute("href", "/Blend Design.html");
    yearIndex.innerHTML = "2023";
    roleIndex.innerHTML = "VIDEO EDITING";
    awardsIndex.innerHTML = "HONORABLE MENTION";
    agencyIndex.innerHTML = "WARTEX #9.0";
    projectCounter.innerHTML = "P /02";
    animateMasksOut(".project-a-tag .hero-img .mask");
  }
  
  if (currentIndex===2){
    ProjectDataValue.innerHTML = "VIDEO EDITING";
    ProjectDataValue.setAttribute("data-value","VIDEO EDITING");
    ProjectLink.setAttribute("href", "/Blend Design.html");
    yearIndex.innerHTML = "2023";
    roleIndex.innerHTML = "VIDEO EDITING";
    awardsIndex.innerHTML = "THIRD";
    agencyIndex.innerHTML = "CODE WEEK BY APEEJAY SCHOOL NOIDA";
    projectCounter.innerHTML = "P /03";
    animateMasksOut2(".project-a-tag .hero-img .maskP1");
  }
  
  if (currentIndex===3){
    ProjectDataValue.innerHTML = "BLEND DESIGN";
    ProjectDataValue.setAttribute("data-value","BLEND DESIGN");
    ProjectLink.setAttribute("href", "/Blend Design.html");
    yearIndex.innerHTML = "2023";
    roleIndex.innerHTML = "3D/ DESIGN";
    awardsIndex.innerHTML = "SECOND";
    agencyIndex.innerHTML = "CODE WEEK BY APEEJAY SCHOOL NOIDA";
    projectCounter.innerHTML = "P /04";
    animateMasksOut3(".project-a-tag .hero-img .maskP2")
  }
  
  if (currentIndex===4){
    ProjectDataValue.innerHTML = "BLEND DESIGN";
    ProjectDataValue.setAttribute("data-value","BLEND DESIGN");
    ProjectLink.setAttribute("href", "/Blend Design.html");
    yearIndex.innerHTML = "2023";
    roleIndex.innerHTML = "3D/ DESIGN";
    awardsIndex.innerHTML = "SECOND";
    agencyIndex.innerHTML = "CODE WEEK BY APEEJAY SCHOOL NOIDA";
    projectCounter.innerHTML = "P /05";
    animateMasksOut4(".project-a-tag .hero-img .maskP3");
  }
  
  if (currentIndex===5){
    ProjectDataValue.innerHTML = "BLEND DESIGN";
    ProjectDataValue.setAttribute("data-value","BLEND DESIGN");
    ProjectLink.setAttribute("href", "/Blend Design.html");
    yearIndex.innerHTML = "2023";
    roleIndex.innerHTML = "3D/ DESIGN";
    awardsIndex.innerHTML = "SECOND";
    agencyIndex.innerHTML = "CODE WEEK BY APEEJAY SCHOOL NOIDA";
    projectCounter.innerHTML = "P /06";
    animateMasksOut5(".project-a-tag .hero-img .maskP4");
    }

    if(pageProgress === 0){
      pageBar.style.width = "16.66666667%"
    }
    
    if(pageProgress === 1){
      pageBar.style.width = "33.33333334%"
    }
    
    if(pageProgress === 2){
      pageBar.style.width = "50.00000001%"
    }
    
    if(pageProgress === 3){
      pageBar.style.width = "66.66666668%"
    }
    
    if(pageProgress === 4){
      pageBar.style.width = "83.33333335%"
    }
    
    if(pageProgress === 5){
      pageBar.style.width = "100%"
    }
  }


  function animateMasksOut(masksPath) {
    isAnimating = true;
    const masks = document.querySelectorAll(masksPath);
    const clipPathValues = [
      "polygon(5% 0%, 5% 0%, 5% 100%, 5% 100%)",
      "polygon(10% 0%, 10% 0%, 10% 100%, 10% 100%)",
      "polygon(15% 0%, 15% 0%, 15% 100%, 15% 100%)",
      "polygon(20% 0%, 20% 0%, 20% 100%, 20% 100%)",
      "polygon(25% 0%, 25% 0%, 25% 100%, 25% 100%)",
      "polygon(30% 0%, 30% 0%, 30% 100%, 30% 100%)",
      "polygon(35% 0%, 35% 0%, 35% 100%, 35% 100%)",
      "polygon(40% 0%, 40% 0%, 40% 100%, 40% 100%)",
      "polygon(45% 0%, 45% 0%, 45% 100%, 45% 100%)",
      "polygon(50% 0%, 50% 0%, 50% 100%, 50% 100%)",
      "polygon(55% 0%, 55% 0%, 55% 100%, 55% 100%)",
      "polygon(60% 0%, 60% 0%, 60% 100%, 60% 100%)",
      "polygon(65% 0%, 65% 0%, 65% 100%, 65% 100%)",
      "polygon(70% 0%, 70% 0%, 70% 100%, 70% 100%)",
      "polygon(75% 0%, 75% 0%, 75% 100%, 75% 100%)",
      "polygon(80% 0%, 80% 0%, 80% 100%, 80% 100%)",
      "polygon(85% 0%, 85% 0%, 85% 100%, 85% 100%)",
      "polygon(90% 0%, 90% 0%, 90% 100%, 90% 100%)",
      "polygon(95% 0%, 95% 0%, 95% 100%, 95% 100%)",
      "polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)"
      ];
      console.log("Function 1:",masks.length);

    if (masks.length > 0) {
        masks.forEach((mask, index) => {
            gsap.to(mask, {
                clipPath: clipPathValues[index % clipPathValues.length],
                duration: 1,
                delay: index * 0.1,
                stagger: 0.2,
                onComplete: () => {
                    mask.classList.remove("mask");
                    mask.classList.add("maskP1");

                    if (index === masks.length - 1) {
                        // Use setTimeout instead of setInterval
                        setTimeout(() => {
                            animateMasksIn(".project-a-tag .hero-img .maskP1");
                        }, 0);
                    }
                }
            });
        });
    } else {
        console.error("No masks found or masksArray1 is not iterable.");
    }
}

  
  function animateMasksIn(masksPath) {
    const masksIn = document.querySelectorAll(masksPath);
    const clipPathValues1 = ["polygon(0% 0%, 5.5% 0%, 5.5% 100%, 0% 100%)",
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
    "polygon(95% 0%, 100% 0%, 100% 100%, 95% 100%)"];
  
    if (masksIn.length > 0) {
      masksIn.forEach((maskP1, index) => {
        gsap.to(maskP1, {
          clipPath: clipPathValues1[index % clipPathValues1.length],
          duration: 1,
          delay: index * 0.1,
          stagger: 0.2,
          force3D: true,
          ease: "back.out(1.7)",
          onComplete: () => {
            setTimeout(() => {
              isAnimating = false;
            }, 950);
          }
        });
      });
    } else {
      console.error("No masks found or masksArray2 is not iterable.");
    }
  }

let isAnimating2 = false;

  function animateMasksOut2(masksPath) {
    isAnimating2 = true;
    const masks = document.querySelectorAll(masksPath);
    const clipPathValues = [
    "polygon(5% 0%, 5% 0%, 5% 100%, 5% 100%)",
    "polygon(10% 0%, 10% 0%, 10% 100%, 10% 100%)",
    "polygon(15% 0%, 15% 0%, 15% 100%, 15% 100%)",
    "polygon(20% 0%, 20% 0%, 20% 100%, 20% 100%)",
    "polygon(25% 0%, 25% 0%, 25% 100%, 25% 100%)",
    "polygon(30% 0%, 30% 0%, 30% 100%, 30% 100%)",
    "polygon(35% 0%, 35% 0%, 35% 100%, 35% 100%)",
    "polygon(40% 0%, 40% 0%, 40% 100%, 40% 100%)",
    "polygon(45% 0%, 45% 0%, 45% 100%, 45% 100%)",
    "polygon(50% 0%, 50% 0%, 50% 100%, 50% 100%)",
    "polygon(55% 0%, 55% 0%, 55% 100%, 55% 100%)",
    "polygon(60% 0%, 60% 0%, 60% 100%, 60% 100%)",
    "polygon(65% 0%, 65% 0%, 65% 100%, 65% 100%)",
    "polygon(70% 0%, 70% 0%, 70% 100%, 70% 100%)",
    "polygon(75% 0%, 75% 0%, 75% 100%, 75% 100%)",
    "polygon(80% 0%, 80% 0%, 80% 100%, 80% 100%)",
    "polygon(85% 0%, 85% 0%, 85% 100%, 85% 100%)",
    "polygon(90% 0%, 90% 0%, 90% 100%, 90% 100%)",
    "polygon(95% 0%, 95% 0%, 95% 100%, 95% 100%)",
    "polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)"
    ];

    if (masks.length > 0) {
        masks.forEach((maskP1, index) => {
            gsap.to(maskP1, {
                clipPath: clipPathValues[index % clipPathValues.length],
                duration: 1,
                delay: index * 0.1,
                stagger: 0.2,
                onComplete: () => {
                    // Change the class name of each individual mask element
                    maskP1.classList.remove("maskP1");
                    maskP1.classList.add("maskP2");

                    if (index === masks.length - 1) {
                        // This will be called when the last mask completes the animation
                        setTimeout(() => {
                          animateMasksIn2(".project-a-tag .hero-img .maskP2");
                      }, 0);
                    }
                }
            });
        });
    } else {
        console.error("No masks found or masksArray3 is not iterable.");
    }
} 
  
  function animateMasksIn2(masksPath) {
    const masksIn = document.querySelectorAll(masksPath);
    const clipPathValues1 = ["polygon(0% 0%, 5.5% 0%, 5.5% 100%, 0% 100%)",
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
    "polygon(95% 0%, 100% 0%, 100% 100%, 95% 100%)"];
  
    if (masksIn.length > 0) {
      masksIn.forEach((maskP2, index) => {
        gsap.to(maskP2, {
          clipPath: clipPathValues1[index % clipPathValues1.length],
          duration: 1,
          delay: index * 0.1,
          stagger: 0.2,
          force3D: true,
          ease: "back.out(1.7)",
          onComplete: () => {
            setTimeout(() => {
              isAnimating2 = false;
            }, 950);
          }
        });
      });
    } else {
      console.error("No masks found or masksArray4 is not iterable.");
    }
  }

let isAnimating3 = false;

  function animateMasksOut3(masksPath) {
    isAnimating3 = true;
    const masks = document.querySelectorAll(masksPath);
    const clipPathValues = [
    "polygon(5% 0%, 5% 0%, 5% 100%, 5% 100%)",
    "polygon(10% 0%, 10% 0%, 10% 100%, 10% 100%)",
    "polygon(15% 0%, 15% 0%, 15% 100%, 15% 100%)",
    "polygon(20% 0%, 20% 0%, 20% 100%, 20% 100%)",
    "polygon(25% 0%, 25% 0%, 25% 100%, 25% 100%)",
    "polygon(30% 0%, 30% 0%, 30% 100%, 30% 100%)",
    "polygon(35% 0%, 35% 0%, 35% 100%, 35% 100%)",
    "polygon(40% 0%, 40% 0%, 40% 100%, 40% 100%)",
    "polygon(45% 0%, 45% 0%, 45% 100%, 45% 100%)",
    "polygon(50% 0%, 50% 0%, 50% 100%, 50% 100%)",
    "polygon(55% 0%, 55% 0%, 55% 100%, 55% 100%)",
    "polygon(60% 0%, 60% 0%, 60% 100%, 60% 100%)",
    "polygon(65% 0%, 65% 0%, 65% 100%, 65% 100%)",
    "polygon(70% 0%, 70% 0%, 70% 100%, 70% 100%)",
    "polygon(75% 0%, 75% 0%, 75% 100%, 75% 100%)",
    "polygon(80% 0%, 80% 0%, 80% 100%, 80% 100%)",
    "polygon(85% 0%, 85% 0%, 85% 100%, 85% 100%)",
    "polygon(90% 0%, 90% 0%, 90% 100%, 90% 100%)",
    "polygon(95% 0%, 95% 0%, 95% 100%, 95% 100%)",
    "polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)"
    ];

    if (masks.length > 0) {
        masks.forEach((maskP2, index) => {
            gsap.to(maskP2, {
                clipPath: clipPathValues[index % clipPathValues.length],
                duration: 1,
                delay: index * 0.1,
                stagger: 0.2,
                onComplete: () => {
                    // Change the class name of each individual mask element
                    maskP2.classList.remove("maskP2");
                    maskP2.classList.add("maskP3");

                    if (index === masks.length - 1) {
                        // This will be called when the last mask completes the animation
                        setTimeout(() => {
                          animateMasksIn3(".project-a-tag .hero-img .maskP3");
                      }, 100);
                    }
                }
            });
        });
    } else {
        console.error("No masks found or masksArray3 is not iterable.");
    }
} 
  
  function animateMasksIn3(masksPath) {
    const masksIn = document.querySelectorAll(masksPath);
    const clipPathValues1 = ["polygon(0% 0%, 5.5% 0%, 5.5% 100%, 0% 100%)",
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
    "polygon(95% 0%, 100% 0%, 100% 100%, 95% 100%)"];
  
    if (masksIn.length > 0) {
      masksIn.forEach((maskP3, index) => {
        gsap.to(maskP3, {
          clipPath: clipPathValues1[index % clipPathValues1.length],
          duration: 1,
          delay: index * 0.1,
          stagger: 0.2,
          force3D: true,
          ease: "back.out(1.7)",
          onComplete: () => {
            setTimeout(() => {
              isAnimating3 = false;
            }, 950);
          }
        });
      });
    } else {
      console.error("No masks found or masksArray4 is not iterable.");
    }
  }

let isAnimating4 = false;

  function animateMasksOut4(masksPath) {
    isAnimating4 = true;
    const masks = document.querySelectorAll(masksPath);
    const clipPathValues = [
    "polygon(5% 0%, 5% 0%, 5% 100%, 5% 100%)",
    "polygon(10% 0%, 10% 0%, 10% 100%, 10% 100%)",
    "polygon(15% 0%, 15% 0%, 15% 100%, 15% 100%)",
    "polygon(20% 0%, 20% 0%, 20% 100%, 20% 100%)",
    "polygon(25% 0%, 25% 0%, 25% 100%, 25% 100%)",
    "polygon(30% 0%, 30% 0%, 30% 100%, 30% 100%)",
    "polygon(35% 0%, 35% 0%, 35% 100%, 35% 100%)",
    "polygon(40% 0%, 40% 0%, 40% 100%, 40% 100%)",
    "polygon(45% 0%, 45% 0%, 45% 100%, 45% 100%)",
    "polygon(50% 0%, 50% 0%, 50% 100%, 50% 100%)",
    "polygon(55% 0%, 55% 0%, 55% 100%, 55% 100%)",
    "polygon(60% 0%, 60% 0%, 60% 100%, 60% 100%)",
    "polygon(65% 0%, 65% 0%, 65% 100%, 65% 100%)",
    "polygon(70% 0%, 70% 0%, 70% 100%, 70% 100%)",
    "polygon(75% 0%, 75% 0%, 75% 100%, 75% 100%)",
    "polygon(80% 0%, 80% 0%, 80% 100%, 80% 100%)",
    "polygon(85% 0%, 85% 0%, 85% 100%, 85% 100%)",
    "polygon(90% 0%, 90% 0%, 90% 100%, 90% 100%)",
    "polygon(95% 0%, 95% 0%, 95% 100%, 95% 100%)",
    "polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)"
    ];

    if (masks.length > 0) {
        masks.forEach((maskP3, index) => {
            gsap.to(maskP3, {
                clipPath: clipPathValues[index % clipPathValues.length],
                duration: 1,
                delay: index * 0.1,
                stagger: 0.2,
                onComplete: () => {
                    // Change the class name of each individual mask element
                    maskP3.classList.remove("maskP3");
                    maskP3.classList.add("maskP4");

                    if (index === masks.length - 1) {
                        // This will be called when the last mask completes the animation
                        setTimeout(() => {
                          animateMasksIn4(".project-a-tag .hero-img .maskP4");
                      }, 0);
                    }
                }
            });
        });
    } else {
        console.error("No masks found or masksArray3 is not iterable.");
    }
} 
  
  function animateMasksIn4(masksPath) {
    const masksIn = document.querySelectorAll(masksPath);
    const clipPathValues1 = ["polygon(0% 0%, 5.5% 0%, 5.5% 100%, 0% 100%)",
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
    "polygon(95% 0%, 100% 0%, 100% 100%, 95% 100%)"];
  
    if (masksIn.length > 0) {
      masksIn.forEach((maskP4, index) => {
        gsap.to(maskP4, {
          clipPath: clipPathValues1[index % clipPathValues1.length],
          duration: 1,
          delay: index * 0.1,
          stagger: 0.2,
          force3D: true,
          ease: "back.out(1.7)",
          onComplete: () => {
            setTimeout(() => {
              isAnimating4 = false;
            }, 950);
          }
        });
      });
    } else {
      console.error("No masks found or masksArray4 is not iterable.");
    }
  }

let isAnimating5 = false;


  function animateMasksOut5(masksPath) {
    isAnimating5 = true;
    const masks = document.querySelectorAll(masksPath);
    const clipPathValues = [
    "polygon(5% 0%, 5% 0%, 5% 100%, 5% 100%)",
    "polygon(10% 0%, 10% 0%, 10% 100%, 10% 100%)",
    "polygon(15% 0%, 15% 0%, 15% 100%, 15% 100%)",
    "polygon(20% 0%, 20% 0%, 20% 100%, 20% 100%)",
    "polygon(25% 0%, 25% 0%, 25% 100%, 25% 100%)",
    "polygon(30% 0%, 30% 0%, 30% 100%, 30% 100%)",
    "polygon(35% 0%, 35% 0%, 35% 100%, 35% 100%)",
    "polygon(40% 0%, 40% 0%, 40% 100%, 40% 100%)",
    "polygon(45% 0%, 45% 0%, 45% 100%, 45% 100%)",
    "polygon(50% 0%, 50% 0%, 50% 100%, 50% 100%)",
    "polygon(55% 0%, 55% 0%, 55% 100%, 55% 100%)",
    "polygon(60% 0%, 60% 0%, 60% 100%, 60% 100%)",
    "polygon(65% 0%, 65% 0%, 65% 100%, 65% 100%)",
    "polygon(70% 0%, 70% 0%, 70% 100%, 70% 100%)",
    "polygon(75% 0%, 75% 0%, 75% 100%, 75% 100%)",
    "polygon(80% 0%, 80% 0%, 80% 100%, 80% 100%)",
    "polygon(85% 0%, 85% 0%, 85% 100%, 85% 100%)",
    "polygon(90% 0%, 90% 0%, 90% 100%, 90% 100%)",
    "polygon(95% 0%, 95% 0%, 95% 100%, 95% 100%)",
    "polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)"
    ];

    if (masks.length > 0) {
        masks.forEach((maskP4, index) => {
            gsap.to(maskP4, {
                clipPath: clipPathValues[index % clipPathValues.length],
                duration: 1,
                delay: index * 0.1,
                stagger: 0.2,
                onComplete: () => {
                    // Change the class name of each individual mask element
                    maskP4.classList.remove("maskP4");
                    maskP4.classList.add("maskP5");

                    if (index === masks.length - 1) {
                        // This will be called when the last mask completes the animation
                        setTimeout(() => {
                          animateMasksIn5(".project-a-tag .hero-img .maskP5");
                      }, 100);
                    }
                }
            });
        });
    } else {
        console.error("No masks found or masksArray3 is not iterable.");
    }
} 
  
  function animateMasksIn5(masksPath) {
    const masksIn = document.querySelectorAll(masksPath);
    const clipPathValues1 = ["polygon(0% 0%, 5.5% 0%, 5.5% 100%, 0% 100%)",
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
    "polygon(95% 0%, 100% 0%, 100% 100%, 95% 100%)"];
  
    if (masksIn.length > 0) {
      masksIn.forEach((maskP5, index) => {
        gsap.to(maskP5, {
          clipPath: clipPathValues1[index % clipPathValues1.length],
          duration: 1,
          delay: index * 0.1,
          stagger: 0.2,
          force3D: true,
          ease: "back.out(1.7)",
          onComplete: () => {
            setTimeout(() => {
              isAnimating5 = false;
            }, 950);
          }
        });
      });
    } else {
      console.error("No masks found or masksArray4 is not iterable.");
    }
  }

let isAnimating6 = false;

  function animateMasksOut6(masksPath) {
    isAnimating6 = true;
    const masks = document.querySelectorAll(masksPath);
    const clipPathValues = [
    "polygon(5% 0%, 5% 0%, 5% 100%, 5% 100%)",
    "polygon(10% 0%, 10% 0%, 10% 100%, 10% 100%)",
    "polygon(15% 0%, 15% 0%, 15% 100%, 15% 100%)",
    "polygon(20% 0%, 20% 0%, 20% 100%, 20% 100%)",
    "polygon(25% 0%, 25% 0%, 25% 100%, 25% 100%)",
    "polygon(30% 0%, 30% 0%, 30% 100%, 30% 100%)",
    "polygon(35% 0%, 35% 0%, 35% 100%, 35% 100%)",
    "polygon(40% 0%, 40% 0%, 40% 100%, 40% 100%)",
    "polygon(45% 0%, 45% 0%, 45% 100%, 45% 100%)",
    "polygon(50% 0%, 50% 0%, 50% 100%, 50% 100%)",
    "polygon(55% 0%, 55% 0%, 55% 100%, 55% 100%)",
    "polygon(60% 0%, 60% 0%, 60% 100%, 60% 100%)",
    "polygon(65% 0%, 65% 0%, 65% 100%, 65% 100%)",
    "polygon(70% 0%, 70% 0%, 70% 100%, 70% 100%)",
    "polygon(75% 0%, 75% 0%, 75% 100%, 75% 100%)",
    "polygon(80% 0%, 80% 0%, 80% 100%, 80% 100%)",
    "polygon(85% 0%, 85% 0%, 85% 100%, 85% 100%)",
    "polygon(90% 0%, 90% 0%, 90% 100%, 90% 100%)",
    "polygon(95% 0%, 95% 0%, 95% 100%, 95% 100%)",
    "polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)"
    ];

    if (masks.length > 0) {
        masks.forEach((maskP5, index) => {
            gsap.to(maskP5, {
                clipPath: clipPathValues[index % clipPathValues.length],
                duration: 1,
                delay: index * 0.1,
                stagger: 0.2,
                onComplete: () => {
                    // Change the class name of each individual mask element
                    maskP5.classList.remove("maskP5");
                    maskP5.classList.add("mask");

                    if (index === masks.length - 1) {
                        // This will be called when the last mask completes the animation
                        setTimeout(() => {
                          animateMasksIn6(".project-a-tag .hero-img .mask");
                      }, 100);
                    }
                }
            });
        });
    } else {
        console.error("No masks found or masksArray3 is not iterable.");
    }
} 
  
  function animateMasksIn6(masksPath) {
    const masksIn = document.querySelectorAll(masksPath);
    const clipPathValues1 = ["polygon(0% 0%, 5.5% 0%, 5.5% 100%, 0% 100%)",
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
    "polygon(95% 0%, 100% 0%, 100% 100%, 95% 100%)"];
  
    if (masksIn.length > 0) {
      masksIn.forEach((mask, index) => {
        gsap.to(mask, {
          clipPath: clipPathValues1[index % clipPathValues1.length],
          duration: 1,
          delay: index * 0.1,
          stagger: 0.2,
          force3D: true,
          ease: "back.out(1.7)",
          onComplete: () => {
            setTimeout(() => {
              isAnimating6 = false;
            }, 950);
          }
        });
      });
    } else {
      console.error("No masks found or masksArray4 is not iterable.");
    }
  }

//Keys and Swipe paragraph INCREAMENT & DECREAMENT
  const swipeElement = document.body;

  let touchStartX = 0;
  let touchStartY = 0;

  swipeElement.addEventListener('touchstart', handleTouchStart, false);
  swipeElement.addEventListener('touchmove', handleTouchMove, false);

  document.addEventListener('keydown', handleKeyDown, false);

  function handleTouchStart(event) {
    touchStartX = event.touches[0].clientX;
    touchStartY = event.touches[0].clientY;
  }

  function handleTouchMove(event) {
    if (isAnimating || isAnimating2 || isAnimating3 || isAnimating4 || isAnimating5 || isAnimating6 || isAnimating7 || isAnimating8 || isAnimating9 || isAnimating10 || isAnimating11 || isAnimating12) return;
    if (!touchStartX || !touchStartY) {
      return;
    }

    const touchEndX = event.touches[0].clientX;
    const touchEndY = event.touches[0].clientY;

    const deltaX = touchEndX - touchStartX;
    const deltaY = touchEndY - touchStartY;

    if (Math.abs(deltaX) > Math.abs(deltaY)) {
      // Horizontal swipe
      if (deltaX > 0) {
        decreaseIndex();
        console.log('Swipe right');
      } else {
        updateParagraph();
        console.log('Swipe left');
      }
    } else {
      // Vertical swipe
      if (deltaY > 0) {
        decreaseIndex();
        console.log('Swipe down');
      } else {
        updateParagraph();
        console.log('Swipe up');
      }
    }

    // Reset start coordinates
    touchStartX = 0;
    touchStartY = 0;
  }

  function handleKeyDown(event) {
    if (isAnimating || isAnimating2 || isAnimating3 || isAnimating4 || isAnimating5 || isAnimating6 || isAnimating7 || isAnimating8 || isAnimating9 || isAnimating10 || isAnimating11 || isAnimating12) return;
    if (event.key === 'ArrowUp') {
      console.log('Up key pressed');
      updateParagraph();
    }
    if (event.key === 'ArrowRight') {
      console.log('Right key pressed');
      updateParagraph();
    }
    if (event.key === 'ArrowLeft'){
      decreaseIndex();
    }
    if (event.key === 'ArrowDown'){
      decreaseIndex();
    }
  }

  function decreaseIndex() {
    if(isAnimating || isAnimating2 || isAnimating3 || isAnimating4 || isAnimating5 || isAnimating6 || isAnimating7 || isAnimating8 || isAnimating9 || isAnimating10 || isAnimating11 || isAnimating12) return;
    currentIndex = (currentIndex - 1 + values.length) % values.length;
    pageProgress = (currentIndex) % values.length;
    updateProjectInfo();
    handleDecreaseAnimation();
}

function handleDecreaseAnimation() {
    if (currentIndex === 0) {
      animateMasksOut7(".project-a-tag .hero-img .maskP1");
    } 
    else if (currentIndex === 1) {
      animateMasksOut8(".project-a-tag .hero-img .maskP2");
    } 
    else if (currentIndex === 2) {
      animateMasksOut9(".project-a-tag .hero-img .maskP3");
    }
    else if (currentIndex === 3) {
      animateMasksOut10(".project-a-tag .hero-img .maskP4");
    }
    else if (currentIndex === 4) {
      animateMasksOut11(".project-a-tag .hero-img .maskP5");
    }
    else if (currentIndex === 5){
      animateMasksOut12(".project-a-tag .hero-img .mask");
    }
    if(pageProgress === 0){
      pageBar.style.width = "16.66666667%"
    }
    
    if(pageProgress === 1){
      pageBar.style.width = "33.33333334%"
    }
    
    if(pageProgress === 2){
      pageBar.style.width = "50.00000001%"
    }
    
    if(pageProgress === 3){
      pageBar.style.width = "66.66666668%"
    }
    
    if(pageProgress === 4){
      pageBar.style.width = "83.33333335%"
    }
    
    if(pageProgress === 5){
      pageBar.style.width = "100%"
    }
}


function updateProjectInfo() {
  const project = {
      "BLEND DESIGN": {
          link: "/Blend Design.html",
          year: "2023",
          role: "3D/ DESIGN",
          awards: "SECOND",
          agency: "CODE WEEK BY APEEJAY SCHOOL NOIDA",
      },
      "REWORK RENDER": {
          link: "/Blend Design.html",
          year: "2023",
          role: "VIDEO EDITING",
          awards: "HONORABLE MENTION",
          agency: "WARTEX #9.0",
      },
      "VIDEO EDITING":{
        link: "/Blend Design.html",
        year: "2023",
        role: "Editor",
        awards: "THIRD",
        agency: "CODE WEEK BY APEEJAY SCHOOL NOIDA",
      },
      "ISAN":{
        link: "#",
        year: "2024",
        role: "Developer",
        awards: "N/A",
        agency: "SELF",
      },
      "TECHFEST 2017":{
        link: "/Blend Design.html",
        year: "2023",
        role: "Editor",
        awards: "THIRD",
        agency: "CODE WEEK BY APEEJAY SCHOOL NOIDA",
      },
    "FRAME FUSION":{
        link: "/Blend Design.html",
        year: "2023",
        role: "Editor",
        awards: "FOURTH",
        agency: "WARTEX # 9.0",
    },
      
  };

  const projectData = project[values[currentIndex]];

  ProjectDataValue.innerHTML = values[currentIndex];
  ProjectDataValue.setAttribute("data-value", values[currentIndex]);
  ProjectLink.setAttribute("href", projectData.link);
  yearIndex.innerHTML = projectData.year;
  roleIndex.innerHTML = projectData.role;
  awardsIndex.innerHTML = projectData.awards;
  agencyIndex.innerHTML = projectData.agency;
  projectCounter.innerHTML = `P /0${currentIndex + 1}`;
}


let isAnimating7 = false;
function animateMasksOut7(masksPath) {
  isAnimating7 = true;
  const masks = document.querySelectorAll(masksPath);
  console.log("Selected elements:", masks);
  const clipPathValues = [
  "polygon(5% 0%, 5% 0%, 5% 100%, 5% 100%)",
  "polygon(10% 0%, 10% 0%, 10% 100%, 10% 100%)",
  "polygon(15% 0%, 15% 0%, 15% 100%, 15% 100%)",
  "polygon(20% 0%, 20% 0%, 20% 100%, 20% 100%)",
  "polygon(25% 0%, 25% 0%, 25% 100%, 25% 100%)",
  "polygon(30% 0%, 30% 0%, 30% 100%, 30% 100%)",
  "polygon(35% 0%, 35% 0%, 35% 100%, 35% 100%)",
  "polygon(40% 0%, 40% 0%, 40% 100%, 40% 100%)",
  "polygon(45% 0%, 45% 0%, 45% 100%, 45% 100%)",
  "polygon(50% 0%, 50% 0%, 50% 100%, 50% 100%)",
  "polygon(55% 0%, 55% 0%, 55% 100%, 55% 100%)",
  "polygon(60% 0%, 60% 0%, 60% 100%, 60% 100%)",
  "polygon(65% 0%, 65% 0%, 65% 100%, 65% 100%)",
  "polygon(70% 0%, 70% 0%, 70% 100%, 70% 100%)",
  "polygon(75% 0%, 75% 0%, 75% 100%, 75% 100%)",
  "polygon(80% 0%, 80% 0%, 80% 100%, 80% 100%)",
  "polygon(85% 0%, 85% 0%, 85% 100%, 85% 100%)",
  "polygon(90% 0%, 90% 0%, 90% 100%, 90% 100%)",
  "polygon(95% 0%, 95% 0%, 95% 100%, 95% 100%)",
  "polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)"
  ];
   console.log("Function 2:", masks.length);

  if (masks.length > 0) {
      masks.forEach((maskP1, index) => {
          gsap.to(maskP1, {
              clipPath: clipPathValues[index % clipPathValues.length],
              duration: 1,
              delay: index * 0.1,
              stagger: 0.2,
              onComplete: () => {
                  // Change the class name of each individual mask element
                  maskP1.classList.remove("maskP1");
                  maskP1.classList.add("mask");

                  if (index === masks.length - 1) {
                      // This will be called when the last mask completes the animation
                      setTimeout(() => {
                        animateMasksIn7(".project-a-tag .hero-img .mask");
                    }, 100);
                  }
              }
          });
      });
  } else {
      console.error("No masks found or masksArray3 is not iterable.");
  }
} 

function animateMasksIn7(masksPath) {
  const masksIn = document.querySelectorAll(masksPath);
  const clipPathValues1 = ["polygon(0% 0%, 5.5% 0%, 5.5% 100%, 0% 100%)",
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
  "polygon(95% 0%, 100% 0%, 100% 100%, 95% 100%)"];

  if (masksIn.length > 0) {
    masksIn.forEach((mask, index) => {
      gsap.to(mask, {
        clipPath: clipPathValues1[index % clipPathValues1.length],
        duration: 1,
        delay: index * 0.1,
        stagger: 0.2,
        force3D: true,
        ease: "back.out(1.7)",
        onComplete: () => {
          setTimeout(() => {
            isAnimating7 = false;
          }, 950);
        }
      });
    });
  } else {
    console.error("No masks found or masksArray4 is not iterable.");
  }
}

let isAnimating8 = false;
function animateMasksOut8(masksPath) {
  isAnimating8 = true;
  const masks = document.querySelectorAll(masksPath);
  console.log("Selected elements:", masks);
  const clipPathValues = [
  "polygon(5% 0%, 5% 0%, 5% 100%, 5% 100%)",
  "polygon(10% 0%, 10% 0%, 10% 100%, 10% 100%)",
  "polygon(15% 0%, 15% 0%, 15% 100%, 15% 100%)",
  "polygon(20% 0%, 20% 0%, 20% 100%, 20% 100%)",
  "polygon(25% 0%, 25% 0%, 25% 100%, 25% 100%)",
  "polygon(30% 0%, 30% 0%, 30% 100%, 30% 100%)",
  "polygon(35% 0%, 35% 0%, 35% 100%, 35% 100%)",
  "polygon(40% 0%, 40% 0%, 40% 100%, 40% 100%)",
  "polygon(45% 0%, 45% 0%, 45% 100%, 45% 100%)",
  "polygon(50% 0%, 50% 0%, 50% 100%, 50% 100%)",
  "polygon(55% 0%, 55% 0%, 55% 100%, 55% 100%)",
  "polygon(60% 0%, 60% 0%, 60% 100%, 60% 100%)",
  "polygon(65% 0%, 65% 0%, 65% 100%, 65% 100%)",
  "polygon(70% 0%, 70% 0%, 70% 100%, 70% 100%)",
  "polygon(75% 0%, 75% 0%, 75% 100%, 75% 100%)",
  "polygon(80% 0%, 80% 0%, 80% 100%, 80% 100%)",
  "polygon(85% 0%, 85% 0%, 85% 100%, 85% 100%)",
  "polygon(90% 0%, 90% 0%, 90% 100%, 90% 100%)",
  "polygon(95% 0%, 95% 0%, 95% 100%, 95% 100%)",
  "polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)"
  ];
   console.log("Function 2:", masks.length);

  if (masks.length > 0) {
      masks.forEach((maskP2, index) => {
          gsap.to(maskP2, {
              clipPath: clipPathValues[index % clipPathValues.length],
              duration: 1,
              delay: index * 0.1,
              stagger: 0.2,
              onComplete: () => {
                  // Change the class name of each individual mask element
                  maskP2.classList.remove("maskP2");
                  maskP2.classList.add("maskP1");

                  if (index === masks.length - 1) {
                      // This will be called when the last mask completes the animation
                      setTimeout(() => {
                        animateMasksIn8(".project-a-tag .hero-img .maskP1");
                    }, 100);
                  }
              }
          });
      });
  } else {
      console.error("No masks found or masksArray3 is not iterable.");
  }
} 

function animateMasksIn8(masksPath) {
  const masksIn = document.querySelectorAll(masksPath);
  const clipPathValues1 = ["polygon(0% 0%, 5.5% 0%, 5.5% 100%, 0% 100%)",
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
  "polygon(95% 0%, 100% 0%, 100% 100%, 95% 100%)"];

  if (masksIn.length > 0) {
    masksIn.forEach((maskP1, index) => {
      gsap.to(maskP1, {
        clipPath: clipPathValues1[index % clipPathValues1.length],
        duration: 1,
        delay: index * 0.1,
        stagger: 0.2,
        force3D: true,
        ease: "back.out(1.7)",
        onComplete: () => {
          setTimeout(() => {
            isAnimating8 = false;
          }, 950);
        }
      });
    });
  } else {
    console.error("No masks found or masksArray4 is not iterable.");
  }
}

let isAnimating9 = false;
function animateMasksOut9(masksPath) {
  isAnimating9 = true;
  const masks = document.querySelectorAll(masksPath);
  console.log("Selected elements:", masks);
  const clipPathValues = [
  "polygon(5% 0%, 5% 0%, 5% 100%, 5% 100%)",
  "polygon(10% 0%, 10% 0%, 10% 100%, 10% 100%)",
  "polygon(15% 0%, 15% 0%, 15% 100%, 15% 100%)",
  "polygon(20% 0%, 20% 0%, 20% 100%, 20% 100%)",
  "polygon(25% 0%, 25% 0%, 25% 100%, 25% 100%)",
  "polygon(30% 0%, 30% 0%, 30% 100%, 30% 100%)",
  "polygon(35% 0%, 35% 0%, 35% 100%, 35% 100%)",
  "polygon(40% 0%, 40% 0%, 40% 100%, 40% 100%)",
  "polygon(45% 0%, 45% 0%, 45% 100%, 45% 100%)",
  "polygon(50% 0%, 50% 0%, 50% 100%, 50% 100%)",
  "polygon(55% 0%, 55% 0%, 55% 100%, 55% 100%)",
  "polygon(60% 0%, 60% 0%, 60% 100%, 60% 100%)",
  "polygon(65% 0%, 65% 0%, 65% 100%, 65% 100%)",
  "polygon(70% 0%, 70% 0%, 70% 100%, 70% 100%)",
  "polygon(75% 0%, 75% 0%, 75% 100%, 75% 100%)",
  "polygon(80% 0%, 80% 0%, 80% 100%, 80% 100%)",
  "polygon(85% 0%, 85% 0%, 85% 100%, 85% 100%)",
  "polygon(90% 0%, 90% 0%, 90% 100%, 90% 100%)",
  "polygon(95% 0%, 95% 0%, 95% 100%, 95% 100%)",
  "polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)"
  ];
   console.log("Function 2:", masks.length);

  if (masks.length > 0) {
      masks.forEach((maskP3, index) => {
          gsap.to(maskP3, {
              clipPath: clipPathValues[index % clipPathValues.length],
              duration: 1,
              delay: index * 0.1,
              stagger: 0.2,
              onComplete: () => {
                  // Change the class name of each individual mask element
                  maskP3.classList.remove("maskP3");
                  maskP3.classList.add("maskP2");

                  if (index === masks.length - 1) {
                      // This will be called when the last mask completes the animation
                      setTimeout(() => {
                        animateMasksIn9(".project-a-tag .hero-img .maskP2");
                    }, 100);
                  }
              }
          });
      });
  } else {
      console.error("No masks found or masksArray3 is not iterable.");
  }
} 

function animateMasksIn9(masksPath) {
  const masksIn = document.querySelectorAll(masksPath);
  const clipPathValues1 = ["polygon(0% 0%, 5.5% 0%, 5.5% 100%, 0% 100%)",
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
  "polygon(95% 0%, 100% 0%, 100% 100%, 95% 100%)"];

  if (masksIn.length > 0) {
    masksIn.forEach((maskP2, index) => {
      gsap.to(maskP2, {
        clipPath: clipPathValues1[index % clipPathValues1.length],
        duration: 1,
        delay: index * 0.1,
        stagger: 0.2,
        force3D: true,
        ease: "back.out(1.7)",
        onComplete: () => {
          setTimeout(() => {
            isAnimating9 = false;
          }, 950);
        }
      });
    });
  } else {
    console.error("No masks found or masksArray4 is not iterable.");
  }
}

let isAnimating10 = false;
function animateMasksOut10(masksPath) {
  isAnimating10 = true;
  const masks = document.querySelectorAll(masksPath);
  console.log("Selected elements:", masks);
  const clipPathValues = [
  "polygon(5% 0%, 5% 0%, 5% 100%, 5% 100%)",
  "polygon(10% 0%, 10% 0%, 10% 100%, 10% 100%)",
  "polygon(15% 0%, 15% 0%, 15% 100%, 15% 100%)",
  "polygon(20% 0%, 20% 0%, 20% 100%, 20% 100%)",
  "polygon(25% 0%, 25% 0%, 25% 100%, 25% 100%)",
  "polygon(30% 0%, 30% 0%, 30% 100%, 30% 100%)",
  "polygon(35% 0%, 35% 0%, 35% 100%, 35% 100%)",
  "polygon(40% 0%, 40% 0%, 40% 100%, 40% 100%)",
  "polygon(45% 0%, 45% 0%, 45% 100%, 45% 100%)",
  "polygon(50% 0%, 50% 0%, 50% 100%, 50% 100%)",
  "polygon(55% 0%, 55% 0%, 55% 100%, 55% 100%)",
  "polygon(60% 0%, 60% 0%, 60% 100%, 60% 100%)",
  "polygon(65% 0%, 65% 0%, 65% 100%, 65% 100%)",
  "polygon(70% 0%, 70% 0%, 70% 100%, 70% 100%)",
  "polygon(75% 0%, 75% 0%, 75% 100%, 75% 100%)",
  "polygon(80% 0%, 80% 0%, 80% 100%, 80% 100%)",
  "polygon(85% 0%, 85% 0%, 85% 100%, 85% 100%)",
  "polygon(90% 0%, 90% 0%, 90% 100%, 90% 100%)",
  "polygon(95% 0%, 95% 0%, 95% 100%, 95% 100%)",
  "polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)"
  ];
   console.log("Function 2:", masks.length);

  if (masks.length > 0) {
      masks.forEach((maskP4, index) => {
          gsap.to(maskP4, {
              clipPath: clipPathValues[index % clipPathValues.length],
              duration: 1,
              delay: index * 0.1,
              stagger: 0.2,
              onComplete: () => {
                  // Change the class name of each individual mask element
                  maskP4.classList.remove("maskP4");
                  maskP4.classList.add("maskP3");

                  if (index === masks.length - 1) {
                      // This will be called when the last mask completes the animation
                      setTimeout(() => {
                        animateMasksIn10(".project-a-tag .hero-img .maskP3");
                    }, 100);
                  }
              }
          });
      });
  } else {
      console.error("No masks found or masksArray3 is not iterable.");
  }
} 

function animateMasksIn10(masksPath) {
  const masksIn = document.querySelectorAll(masksPath);
  const clipPathValues1 = ["polygon(0% 0%, 5.5% 0%, 5.5% 100%, 0% 100%)",
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
  "polygon(95% 0%, 100% 0%, 100% 100%, 95% 100%)"];

  if (masksIn.length > 0) {
    masksIn.forEach((maskP3, index) => {
      gsap.to(maskP3, {
        clipPath: clipPathValues1[index % clipPathValues1.length],
        duration: 1,
        delay: index * 0.1,
        stagger: 0.2,
        force3D: true,
        ease: "back.out(1.7)",
        onComplete: () => {
          setTimeout(() => {
            isAnimating10 = false;
          }, 950);
        }
      });
    });
  } else {
    console.error("No masks found or masksArray4 is not iterable.");
  }
}

let isAnimating11 = false;
function animateMasksOut11(masksPath) {
  isAnimating11 = true;
  const masks = document.querySelectorAll(masksPath);
  console.log("Selected elements:", masks);
  const clipPathValues = [
  "polygon(5% 0%, 5% 0%, 5% 100%, 5% 100%)",
  "polygon(10% 0%, 10% 0%, 10% 100%, 10% 100%)",
  "polygon(15% 0%, 15% 0%, 15% 100%, 15% 100%)",
  "polygon(20% 0%, 20% 0%, 20% 100%, 20% 100%)",
  "polygon(25% 0%, 25% 0%, 25% 100%, 25% 100%)",
  "polygon(30% 0%, 30% 0%, 30% 100%, 30% 100%)",
  "polygon(35% 0%, 35% 0%, 35% 100%, 35% 100%)",
  "polygon(40% 0%, 40% 0%, 40% 100%, 40% 100%)",
  "polygon(45% 0%, 45% 0%, 45% 100%, 45% 100%)",
  "polygon(50% 0%, 50% 0%, 50% 100%, 50% 100%)",
  "polygon(55% 0%, 55% 0%, 55% 100%, 55% 100%)",
  "polygon(60% 0%, 60% 0%, 60% 100%, 60% 100%)",
  "polygon(65% 0%, 65% 0%, 65% 100%, 65% 100%)",
  "polygon(70% 0%, 70% 0%, 70% 100%, 70% 100%)",
  "polygon(75% 0%, 75% 0%, 75% 100%, 75% 100%)",
  "polygon(80% 0%, 80% 0%, 80% 100%, 80% 100%)",
  "polygon(85% 0%, 85% 0%, 85% 100%, 85% 100%)",
  "polygon(90% 0%, 90% 0%, 90% 100%, 90% 100%)",
  "polygon(95% 0%, 95% 0%, 95% 100%, 95% 100%)",
  "polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)"
  ];
   console.log("Function 2:", masks.length);

  if (masks.length > 0) {
      masks.forEach((maskP5, index) => {
          gsap.to(maskP5, {
              clipPath: clipPathValues[index % clipPathValues.length],
              duration: 1,
              delay: index * 0.1,
              stagger: 0.2,
              onComplete: () => {
                  // Change the class name of each individual mask element
                  maskP5.classList.remove("maskP5");
                  maskP5.classList.add("maskP4");

                  if (index === masks.length - 1) {
                      // This will be called when the last mask completes the animation
                      setTimeout(() => {
                        animateMasksIn11(".project-a-tag .hero-img .maskP4");
                    }, 100);
                  }
              }
          });
      });
  } else {
      console.error("No masks found or masksArray3 is not iterable.");
  }
} 

function animateMasksIn11(masksPath) {
  const masksIn = document.querySelectorAll(masksPath);
  const clipPathValues1 = ["polygon(0% 0%, 5.5% 0%, 5.5% 100%, 0% 100%)",
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
  "polygon(95% 0%, 100% 0%, 100% 100%, 95% 100%)"];

  if (masksIn.length > 0) {
    masksIn.forEach((maskP4, index) => {
      gsap.to(maskP4, {
        clipPath: clipPathValues1[index % clipPathValues1.length],
        duration: 1,
        delay: index * 0.1,
        stagger: 0.2,
        force3D: true,
        ease: "back.out(1.7)",
        onComplete: () => {
          setTimeout(() => {
            isAnimating11 = false;
          }, 950);
        }
      });
    });
  } else {
    console.error("No masks found or masksArray4 is not iterable.");
  }
}

let isAnimating12 = false;
function animateMasksOut12(masksPath) {
  isAnimating12 = true;
  const masks = document.querySelectorAll(masksPath);
  console.log("Selected elements:", masks);
  const clipPathValues = [
  "polygon(5% 0%, 5% 0%, 5% 100%, 5% 100%)",
  "polygon(10% 0%, 10% 0%, 10% 100%, 10% 100%)",
  "polygon(15% 0%, 15% 0%, 15% 100%, 15% 100%)",
  "polygon(20% 0%, 20% 0%, 20% 100%, 20% 100%)",
  "polygon(25% 0%, 25% 0%, 25% 100%, 25% 100%)",
  "polygon(30% 0%, 30% 0%, 30% 100%, 30% 100%)",
  "polygon(35% 0%, 35% 0%, 35% 100%, 35% 100%)",
  "polygon(40% 0%, 40% 0%, 40% 100%, 40% 100%)",
  "polygon(45% 0%, 45% 0%, 45% 100%, 45% 100%)",
  "polygon(50% 0%, 50% 0%, 50% 100%, 50% 100%)",
  "polygon(55% 0%, 55% 0%, 55% 100%, 55% 100%)",
  "polygon(60% 0%, 60% 0%, 60% 100%, 60% 100%)",
  "polygon(65% 0%, 65% 0%, 65% 100%, 65% 100%)",
  "polygon(70% 0%, 70% 0%, 70% 100%, 70% 100%)",
  "polygon(75% 0%, 75% 0%, 75% 100%, 75% 100%)",
  "polygon(80% 0%, 80% 0%, 80% 100%, 80% 100%)",
  "polygon(85% 0%, 85% 0%, 85% 100%, 85% 100%)",
  "polygon(90% 0%, 90% 0%, 90% 100%, 90% 100%)",
  "polygon(95% 0%, 95% 0%, 95% 100%, 95% 100%)",
  "polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)"
  ];
   console.log("Function 2:", masks.length);

  if (masks.length > 0) {
      masks.forEach((mask, index) => {
          gsap.to(mask, {
              clipPath: clipPathValues[index % clipPathValues.length],
              duration: 1,
              delay: index * 0.1,
              stagger: 0.2,
              onComplete: () => {
                  // Change the class name of each individual mask element
                  mask.classList.remove("mask");
                  mask.classList.add("maskP5");

                  if (index === masks.length - 1) {
                      // This will be called when the last mask completes the animation
                      setTimeout(() => {
                        animateMasksIn12(".project-a-tag .hero-img .maskP5");
                    }, 100);
                  }
              }
          });
      });
  } else {
      console.error("No masks found or masksArray3 is not iterable.");
  }
} 

function animateMasksIn12(masksPath) {
  const masksIn = document.querySelectorAll(masksPath);
  const clipPathValues1 = ["polygon(0% 0%, 5.5% 0%, 5.5% 100%, 0% 100%)",
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
  "polygon(95% 0%, 100% 0%, 100% 100%, 95% 100%)"];

  if (masksIn.length > 0) {
    masksIn.forEach((maskP5, index) => {
      gsap.to(maskP5, {
        clipPath: clipPathValues1[index % clipPathValues1.length],
        duration: 1,
        delay: index * 0.1,
        stagger: 0.2,
        force3D: true,
        ease: "back.out(1.7)",
        onComplete: () => {
          setTimeout(() => {
            isAnimating12 = false;
          }, 950);
        }
      });
    });
  } else {
    console.error("No masks found or masksArray4 is not iterable.");
  }
}
