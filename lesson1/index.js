
//////////////////////////////////
/////////// Slideshow ////////////
//////////////////////////////////

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";

  if (slideIndex == 10) {
    str.hidden = true;
    bool.hidden = true;
    integer.hidden = false;
    renderActivity(integer)
  }
  else if (slideIndex == 11) {
    integer.hidden = true;
    bool.hidden = true;
    str.hidden = false;
    renderActivity(str)
  }
  else if (slideIndex == 12) {
    integer.hidden = true;
    str.hidden = true;
    bool.hidden = false;
    renderActivity(bool)
  }
  else {
    integer.hidden = true;
    str.hidden = true;
    bool.hidden = true;
  }
} 

var correctColor = "#32CD32"

function buttonHandler1(val) {
  document.getElementById("feedback1").style.color = "black"
  if (val==='correct') {
    document.getElementById("feedback1").innerHTML = "Correct! Nice job!"
    document.getElementById("feedback1").style.color = correctColor
  }
  else {
    document.getElementById("feedback1").innerHTML = "Try again!"
  }
}

function buttonHandler2(val) {
  document.getElementById("feedback2").style.color = "black"
  if (val==='correct') {
    document.getElementById("feedback2").innerHTML = "Correct! Nice job!"
    document.getElementById("feedback2").style.color = correctColor
  }
  else {
    document.getElementById("feedback2").innerHTML = "Try again!"
  }
}

function buttonHandler3(val) {
  document.getElementById("feedback3").style.color = "black"
  if (val==='correct') {
    document.getElementById("feedback3").innerHTML = "Correct! Nice job!"
    document.getElementById("feedback3").style.color = correctColor
  }
  else {
    document.getElementById("feedback3").innerHTML = "Try again!"
  }
}

//////////////////////////////////
/////// Drag-and-drop pg1 ////////
//////////////////////////////////

function renderActivity(ball) {
  
  let currentDroppable = null;

  ball.onmousedown = function(event) {
    let shiftX = event.clientX - ball.getBoundingClientRect().left;
    let shiftY = event.clientY - ball.getBoundingClientRect().top;

    ball.style.position = 'absolute';
    ball.style.marginTop = '0px';
    ball.style.marginLeft = '0px';
    ball.style.zIndex = 1000;

    document.body.append(ball);
    
    moveAt(event.pageX, event.pageY);

    function moveAt(pageX, pageY) {
      ball.style.left = pageX - shiftX + 'px';
      ball.style.top = pageY - shiftY + 'px';
    }
    
    function onMouseMove(event) {
      moveAt(event.pageX, event.pageY);
      ball.hidden = true;
      let elemBelow = document.elementFromPoint(event.clientX, event.clientY);
      ball.hidden = false;
      
      if (!elemBelow) return;
      
      let droppableBelow = elemBelow.closest('.droppable');
      if (currentDroppable != droppableBelow) {
        if (currentDroppable) {
          leaveDroppable(currentDroppable);
        }
        currentDroppable = droppableBelow;
        if (currentDroppable) { 
          enterDroppable(currentDroppable);
        }
      }
    }
    
    document.addEventListener('mousemove', onMouseMove);
    
    ball.onmouseup = function() {
      document.removeEventListener('mousemove', onMouseMove);
      ball.onmouseup = null;
    };
  };

  function enterDroppable(elem) {
    if (elem.id == "target1" && slideIndex == 10) {
      elem.style.background = correctColor;
      document.getElementById("activityText1").innerHTML = "Nice job!"
    }
    else if (elem.id == "target3" && slideIndex == 11) {
      elem.style.background = correctColor;
      document.getElementById("activityText2").innerHTML = "Nice job!"
    }
    else if (elem.id == "target2" && slideIndex == 12) {
      elem.style.background = correctColor;
      document.getElementById("activityText3").innerHTML = "Nice job!"
    }
    else {
      elem.style.background = 'pink';
    }
  }

  function leaveDroppable(elem) {
    elem.style.background = '';
    let txt = "Drag the data type to the real-world concept it matches."
    if (slideIndex==10) {document.getElementById("activityText1").innerHTML = txt}
    else if (slideIndex==11) {document.getElementById("activityText2").innerHTML = txt}
    else if (slideIndex==12) {document.getElementById("activityText3").innerHTML = txt}
}

  ball.ondragstart = function() {
    return false;
  };
}





  