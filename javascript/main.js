var txt = "Benjamin Glines";
var speed = 100;
var typeIte = 0;

async function showDescription(descriptionID, experienceListItem) {
  var experiences = document.getElementsByClassName("experience__description");
  var experienceListItems = document.getElementsByClassName("experience__list__item");

  for (i = 0; i < experiences.length; i++) {
    experiences[i].style.visibility = "hidden";
    experiences[i].style.opacity = 0;
    if(experienceListItems[i].style.opacity == "1") {
      experienceListItems[i].style.opacity = "0.5";
    } 
    if(experienceListItems[i].style.boxShadow != "0px 0px 0px") {
      experienceListItems[i].style.boxShadow = "0px 0px 0px";
    }
  }

  for (i = 0; i < experienceListItems.length; i++) {
    if(experienceListItems[i].id == experienceListItem) {
      experienceListItems[i].style.opacity = "1";
      i += 1;
      if(i < experienceListItems.length) {
        experienceListItems[i].style.boxShadow = "inset 0 7px 9px -7px #00000080"
      }
      break;
    }
  }
  document.getElementById(descriptionID).style.visibility = "visible";
  document.getElementById(descriptionID).style.opacity = 1;
  // i = 0;
}

async function displayFront() {
  await sleep(500);
  typeWriter();
  await sleep(2000);
  document.getElementById('front__comment').style.opacity = 1;
  document.getElementById('front__comment').style.visibility = "visible";
  document.getElementById('front__comment').style.transform = "translate(0, -5px)";
  await sleep(1500);
  document.getElementById('scroll-down-icon').style.opacity = 1;
  document.getElementById('scroll-down-icon').style.visibility = "visible";
  document.getElementById('scroll-down-icon').style.transform = "translate(-50%, -25%)";
}

async function scrollWiggle() {

}

function typeWriter() {
  if (typeIte < txt.length) {
    document.getElementById("name").innerHTML += txt.charAt(typeIte);
    typeIte++;
    setTimeout(typeWriter, speed);
  }
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

window.addEventListener("load", function(){
  displayFront();
  showDescription('cclDescription','cclItem');
});

var modal = document.getElementById("project__modal")
var modalContent;
var closeButtonList = document.getElementsByClassName("close");

function showModal(contentID) {
  document.body.style.overflowY = "hidden";
  modal.style.visibility = "visible";
  modal.style.opacity = 1;
  
  modalContent = document.getElementById(contentID);
  modalContent.style.display = "flex";
  modalContent.style.visibility = "visible";
  modalContent.style.opacity = 1;
}

window.onclick = function(event) {
  if (event.target == modal) {
    document.body.style.overflowY = "visible";
    modal.style.visibility = "hidden";
    modal.style.opacity = 0;

    modalContent.style.display = "none";
    modalContent.style.visibility = "hidden";
    modalContent.style.opacity = 0;
  }
  for(j = 0; j < closeButtonList.length; j++) {
    if(event.target == closeButtonList[j]) {
      document.body.style.overflowY = "visible";
      modal.style.visibility = "hidden";
      modal.style.opacity = 0;

      modalContent.style.display = "none";
      modalContent.style.visibility = "hidden";
      modalContent.style.opacity = 0;
    }
  }
}

function displayProject(x) {
  x.style.WebkitFilter = "grayscale(0%) brightness(1)";
  x.style.filter = "grayscale(0%) brightness(1)";
}

function hideProject(x) {
  x.style.WebkitFilter = "grayscale(50%) brightness(0.8)";
  x.style.filter = "grayscale(50%) brightness(0.8)";
}
