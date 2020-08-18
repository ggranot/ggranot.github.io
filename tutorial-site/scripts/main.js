let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/Phone Reaction.png') {
      myImage.setAttribute('src','images/AnotherDay.png');
    } else {
      myImage.setAttribute('src','images/Phone Reaction.png');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
  let myName = prompt('Please enter your name.');
  if(!myName) {
  	setUserName();
  } else {
  	localStorage.setItem('name', myName);
  	myHeading.textContent = 'Welcome to Gilad\'s MS Paintings, ' + myName;
  }
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.textContent = 'Welcome to Gilad\'s MS Paintings, ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}