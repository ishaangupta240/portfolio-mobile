//Theme Randomizer
function randomTheme(){
    var randomTheme = Math.floor(Math.random() * 8);
    var htmlclass = document.getElementById("html-tag");
    
    if(randomTheme===0){
      htmlclass.classList.add("dark-theme");
    }
    if(randomTheme===1){
      htmlclass.classList.add("grey-theme");
    }
    if(randomTheme===2){
      htmlclass.classList.add("lime-green-theme");
    }
    if(randomTheme===3){
      htmlclass.classList.add("grey-white-theme");
    }
    if(randomTheme===4){
      htmlclass.classList.add("red-theme");
    }
    if(randomTheme===5){
      htmlclass.classList.add("khaki-theme");
    }
    if(randomTheme===6){
      htmlclass.classList.add("light-theme");
    }
    if(randomTheme===7){
      htmlclass.classList.add("pastel-red-theme");
    }
    }
    
    document.addEventListener("DOMContentLoaded", randomTheme())
    

    //Theme Button
    var predefinedClasses = [
      "dark-theme",
      "grey-theme",
      "lime-green-theme",
      "grey-white-theme",
      "red-theme",
      "khaki-theme",
      "light-theme",
      "pastel-red-theme"
    ];
    

    function changeClass() {
      var htmlclass = document.getElementById("html-tag").className;
    
    if(htmlclass==="dark-theme"){
      var currentClassIndex = 0;
    }
    
    if(htmlclass==="grey-theme"){
      var currentClassIndex = 1;
    }
    
    if(htmlclass==="lime-green-theme"){
      var currentClassIndex = 2;
    }
    
    if(htmlclass==="grey-white-theme"){
      var currentClassIndex = 3;
    }
    
    if(htmlclass==="red-theme"){
      var currentClassIndex = 4;
    }
    
    if(htmlclass==="khaki-theme"){
      var currentClassIndex = 5;
    }
    
    if(htmlclass==="light-theme"){
      var currentClassIndex = 6;
    }
    
    if(htmlclass==="pastel-red-theme"){
      var currentClassIndex = 7;
    }
    
    
      var element = document.getElementById("html-tag");
    
      // Remove the current class
      element.classList.remove(predefinedClasses[currentClassIndex]);
    
    
      // Increment the class index or reset to 0 if it exceeds the number of predefined classes
      currentClassIndex = (currentClassIndex + 1) % predefinedClasses.length;
    
      // Add the new class
      element.classList.add(predefinedClasses[currentClassIndex]);
    }




    