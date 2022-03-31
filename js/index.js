function button1Clicked(){
  document.getElementById('button-1').classList.toggle('was-clicked');
}

function windowLoaded() {
  console.log('loaded');
  document.getElementById('button-1').addEventListener('click',button1Clicked);
}

window.onload = windowLoaded;


function mouseOver() {
  document.getElementById("click2").style.color = "lightblue";
}

function mouseOut() {
  document.getElementById("click2").style.color = "teal";
}
