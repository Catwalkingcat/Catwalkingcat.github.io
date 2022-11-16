let myImage = document.querySelector('img');

myImage.onclick = () => {
    const mySrc = myImage.getAttribute('src');
    if (mySrc == 'images/firefox-icon.png') {
        myImage.setAttribute('src', '../download.jpeg');
    } else {
        myImage.setAttribute('src', 'images/firefox-icon.png');
    }
}

let myButton = document.querySelector('button')
let myHeading = document.querySelector('h1')

function setUserName() {
    const myName = prompt('Please enter your name')
    if (!myName) {
        setUserName()
    } else {
        localStorage.setItem('user name', myName)
        myHeading.textContent = 'Mozilla is cool, ' + myName
    }
}

if (!localStorage.getItem('user name')) {
    setUserName();
} else {
    const storedName = localStorage.getItem('user name')
    myHeading.textContent = 'Mozilla is cool, ' + storedName
}
myButton.onclick = () => {
    setUserName()
}
