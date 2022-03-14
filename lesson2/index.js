
//////////////////////////////////
/////////// Slideshow ////////////
//////////////////////////////////

var slideIndex = 1;
var buttonIndex = 0;

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
} 

//////////////////////////////////
/////////// Activity /////////////
//////////////////////////////////

function buttonHandler(button) {
  var errorMsg = document.getElementById("error-msg");
  correct = ['square', 'roof', 'door', 'square', 'roof', 'door', 'square', 'roof', 'door'];

  if (buttonIndex > 8) {
    return;
  }

  else if (button === correct[buttonIndex]) {
    buttonIndex += 1;

    if (buttonIndex > 0) {
      document.getElementById("instructions").innerHTML = "What does the computer do next?"
    } 

    let background = 'black';
    let text = 'white';
    if (buttonIndex%3 == 0) {
      document.getElementById("square").style.backgroundColor = text;
      document.getElementById("square").style.color = background;
      document.getElementById("roof").style.backgroundColor = background;
      document.getElementById("roof").style.color = text;
      document.getElementById("door").style.backgroundColor = background;
      document.getElementById("door").style.color = text;
    }
    else if (buttonIndex%3 == 1) {
      document.getElementById("square").style.backgroundColor = background;
      document.getElementById("square").style.color = text;
      document.getElementById("roof").style.backgroundColor = text;
      document.getElementById("roof").style.color = background;
      document.getElementById("door").style.backgroundColor = background;
      document.getElementById("door").style.color = text;
    }
    else if (buttonIndex%3 == 2) {
      document.getElementById("square").style.backgroundColor = background;
      document.getElementById("square").style.color = text;
      document.getElementById("roof").style.backgroundColor = background;
      document.getElementById("roof").style.color = text;
      document.getElementById("door").style.backgroundColor = text;
      document.getElementById("door").style.color = background;
    }
    errorMsg.innerHTML = "Nice job!";

    if (buttonIndex > 8) {
      errorMsg.innerHTML = "Nice job! You completed the loop.";
      errorMsg.style.color = "#32CD32";
      document.getElementById("instructions").innerHTML = "";
      document.getElementById("square").style.backgroundColor = background;
      document.getElementById("square").style.color = text;
    }

    document.getElementById("h0").style.display = 'none';
    document.getElementById("h1").style.display = 'none';
    document.getElementById("h2").style.display = 'none';
    document.getElementById("h3").style.display = 'none';
    document.getElementById("h4").style.display = 'none';
    document.getElementById("h5").style.display = 'none';
    document.getElementById("h6").style.display = 'none';
    document.getElementById("h7").style.display = 'none';
    document.getElementById("h8").style.display = 'none';
    document.getElementById("h9").style.display = 'none';
    if (buttonIndex == 0) {
      document.getElementById("h0").style.display = 'block';
    }
    if (buttonIndex == 1) {
      document.getElementById("h1").style.display = 'block';
    }
    if (buttonIndex == 2) {
      document.getElementById("h2").style.display = 'block';
    }
    if (buttonIndex == 3) {
      document.getElementById("h3").style.display = 'block';
    }
    if (buttonIndex == 4) {
      document.getElementById("h4").style.display = 'block';
    }
    if (buttonIndex == 5) {
      document.getElementById("h5").style.display = 'block';
    }
    if (buttonIndex == 6) {
      document.getElementById("h6").style.display = 'block';
    }
    if (buttonIndex == 7) {
      document.getElementById("h7").style.display = 'block';
    }
    if (buttonIndex == 8) {
      document.getElementById("h8").style.display = 'block';
    }
    if (buttonIndex == 9) {
      document.getElementById("h9").style.display = 'block';
    }
  }

  else {
    errorMsg.innerHTML = "Try again!"
  }

}

  