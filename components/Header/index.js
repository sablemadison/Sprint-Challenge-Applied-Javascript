// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component

function Header() {
    //create elements
    const headerDiv = document.createElement('div')
    const dateSpan = document.createElement('span')
    const h1 = document.createElement('h1')
    const tempSpan = document.createElement('span')

    //add class names 
    headerDiv.classList.add('header')
    dateSpan.classList.add('date')
    tempSpan.classList.add('temp')

    //add child relationships
    headerDiv.appendChild(dateSpan)
    headerDiv.appendChild(h1)
    headerDiv.appendChild(tempSpan)

    //add text content
    dateSpan.textContent = 'SMARCH 28, 2019';
    h1.textContent = 'Lambda Times'
    tempSpan.textContent = '98°'
    return headerDiv; 
}

//create header
const newHeader = Header();
//select parent element
const parentElement = document.querySelector('.header-container')
// append to parent/add to DOM
parentElement.appendChild(newHeader)